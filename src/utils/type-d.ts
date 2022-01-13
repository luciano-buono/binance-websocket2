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
export type PairState = {
  pairs: DeliveryPerpetualPair[];
}

export type PairAction = {
  type: string;
  pair: DeliveryPerpetualPair;
}

export type DispatchType = (args: PairAction) => PairAction;