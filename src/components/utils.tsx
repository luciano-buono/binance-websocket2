import { DeliveryPerpetualPair, DeliveryPerpetualPairTableData, FuturePair, FuturePair2 } from "./types";

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

export const truncateDecimals = (futurePairs2: DeliveryPerpetualPair): DeliveryPerpetualPairTableData => {
  return(
    {
      // ...futurePairs2,
      pair: futurePairs2.pair,
      type: futurePairs2.type,
      date: futurePairs2.date,
      fundingTime: futurePairs2.fundingTime,
      markPricePerpetual: Math.floor(futurePairs2.markPricePerpetual *100)/100,
      markPriceDelivery: Math.floor(futurePairs2.markPriceDelivery *100)/100,
      daysLeft: Math.floor(futurePairs2.daysLeft),

      dailyRevenue: `${(futurePairs2.dailyRevenue*100).toFixed(2)}%`,  //Percentage 
      yearlyRevenue: `${(futurePairs2.yearlyRevenue *100).toFixed(2)}%`,//Percentage 
      intradiary: `${(futurePairs2.intradiary *100).toFixed(2)}%`,//Percentage
      fundingRate: `${(futurePairs2.fundingRate *100).toFixed(5)}%`,
      
      // dailyRevenue: Math.floor((futurePairs2.dailyRevenue *100)*1000)/1000,  //Percentage 
      // yearlyRevenue: Math.floor((futurePairs2.yearlyRevenue *100)*1000)/1000,//Percentage 
      // intradiary: Math.floor((futurePairs2.intradiary *100)*100000)/100000,//Percentage
      // fundingRate: Math.floor((futurePairs2.fundingRate *100)*100000)/100000,
    }
  )
}