export const cellStyleIntradiary = (cellData:any, rowData:any) => {
    return {
        fontFamily: "Mulish-Regular",
        color: rowData["intradiary"] > rowData["fundingRate"] ? '#c9ffd8' : '#ffc1b3',
    }
}