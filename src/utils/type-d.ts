export interface DeliveryPerpetualPair{
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
export interface Pair extends DeliveryPerpetualPair{
  id: number;
}
export type PairState = {
  pairs: Pair[];
}

export type PairAction = {
  type: string;
  pair: Pair;
}

export type DispatchType = (args: PairAction) => PairAction;