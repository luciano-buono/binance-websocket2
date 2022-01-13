export const deliveryDate: string[] = ["220325", "220624"];
export const WEBSOCKET_URL_SPOT = "wss://stream.binance.com:9443/stream";
export const WEBSOCKET_URL_COINM = "wss://dstream.binance.com/ws/ethusd_220325";

export const listPairs: string[] = [
  "bchusd_perp@markPrice",
  "adausd_perp@markPrice",
  "bnbusd_perp@markPrice",
  "ethusd_perp@markPrice",
  "ltcusd_perp@markPrice",
  "dotusd_perp@markPrice",
  "xrpusd_perp@markPrice",
  "btcusd_perp@markPrice",
  "linkusd_perp@markPrice",

  `ethusd_${deliveryDate[0]}@markPrice`,
  `btcusd_${deliveryDate[0]}@markPrice`,
  `adausd_${deliveryDate[0]}@markPrice`,
  `bnbusd_${deliveryDate[0]}@markPrice`,
  `ltcusd_${deliveryDate[0]}@markPrice`,
  `xrpusd_${deliveryDate[0]}@markPrice`,
  `linkusd_${deliveryDate[0]}@markPrice`,
  `bchusd_${deliveryDate[0]}@markPrice`,
  `dotusd_${deliveryDate[0]}@markPrice`,
  
  `ethusd_${deliveryDate[1]}@markPrice`,
  `btcusd_${deliveryDate[1]}@markPrice`,
  `adausd_${deliveryDate[1]}@markPrice`,
  `bnbusd_${deliveryDate[1]}@markPrice`,
  `ltcusd_${deliveryDate[1]}@markPrice`,
  `xrpusd_${deliveryDate[1]}@markPrice`,
  `linkusd_${deliveryDate[1]}@markPrice`,
  `bchusd_${deliveryDate[1]}@markPrice`,
  `dotusd_${deliveryDate[1]}@markPrice`,
  ];

export const listPairs4: string[] = [
    `ETHUSD_PERP_${deliveryDate[0]}`,
    `BTCUSD_PERP_${deliveryDate[0]}`,
    `ADAUSD_PERP_${deliveryDate[0]}`,
    `BNBUSD_PERP_${deliveryDate[0]}`,
    `LTCUSD_PERP_${deliveryDate[0]}`,
    `XRPUSD_PERP_${deliveryDate[0]}`,
    `LINKUSD_PERP_${deliveryDate[0]}`,
    `BCHUSD_PERP_${deliveryDate[0]}`,
    `DOTUSD_PERP_${deliveryDate[0]}`,
    `ETHUSD_PERP_${deliveryDate[1]}`,
    `BTCUSD_PERP_${deliveryDate[1]}`,
    `ADAUSD_PERP_${deliveryDate[1]}`,
    `BNBUSD_PERP_${deliveryDate[1]}`,
    `LTCUSD_PERP_${deliveryDate[1]}`,
    `XRPUSD_PERP_${deliveryDate[1]}`,
    `LINKUSD_PERP_${deliveryDate[1]}`,
    `BCHUSD_PERP_${deliveryDate[1]}`,
    `DOTUSD_PERP_${deliveryDate[1]}`,
  ];
