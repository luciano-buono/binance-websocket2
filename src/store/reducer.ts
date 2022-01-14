import {
  Pair,
  PairAction,
  PairState,
} from "../utils/type-d";
import { calculateDailyRevenue, futurePairs2 } from "../utils/utils";
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
      return {
        ...state,
        pairs: state.pairs.concat(action.pair),
      };
    case actionTypes.UPDATE_PAIR:
        const updatedPair: Pair[] = state.pairs.map((s) => {
          if(s.pair === action.pair.pair){
            if(action.pair.type === 'PERP'){
              return{
                ...s,
                markPricePerpetual: action.pair.markPricePerpetual,
                fundingRate: action.pair.fundingRate,
                fundingTime: action.pair.fundingTime,
              }
            }
            if(action.pair.date === s.date){
              return{
                ...s,
                markPriceDelivery: action.pair.markPriceDelivery,
                dailyRevenue: calculateDailyRevenue(
                  s.markPriceDelivery,
                  s.markPricePerpetual),
                yearlyRevenue:
                  (calculateDailyRevenue(
                    s.markPriceDelivery,
                    s.markPricePerpetual
                  ) *365) /s.daysLeft,
                intradiary:
                  calculateDailyRevenue(
                    s.markPriceDelivery,
                    s.markPricePerpetual
                  ) / (s.daysLeft * 3),
              }
            }
          }
          return(s)
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
