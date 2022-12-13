import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

const Spiner = () => {
  return (
    <ProgressSpinner
      style={{ width: "50px", height: "50px" }}
      strokeWidth="8"
      fill="var(--surface-ground)"
      animationDuration=".5s"
    />
  );
};
export default Spiner;
