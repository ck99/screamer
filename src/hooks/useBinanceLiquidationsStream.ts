import {useEffect, useState} from "react";
import useWebSocket, {ReadyState} from 'react-use-websocket';

export type LiquidationEvent = {
    symbol: string;
    side: string;
    orderType: string;
    timeInForce: string;
    originalQuantity: string;
    price: string;
    averagePrice: string;
    orderStatus: string;
    lastFilledQuantity: string;
    accumulatedFillQuantity: string;
    time: number;
}

const useBinanceLiquidationsStream = (): [readyState: ReadyState, lastLiquidation: LiquidationEvent|undefined] => {
    const socketUrl = 'wss://fstream.binance.com/ws/!forceOrder@arr';
    const {
        lastJsonMessage,
        readyState,
        getWebSocket
    } = useWebSocket(socketUrl, {
        onOpen: () => console.log('opened'),
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
    });
    const [lastLiquidation, setLastLiquidation] = useState<LiquidationEvent>();

    useEffect(() => {
        if(lastJsonMessage) {
            const {
                s: symbol,
                S: side,
                o: orderType,
                f: timeInForce,
                q: originalQuantity,
                p: price,
                ap: averagePrice,
                X: orderStatus,
                l: lastFilledQuantity,
                z: accumulatedFillQuantity,
                T: time,
            } = lastJsonMessage.o;


            setLastLiquidation({
                symbol, side, orderStatus, orderType, time, timeInForce, originalQuantity,
                price, accumulatedFillQuantity,averagePrice, lastFilledQuantity
            })
        }
    }, [lastJsonMessage])
    return [readyState, lastLiquidation];
};

export default useBinanceLiquidationsStream;
