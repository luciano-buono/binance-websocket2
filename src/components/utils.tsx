import { FuturePair } from "./types";

export const objectToFuturePair = (websocketObj: any): FuturePair => {
  if (websocketObj === undefined || websocketObj === null) {
    return {
      stream: "To define",
      E: 0,
      pair: "To define",
      price: 0,
      price2: 0,
      r: "To define",
      T: "To define"
    };
  }
  return {
    stream: websocketObj.e,
    E: websocketObj.E,
    pair: websocketObj.s,
    price: websocketObj.p,
    price2: websocketObj.P,
    r: websocketObj.r,
    T: websocketObj.T
  };
};
