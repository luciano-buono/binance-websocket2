import { forwardRef } from "react";
import MaterialTable, { Column, Icons } from "@material-table/core";
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { Pair } from "../../utils/type-d";
import { cellStyleIntradiary } from "./style";

const tableIcons: Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

type Props = {
  data: Pair[];
};

const columns: Array<Column<Pair>> = [
  { title: "pair", field: "pair", align: "center" },
  { title: "date", field: "date", align: "center" },
  { title: "dailyRevenue_%", field: "dailyRevenue", align: "center" },
  { title: "yearlyRevenue_%", field: "yearlyRevenue", align: "center" },
  {
    title: "intradiary_%",
    field: "intradiary",
    align: "center",
    cellStyle: cellStyleIntradiary,
  },
  { title: "fundingRate_%", field: "fundingRate", align: "center" },
  {
    title: "markPriceDelivery",
    field: "markPriceDelivery",
    type: "numeric",
    align: "center",
  },
  { title: "markPricePerpetual", field: "markPricePerpetual", align: "center" },
  { title: "daysLeft", field: "daysLeft", align: "center" },
  // { title: "fundingTime", field: "fundingTime",align:"center" },
];
const style = {
  padding: "8px",
  backgroundColor: "black",
  color: "white",
};
const options = {
  paging: true,
  pageSize: 20,
  emptyRowsWhenPaging: false,
  pageSizeOptions: [10, 20, 50],
  exportButton: true,
};

export const TableBinance = ({ data }: Props) => {
  return (
    <Container maxWidth={false}>
      <MaterialTable
        title="Binance COIN-M Websocket"
        columns={columns}
        data={data}
        icons={tableIcons}
        options={options}
        style={style}
      />
    </Container>
  );
};
