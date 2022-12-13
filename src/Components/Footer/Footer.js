import React from "react";
import "primeflex/primeflex.scss";
import "./footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div class="grid bottom-0">
      <div class="col-12 md:col-6 lg:col-3 w-screen   p-6 footer">
        {" "}
        <footer
          className=" flex flex-wrap align-items-center justify-content-center"
        >{`Copyright © Upbeat Code ${year}`}</footer>{" "}
      </div>
    </div>
  );
}

export default Footer;
