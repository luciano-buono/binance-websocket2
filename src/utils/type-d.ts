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
export type DeliveryPerpetualPair = {
  pair: string;
  type: string;
  date: string;
  markPriceDelivery: number;
  markPricePerpetual: number;
  fundingRate: number;
  fundingTime: number;
  daysLeft: number;
  dailyRevenue: number;
  yearlyRevenue: number;
  intradiary: number;
}
export type DeliveryPerpetualPairTableData = {
  pair: string;
  type: string;
  date: string;
  markPriceDelivery: number;
  markPricePerpetual: number;
  fundingTime: number;
  daysLeft: number;

  fundingRate: string;
  dailyRevenue: string;
  yearlyRevenue: string;
  intradiary: string;
}
