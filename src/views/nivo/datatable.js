import { CTable, CTableBody, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react";
import React from "react";
import propTypes from 'prop-types';

export function DataTable({ tabledata }) {

  const columns = Object.keys(tabledata[0]);

  const TableHeaderData = () => {
    return(columns.map((data) => {
      return (
        <CTableHeaderCell scope="col" key={data}>
          {data}
        </CTableHeaderCell>
      );
    }));
  };

  DataTable.propTypes = {
    tabledata: propTypes.arrayOf(propTypes.object).isRequired,
  };

  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          {TableHeaderData()}
        </CTableRow>
      </CTableHead>
      <CTableBody>
      </CTableBody>
    </CTable>
  );
}