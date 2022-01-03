import React, { forwardRef } from "react";
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
  ViewColumn
} from "@material-ui/icons";
import { Container } from "@material-ui/core";
import { DeliveryPerpetualPair, FuturePair, FuturePairFull } from "./types";

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
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

type Props = {
  data: DeliveryPerpetualPair[];
};

const columns: Array<Column<DeliveryPerpetualPair>> = [
  { title: "type", field: "type" },
  { title: "markPriceDelivery", field: "markPriceDelivery",type: "numeric" },
  { title: "pair", field: "pair" },
  { title: "markPricePerpetual", field: "markPricePerpetual" },
  { title: "daysLeft", field: "daysLeft" },
  { title: "fundingRate", field: "fundingRate" },
  { title: "fundingTime", field: "fundingTime" },
  { title: "dailyRevenue", field: "dailyRevenue" },
  { title: "yearlyRevenue", field: "yearlyRevenue" },
  { title: "intradiary", field: "intradiary" },
];

const options = {
  paging: true,
  pageSize: 10,
  emptyRowsWhenPaging: false,
  pageSizeOptions: [10, 20, 50]
};

export const TableFaker2 = ({ data }: Props) => {
  return (
    <Container>
      <MaterialTable
        columns={columns}
        data={data}
        icons={tableIcons}
        options={options}
      />
    </Container>
  );
};
