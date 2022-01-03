import { FuturePair, FuturePair2 } from "./types";

export const objectToFuturePair = (websocketObj: any): FuturePair => {
  if (websocketObj === undefined || websocketObj === null) {
    return {
      stream: "To define",
      eventTime: 0,
      pair: "To define",
      markPrice: 0,
      settlePrice: 0,
      fundingRate: 0,
      fundingTime: 0,
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
export const objectToFuturePair2 = (websocketObj: any): FuturePair2 => {
  if (websocketObj === undefined || websocketObj === null) {
    return {
      stream: "To define",
      eventTime: 0,
      pair: "To define",
      type: '',
      markPrice: 0,
      settlePrice: 0,
      fundingRate: 0,
      fundingTime: 0,
    };
  }
  return {
    stream: websocketObj.e,// Event type
    eventTime: websocketObj.E,// Event time
    pair: websocketObj.s?.split('_')[0],// Symbol
    type: websocketObj.s?.split('_')[1], //PERP or devileryDate
    markPrice: websocketObj.p,// Mark Price
    settlePrice: websocketObj.P,// Estimated Settle Price, only useful in the last hour before the settlement starts.
    fundingRate: websocketObj.r,// funding rate for perpetual symbol, "" will be shown for delivery symbol
    fundingTime: websocketObj.T// next funding time for perpetual symbol, 0 will be shown for delivery symbol
  };
};

export const calculateDailyRevenue = (markPriceDelivery: number, markPricePerpetual: number): number => {
  return ((markPriceDelivery/markPricePerpetual)-1);
}