import { FuturePair } from "./types";

export const objectToFuturePair = (websocketObj: any): FuturePair => {
  if (websocketObj === undefined || websocketObj === null) {
    return {
      stream: "To define",
      eventTime: 0,
      pair: "To define",
      markPrice: 0,
      settlePrice: 0,
      fundingRate: "To define",
      fundingTime: "To define"
    };
  }
  return {
    stream: websocketObj.e,// Event type
    eventTime: websocketObj.E,// Event time
    pair: websocketObj.s,// Symbol
    markPrice: websocketObj.p,// Mark Price
    settlePrice: websocketObj.P,// Estimated Settle Price, only useful in the last hour before the settlement starts.
    fundingRate: websocketObj.r,// funding rate for perpetual symbol, "" will be shown for delivery symbol
    fundingTime: websocketObj.T// next funding time for perpetual symbol, 0 will be shown for delivery symbol
  };
};