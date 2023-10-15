import React from "react";
import { ICellRendererParams } from "ag-grid-community";
import "./CustomCellRenderer.css";

export default (props: ICellRendererParams) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  return (
    <div className="status-field">
      <span style={{ color: "orange" }}>{cellValue}</span>&nbsp;
    </div>
  );
};
