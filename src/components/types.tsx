import {listPairs3} from '../constants'

export type FuturePair = {
  stream: string;
  E: number;
  pair: string;
  price: number;
  price2: number;
  r: string;
  T: string;
};

export const emptyFuturePair: FuturePair = {
  stream: "To define",
  E: 0,
  pair: "To define",
  price: 0,
  price2: 0,
  r: "To define",
  T: "To define"
};

export type FuturePairFull = {
  pair: string;
  data: FuturePair;
};

export const emptyFuturePairFull: FuturePairFull = {
  pair: "To define",
  data: {
    stream: "To define",
    E: 0,
    pair: "To define",
    price: 0,
    price2: 0,
    r: "To define",
    T: "To define"
  }
};

export const futurePairsFull: FuturePairFull[] = listPairs3.map((p) => {
  return {
    pair: p,
    data: {
      stream: "To define",
      E: 0,
      pair: "To define",
      price: 0,
      price2: 0,
      r: "To define",
      T: "To define"
    }
  };
});
