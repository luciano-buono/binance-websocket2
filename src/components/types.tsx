import {listPairs3, listPairs4} from '../constants'

export type FuturePair = {
  stream: string;
  eventTime: number;
  pair: string;
  markPrice: number;
  settlePrice: number;
  fundingRate: number;
  fundingTime: number;
};

export const emptyFuturePair: FuturePair = {
  stream: "To define",
  eventTime: 0,
  pair: "To define",
  markPrice: 0,
  settlePrice: 0,
  fundingRate: 0,
  fundingTime: 0,
};

export type FuturePairFull = {
  pair: string;
  data: FuturePair;
};

export const emptyFuturePairFull: FuturePairFull = {
  pair: "To define",
  data: {
    stream: "To define",
    eventTime: 0,
    pair: "To define",
    markPrice: 0,
    settlePrice: 0,
    fundingRate: 0,
    fundingTime: 0,
  }
};

export const futurePairsFull: FuturePairFull[] = listPairs3.map((p) => {
  return {
    pair: p,
    data: {
      stream: "To define",
      eventTime: 0,
      pair: "To define",
      markPrice: 0,
      settlePrice: 0,
      fundingRate: 0,
      fundingTime: 0,
    }
  };
});




export type FuturePair2 = {
    stream: string;
    eventTime: number;
    pair: string;
    type: string;
    markPrice: number;
    settlePrice: number;
    fundingRate: number;
    fundingTime: number;
  };
// export type DeliveryPerpetualPair = {
//     pair: string;
//     type: string;
//     data: {
//         pair: string;
//         type: string;
//         markPriceDelivery: number;
//         markPricePerpetual: number;
//         fundingRate: number;
//         fundingTime: number;
//         daysLeft: number;
//         dailyRevenue: number;
//         yearlyRevenue: number;
//     }
// };

// export const deliveryPerpetualPairs: DeliveryPerpetualPair[] = listPairs4.map((p) => {
//     return {
//       pair: p,
//       type: '',
//       data: {
//         pair: p,
//         type: '',
//         markPriceDelivery: 0,
//         markPricePerpetual: 0,
//         fundingRate: 0,
//         fundingTime: 0,
//         daysLeft: 0,
//         dailyRevenue: 0,
//         yearlyRevenue: 0,
//       }
//     };
//   });
export type DeliveryPerpetualPair = {
        pair: string;
        type: string;
        markPriceDelivery: number;
        markPricePerpetual: number;
        fundingRate: number;
        fundingTime: number;
        daysLeft: number;
        dailyRevenue: number;
        yearlyRevenue: number;
}
export const futurePairs2: DeliveryPerpetualPair[] = listPairs4.map((p) => {
    return{
        pair: p.split('_')[0],
        type: '',
        markPriceDelivery: 0,
        markPricePerpetual: 0,
        fundingRate: 0,
        fundingTime: 0,
        daysLeft: 0,
        dailyRevenue: 0,
        yearlyRevenue: 0,
    };
});