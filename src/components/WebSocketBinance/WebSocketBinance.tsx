import {useEffect, useCallback, Dispatch } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Pair } from "../../utils/type-d";
import {objectToFuturePair3,} from "../../utils/utils";
import { listPairs, WEBSOCKET_URL_COINM } from "../../constants";
import { useDispatch } from "react-redux";
import { addPair, editPair } from "../../store/actionCreators";

export default function App() {
  const dispatch: Dispatch<any> = useDispatch();
  const savePair = (pair: Pair) => dispatch(addPair(pair));
  const updatePair = (pair: Pair) => dispatch(editPair(pair));

  const socketUrl = WEBSOCKET_URL_COINM;
  const { sendJsonMessage, lastJsonMessage, readyState } =
    useWebSocket(socketUrl);

  useEffect(() => {
    const lastFuturePair3 = objectToFuturePair3(lastJsonMessage);
    updatePair(lastFuturePair3);
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
