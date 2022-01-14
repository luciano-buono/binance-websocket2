export interface Pair{
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
};
export type PairState = {
  pairs: Pair[];
}

export type PairAction = {
  type: string;
  pair: Pair;
}

export type DispatchType = (args: PairAction) => PairAction;