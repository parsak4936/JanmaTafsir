import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
 import ReactDOM from "react-dom";

import React, { useState, useEffect, useRef,useCallback } from "react";
import { Dropdown } from "primereact/dropdown";
 import "./dropdowncss.css";
 
 
      


function DropdownComponent  ({parentCallback}) {
  const [selectedRole, setselectedRole] = useState(null);
   


  const UserKinds = [
    { name: "کاربر حقوقی", code: "LU" },
    { name: "کاربر حقیقی", code: "RU" },
   
  ];

  parentCallback(selectedRole)
 
  // useEffect(() => {
  //   setLazyItems(Array.from({ length: 100000 }));
  //   setLazyLoading(false);
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onRoleChange = (e) => {
    setselectedRole(e.value);
  
  };

  return (
    <div className="dropdown-demo">
      <div className="card">
        
        <Dropdown
          value={selectedRole}
          options={UserKinds}
          onChange={onRoleChange}
          optionLabel="name"
          placeholder="عنوان کاربری"
        />
      </div>
    </div>
  );
};
export default DropdownComponent;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<dropdownComponent />, rootElement);
