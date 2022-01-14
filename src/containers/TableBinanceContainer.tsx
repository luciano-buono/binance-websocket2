import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { TableBinance } from "../components/TableBinance/TableBinance";
import {Pair, PairState } from "../utils/type-d";
import { truncateDecimals } from "../utils/utils";


export const TableBinanceContainer= () => {

  const pairs: readonly Pair[] = useSelector(
    (state: PairState) => state.pairs,
    shallowEqual
  )
  return(
    <TableBinance data={pairs.map((s: Pair) => truncateDecimals(s))} />
  )
}