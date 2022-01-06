import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef
} from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import {
  DeliveryPerpetualPair,
  FuturePair2,
  FuturePairFull,
  futurePairs2,
  futurePairsFull
} from "./types";
import { TableFaker } from "./Table";
import { objectToFuturePair, objectToFuturePair2, calculateDailyRevenue, truncateDecimals } from "./utils";
import { listPairs, WEBSOCKET_URL_COINM} from "../constants";
import { TableFaker2 } from "./Table2";
import moment from "moment";

export default function App() {
  const socketUrl = WEBSOCKET_URL_COINM;
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    socketUrl
  );

  const [streamList, setStreamList] = useState<FuturePairFull[]>(
    futurePairsFull
  );
  const [streamList2, setStreamList2] = useState<DeliveryPerpetualPair[]>(
    futurePairs2
  );

  useEffect(() => {
    const lastFuturePair = objectToFuturePair(lastJsonMessage);
    const lastFuturePair2 = objectToFuturePair2(lastJsonMessage);
    var now = moment(new Date()); //todays date
    var end = moment(lastFuturePair2.type, "YYMMDD");
    var duration = moment.duration(end.diff(now));
    var days = duration.asDays();

    setStreamList(
      streamList.map((s) =>
        s.pair === lastFuturePair?.pair
          ? { pair: lastFuturePair?.pair, data: lastFuturePair }
          : s
      )
    );
    setStreamList2(
      streamList2.map((s) => {
        if (s.pair === lastFuturePair2?.pair){
          if (lastFuturePair2?.type === 'PERP') {
            return {...s,
              markPricePerpetual: Math.floor(lastFuturePair2.markPrice *100)/100, //Math.floor(a * 100) / 100
              fundingRate: lastFuturePair2.fundingRate,
              fundingTime: lastFuturePair2.fundingTime,
            }
          }
          if (s.date === lastFuturePair2?.type) {
            return {...s,
              markPriceDelivery: lastFuturePair2.markPrice,
              daysLeft: days,
              dailyRevenue: calculateDailyRevenue(s.markPriceDelivery,s.markPricePerpetual) ,
              yearlyRevenue: calculateDailyRevenue(s.markPriceDelivery,s.markPricePerpetual)*365/days ,
              intradiary: calculateDailyRevenue(s.markPriceDelivery,s.markPricePerpetual)/(days*3),
            }
          }
        }
        return s;
      })
    ); 
  },[lastJsonMessage]);
    

  const handleClickMessage = useCallback(() => {
    sendJsonMessage({
      method: "SUBSCRIBE",
      params: listPairs,
      id: 1
    });
  }, [sendJsonMessage]);
  const handleClickUnSendMessage = useCallback(() => {
    sendJsonMessage({
      method: "UNSUBSCRIBE",
      params: listPairs,
      id: 1
    });
  }, [sendJsonMessage]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated"
  }[readyState];

  return (
    <div className="App">
      <TableFaker2 data={streamList2.map((s) => truncateDecimals(s))} />
      <br />
      <button
        style={{backgroundColor: "cyan" }}
        onClick={handleClickMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Subscribe
      </button>
      <button
        style={{backgroundColor: "orange" }}
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
