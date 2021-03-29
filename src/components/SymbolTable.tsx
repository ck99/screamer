import React, {useState, useEffect} from "react";
import useBinanceSymbols, {SymbolInformation} from "../hooks/useBinanceSymbols";
import useBinanceLiquidationsStream, {LiquidationEvent} from "../hooks/useBinanceLiquidationsStream";
import _ from 'lodash';
import Table from 'react-bootstrap/Table'
import {Synth} from "tone";


interface IDictionary<TValue> {
    [id: string]: TValue;
}

type LiquidationEventMap = IDictionary<LiquidationEvent[]>;

const SymbolTable = () => {
    const synth = new Synth().toDestination();
    const symbols = useBinanceSymbols();
    const [connected, lastLiquidation] = useBinanceLiquidationsStream();
    const [liquidationEvents, setLiquidationEvents] = useState<LiquidationEventMap>({});

    const insertLiquidationEvent = (event: LiquidationEvent) => {
        if(event.side === "BUY") { beepUp()} else {beepDown()}
        console.log(event);
        setLiquidationEvents((events: LiquidationEventMap) => {
            events[event.symbol].push(event);
            return events;
        })
    }

    useEffect(() => {
        if(symbols) {
            const eventsMap = {} as LiquidationEventMap;
            symbols.forEach(({symbol}) => {
                eventsMap[symbol] = [];
            })

            setLiquidationEvents(eventsMap);
        }
    }, [symbols])

    useEffect(() => {
        if(lastLiquidation) {
            insertLiquidationEvent(lastLiquidation);
        }
    }, [lastLiquidation])

    const beepUp = _.debounce(() => {
        synth.triggerAttackRelease("C5", 0.05);
    }, 0.05);
    const beepDown = _.debounce(() => {
        synth.triggerAttackRelease("C4", 0.05);
    }, 0.05);
    const eventsForSymbol = (symbol: string) => (liquidationEvents[symbol] && liquidationEvents[symbol].length > 0) ? liquidationEvents[symbol].length : 0;
   return (
       <Table striped bordered hover size="sm" variant={"dark"}>
           <thead>
           <tr>
               <th>Symbol</th>
               <th>Status</th>
               <th>Liquidations</th>
           </tr>
           </thead>
           <tbody>
           {

               symbols
                   .sort((first: SymbolInformation, second: SymbolInformation) => {
                       return eventsForSymbol(second.symbol) - eventsForSymbol(first.symbol);
                   })
                   .map(({symbol, status}, index) => {

                   const eventCount = (liquidationEvents[symbol] && liquidationEvents[symbol].length > 0) ? liquidationEvents[symbol].length : 0;

                   return (
                       <tr key={index}>
                           <td>{symbol}</td>
                           <td>{status}</td>
                           <td>{eventCount}</td>
                       </tr>
                   )
               })
           }
           </tbody>
       </Table>
   )
}

export default SymbolTable;