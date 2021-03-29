import {useState, useEffect} from "react";
import ExchangeInformation from "../binance/ExchangeInformation";

export type SymbolInformation = {
    status: string;
    symbol: string;
}

const useBinanceSymbols = () => {
    const [symbols, setSymbols] = useState<SymbolInformation[]>([]);

    useEffect(() => {
        ExchangeInformation().then(info => {
            setSymbols(info.symbols);
        })
    }, [])

    return symbols;
};

export default useBinanceSymbols;