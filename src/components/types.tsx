import {listPairs3} from '../constants'

export type FuturePair = {
  stream: string;
  eventTime: number;
  pair: string;
  markPrice: number;
  settlePrice: number;
  fundingRate: string;
  fundingTime: string;
};

export const emptyFuturePair: FuturePair = {
  stream: "To define",
  eventTime: 0,
  pair: "To define",
  markPrice: 0,
  settlePrice: 0,
  fundingRate: "To define",
  fundingTime: "To define"
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
    fundingRate: "To define",
    fundingTime: "To define"
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
      fundingRate: "To define",
      fundingTime: "To define"
    }
  };
});
