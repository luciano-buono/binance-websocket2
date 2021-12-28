import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef
} from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import {
  FuturePairFull,
  futurePairsFull
} from "./types";
import { TableFaker } from "./Table";
import { objectToFuturePair } from "./utils";
import { listPairs, WEBSOCKET_URL_COINM} from "../constants";

export default function App() {
  const socketUrl = WEBSOCKET_URL_COINM;
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    socketUrl
  );

  const [streamList, setStreamList] = useState<FuturePairFull[]>(
    futurePairsFull
  );

  useEffect(() => {
    const lastFuturePair = objectToFuturePair(lastJsonMessage);
    setStreamList(
      streamList.map((s) =>
        s.pair === lastFuturePair?.pair
          ? { pair: lastFuturePair?.pair, data: lastFuturePair }
          : s
      )
    );
  }, [lastJsonMessage]);

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
      <h1>Hello CodeSandbox</h1>
      <TableFaker data={streamList.map((s) => s.data)} />
      <br />
      <button
        style={{ color: "royalblue", backgroundColor: "cyan" }}
        onClick={handleClickMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Subscribe
      </button>
      <button
        style={{ color: "red", backgroundColor: "orange" }}
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
