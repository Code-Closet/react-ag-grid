import React from "react";
import { ICellRendererParams } from "ag-grid-community";
import "./CustomCellRenderer.css";

export default (props: ICellRendererParams) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  const handleModifyUser = () => {
    console.log(`Modify User : ${cellValue}`);
  };

  const handleRemoveUser = () => {
    console.log(`Remove User : ${cellValue}`);
  };

  return (
    <div className="action-field">
      <div className="action-button" onClick={handleModifyUser}>
        <img src="modify.svg" alt="modify" />
        <label htmlFor="modify" style={{ cursor: "pointer" }}>
          Modify User
        </label>
      </div>
      <div className="action-button" onClick={handleRemoveUser}>
        <img src="delete.svg" alt="delete" />
        <label htmlFor="modify" style={{ cursor: "pointer" }}>
          Remove User
        </label>
      </div>
    </div>
  );
};
