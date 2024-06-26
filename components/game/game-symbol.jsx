import { SYMBOL_O, SYMBOL_X } from "./constant";

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-red-500";
    if (symbol === SYMBOL_X) return "text-green-500";
    return "";
  };
  return (
    <span className={`${"text-xl leading-6"} ${getSymbolClassName(symbol)}`}>
      {symbol}
    </span>
  );
}
