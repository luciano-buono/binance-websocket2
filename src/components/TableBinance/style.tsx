export const cellStyleIntradiary = (cellData:any, rowData:any) => {
    return {
        fontFamily: "Mulish-Regular",
        color: rowData["intradiary"] > rowData["fundingRate"] ? 'MediumSeaGreen' : 'LightCoral',
    }
}

export const styleBinanceTable = {
    padding: '8px',
    backgroundColor: '#272424',
    color: 'white'
  }