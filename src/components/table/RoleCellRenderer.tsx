import React from "react";
import { ICellRendererParams } from "ag-grid-community";
import "./CustomCellRenderer.css";

const role_color_map: { [role: string]: string } = {
  admin: "#56887d",
  customer: "#b4eeb4",
  agent: "#c8c7c1",
  maker: "#f2e3de",
  l1_approver: "#818f9a",
  l2_approver: "#6FA8DC",
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
