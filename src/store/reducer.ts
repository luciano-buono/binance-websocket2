import {
  DeliveryPerpetualPair,
  Pair,
  PairAction,
  PairState,
} from "../utils/type-d";
import { futurePairs2 } from "../utils/utils";
import * as actionTypes from "./actionTypes";

const initalState: PairState = {
  pairs: futurePairs2,
};
const reducer = (
  state: PairState = initalState,
  action: PairAction
): PairState => {
  switch (action.type) {
    case actionTypes.ADD_PAIR:
      const newPair: Pair = {
        id: action.pair.id,
        pair: action.pair.pair,
        type: action.pair.type,
        date: action.pair.date,
        markPriceDelivery: action.pair.markPriceDelivery,
        markPricePerpetual: action.pair.markPricePerpetual,
        fundingRate: action.pair.fundingRate,
        fundingTime: action.pair.fundingTime,
        daysLeft: action.pair.daysLeft,
        dailyRevenue: action.pair.dailyRevenue,
        yearlyRevenue: action.pair.yearlyRevenue,
        intradiary: action.pair.intradiary,
      };
      return {
        ...state,
        pairs: state.pairs.concat(newPair),
      };
    case actionTypes.UPDATE_PAIR:
        const updatedPair: Pair[] = state.pairs.map((s) => {
          if (s.id === action.pair.id){
            return{...action.pair}
          }
          return (s)
        })

        return {
          ...state,
          pairs: updatedPair,
        };
    default:
      return state;
  }
};
export default reducer;
