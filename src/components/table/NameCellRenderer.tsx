import React from "react";
import { ICellRendererParams } from "ag-grid-community";
import "./CustomCellRenderer.css";

export default (props: ICellRendererParams) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;
  const [name, email] = cellValue.split("~~");

  return (
    <div className="name-field">
      <div>
        <span style={{ color: "rgb(0,48,51)", letterSpacing: "0.5px" }}>
          {name}
        </span>
        &nbsp;
      </div>
      <div className="email">
        <span style={{ color: "#818f9a" }}>{email}</span>&nbsp;
      </div>
    </div>
  );
};
