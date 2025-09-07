import React from "react";
import "./Spinner.css";

export default function Spinner({ height, width }) {
  return (
    <div className="spinner_position">
      <div className="spinner" style={{ height: height, width: width }} />
    </div>
  );
}
