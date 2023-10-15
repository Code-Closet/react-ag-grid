import React from "react";
import { ICellRendererParams } from "ag-grid-community";
import "./CustomCellRenderer.css";

const role_color_map: { [role: string]: string } = {
  admin: "rgb(0,48,51)",
  customer: "rgb(29,146,83)",
  agent: "rgb(251,201,80)",
  maker: "rgb(211,114,186)",
  l1_approver: "rgb(54,47,217)",
  l2_approver: "rgb(158,221,255)",
};

export default (props: ICellRendererParams) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  return (
    <div
      className="role-field"
      style={{
        backgroundColor: `${
          role_color_map[cellValue.toString().toLowerCase()]
        }`,
      }}
    >
      <div style={{ color: "#fff", marginInline: "auto" }}>{cellValue}</div>
    </div>
  );
};
