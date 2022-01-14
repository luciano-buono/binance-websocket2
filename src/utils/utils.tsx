import moment from "moment";
import { listPairs4 } from "../constants";
import {Pair } from "./type-d";

export const futurePairs2: Pair[] = listPairs4.map((p, i) => {
  var now = moment(new Date()); //todays date
  var end = moment(p.split("_")[2], "YYMMDD");
  var duration = moment.duration(end.diff(now));
  var days = duration.asDays();
  return {
    id: i,
    pair: p.split("_")[0],
    type: p.split("_")[1], //get perp or deliv
    date: p.split("_")[2], //get the delivery
    markPriceDelivery: 0,
    markPricePerpetual: 0,
    fundingRate: 0,
    fundingTime: 0,
    daysLeft: days,
    dailyRevenue: 0,
    yearlyRevenue: 0,
    intradiary: 0,
  };
});

export const objectToFuturePair3 = (
  websocketObj: any
): Pair => {
  if (websocketObj === undefined || websocketObj === null) {
    return {
      pair: "To define",
      type: "",
      date: "",
      markPriceDelivery: 0,
      markPricePerpetual: 0,
      fundingRate: 0,
      fundingTime: 0,
      daysLeft: 0,
      dailyRevenue: 0,
      yearlyRevenue: 0,
      intradiary: 0,
    };
  }
  let type: string;
  let date: string;
  let markPricePerpetual: number;
  let markPriceDelivery: number;
  const websocketType: string = websocketObj.s?.split("_")[1];
  if (websocketType === "PERP") {
    type = websocketType;
    date = "";
    markPricePerpetual = websocketObj.p;
    markPriceDelivery = 0;
  } else {
    type = "delivery";
    date = websocketType;
    markPriceDelivery = websocketObj.p;
    markPricePerpetual = 0;
  }
  return {
    pair: websocketObj.s?.split("_")[0], // Symbol
    type: type, //PERP or devileryDate
    date: date,
    markPriceDelivery: markPriceDelivery,
    markPricePerpetual: markPricePerpetual,
    fundingRate: websocketObj.r, // funding rate for perpetual symbol, "" will be shown for delivery symbol
    fundingTime: websocketObj.T, // next funding time for perpetual symbol, 0 will be shown for delivery symbol
    daysLeft: 0,
    dailyRevenue: 0,
    yearlyRevenue: 0,
    intradiary: 0,
  };
};

export const calculateDailyRevenue = (
  markPriceDelivery: number,
  markPricePerpetual: number
): number => {
  return markPriceDelivery / markPricePerpetual - 1;
};

export const truncateDecimals = (
  futurePairs2: Pair
): Pair => {
  return {
    ...futurePairs2,
    fundingTime: futurePairs2.fundingTime,
    markPricePerpetual: Math.floor(futurePairs2.markPricePerpetual * 100) / 100,
    markPriceDelivery: Math.floor(futurePairs2.markPriceDelivery * 100) / 100,
    daysLeft: Math.floor(futurePairs2.daysLeft),

    // dailyRevenue: `${(futurePairs2.dailyRevenue*100).toFixed(2)}%`,  //Percentage
    // yearlyRevenue: `${(futurePairs2.yearlyRevenue *100).toFixed(2)}%`,//Percentage
    // intradiary: `${(futurePairs2.intradiary *100).toFixed(5)}%`,//Percentage
    // fundingRate: `${(futurePairs2.fundingRate *100).toFixed(5)}%`,

    dailyRevenue: Math.floor(futurePairs2.dailyRevenue * 100 * 1000) / 1000, //Percentage
    yearlyRevenue: Math.floor(futurePairs2.yearlyRevenue * 100 * 1000) / 1000, //Percentage
    intradiary: Math.floor(futurePairs2.intradiary * 100 * 100000) / 100000, //Percentage
    fundingRate: Math.floor(futurePairs2.fundingRate * 100 * 100000) / 100000,
  };
};
