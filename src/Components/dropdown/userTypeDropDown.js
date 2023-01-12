import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "./dropdowncss.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";

function DropdownComponent() {
  const dispatch = useDispatch();

  const [selectedRole, setselectedRole] = useState({
    name: "",
    code: "",
  });

  const UserKinds = [
    { name: "کاربر حقوقی", code: "2" },
    { name: "کاربر حقیقی", code: "1" },
  ];
  // const selectedUserType = useSelector(
  //   (state) => state.SignupReducer.userType
  // );
  // console.log(selectedUserType)

  const onRoleChange = (e) => {
    setselectedRole(e.value);
    dispatch(allActions.userActions.UserTypeChange(e.value));
  };

  return (
    <div className="dropdown-demo"  style={{fontFamily:'IRANSansWeb'}}>
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
export default DropdownComponent;
 
