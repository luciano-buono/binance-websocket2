import React, { useState, useEffect, useCallback, Dispatch } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import {Pair } from "../../utils/type-d";
import {
  calculateDailyRevenue,
  truncateDecimals,
  objectToFuturePair3,
  futurePairs2,
} from "../../utils/utils";
import { listPairs, WEBSOCKET_URL_COINM } from "../../constants";
import { TableBinance } from "../TableBinance/TableBinance";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addPair, editPair } from "../../store/actionCreators";


export default function App() {

  const dispatch: Dispatch<any> = useDispatch();
  const savePair = (pair: Pair) => dispatch(addPair(pair))
  const updatePair = (pair: Pair) => dispatch(editPair(pair))

  const socketUrl = WEBSOCKET_URL_COINM;
  const { sendJsonMessage, lastJsonMessage, readyState } =
    useWebSocket(socketUrl);

  const [streamList3, setStreamList3] =
    useState<Pair[]>(futurePairs2);

  useEffect(() => {
    const lastFuturePair3 = objectToFuturePair3(lastJsonMessage);
    updatePair(lastFuturePair3);

    // var now = moment(new Date()); //todays date
    // var end = moment(lastFuturePair3.date, "YYMMDD");
    // var duration = moment.duration(end.diff(now));
    // var days = duration.asDays();

    // setStreamList3(
    //   streamList3.map((s) => {
    //     if (s.pair === lastFuturePair3?.pair) {
    //       if (lastFuturePair3.type === "PERP") {
    //         return {
    //           ...s,
    //           markPricePerpetual: lastFuturePair3.markPricePerpetual,
    //           fundingRate: lastFuturePair3.fundingRate,
    //           fundingTime: lastFuturePair3.fundingTime,
    //         };
    //       } else {
    //         if (s.date === lastFuturePair3?.date) {
    //           return {
    //             ...s,
    //             markPriceDelivery: lastFuturePair3.markPriceDelivery,
    //             daysLeft: days,
    //             dailyRevenue: calculateDailyRevenue(
    //               s.markPriceDelivery,
    //               s.markPricePerpetual
    //             ),
    //             yearlyRevenue:
    //               (calculateDailyRevenue(
    //                 s.markPriceDelivery,
    //                 s.markPricePerpetual
    //               ) *
    //                 365) /
    //               days,
    //             intradiary:
    //               calculateDailyRevenue(
    //                 s.markPriceDelivery,
    //                 s.markPricePerpetual
    //               ) /
    //               (days * 3),
    //           };
    //         }
    //       }
    //     }
    //     return s;
    //   })
    // );
  }, [lastJsonMessage]);

  const handleClickMessage = useCallback(() => {
    sendJsonMessage({
      method: "SUBSCRIBE",
      params: listPairs,
      id: 1,
    });
  }, [sendJsonMessage]);
  const handleClickUnSendMessage = useCallback(() => {
    sendJsonMessage({
      method: "UNSUBSCRIBE",
      params: listPairs,
      id: 1,
    });
  }, [sendJsonMessage]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div className="App">
      {/* <TableBinance data={streamList3.map((s) => truncateDecimals(s))} /> */}
      <br />
      <button
        style={{ backgroundColor: "cyan" }}
        onClick={handleClickMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Subscribe
      </button>
      <button
        style={{ backgroundColor: "orange" }}
        onClick={handleClickUnSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Unsubscribe
      </button>
      <span>
        The websocket is currently <b>{connectionStatus}</b>{" "}
      </span>
    </div>
  );
}
