import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "./dropdowncss.css";
import { useDispatch } from "react-redux";
import allActions from "../../app/Actions/AllActions";

function DropdownComponent() {
  const dispatch = useDispatch();

  const [selectedRole, setselectedRole] = useState({
    name: "کاربر حقیقی",
    code: "1",
  });

  const UserKinds = [
    { name: "کاربر حقوقی", code: "0" },
    { name: "کاربر حقیقی", code: "1" },
  ];

  // useEffect(() => {
  //   setLazyItems(Array.from({ length: 100000 }));
  //   setLazyLoading(false);
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onRoleChange = (e) => {
    setselectedRole(e.value);
    dispatch(allActions.userActions.UserTypeChange(e.value));
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
export default DropdownComponent;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<dropdownComponent />, rootElement);
