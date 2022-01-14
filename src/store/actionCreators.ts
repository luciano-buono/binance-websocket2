import { Pair, DispatchType, PairAction } from '../utils/type-d';
import * as actionTypes from './actionTypes'

export const addPair = (pair: Pair) => {
  const action: PairAction = {
    type: actionTypes.ADD_PAIR,
    pair,
  }
  return (dispatch: DispatchType) =>(dispatch(action));
}
export const editPair = (pair: Pair) => {
  const action: PairAction = {
    type: actionTypes.UPDATE_PAIR,
    pair,
  }
  return (dispatch: DispatchType) =>(dispatch(action));
}
