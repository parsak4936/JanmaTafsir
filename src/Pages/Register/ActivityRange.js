import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
 import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";

function ActivityRange() {
  const dispatch = useDispatch();

  const [selectedRole, setselectedRole] = useState({
    name: "",
    code: "",
  });

  const UserKinds = [
    { name: "کشوری", code: 0 },
    { name: "استانی ", code: 1 },
    { name: "شهری ", code: 2 },
  ];

  const onRoleChange = (e) => {
    setselectedRole(e.value);
    dispatch(allActions.userActions.SelectActivityRange(e.value));
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
}
export default ActivityRange;
 
