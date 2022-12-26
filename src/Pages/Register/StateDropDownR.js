import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";
import Form from "react-bootstrap/Form";
import "primeflex/primeflex.scss";
import { useLocation } from "react-router-dom";
import { Toast } from "primereact/toast";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import SelectLocationAcc from "../../Components/Accordion/SelectLocationAccordion";
import { Button } from "primereact/button";
import Show400Errors, { Show500Errors, ShowNetorkErrors } from "../../Components/ShowErrors/ShowErrors";
// import './DropdownDemo.css';

const StateDropDownR = () => {
  const toastBC = useRef(null);

  const [selectedState, setSelectedCountry] = useState("");

  const dispatch = useDispatch();

  const [stateData, setstateData] = useState([]);

  const getStateURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/General/GetStates";

  const getState = () => {
    axios
      .get(getStateURL)
      .then((response) => {
        if (response.data.statusCode === 200) {
          setstateData(response.data.data);
        } else {
        }
      })
      .catch((exception) => {
        if (exception.response.status === 400) {
          Show400Errors(toastBC);
        } else if (exception.response.status === 500) {
          Show500Errors(toastBC);
        }
        else if (exception.code==="ERR_NETWORK") {
          ShowNetorkErrors(toastBC)
        }
      });
     
  };

  const onStateChange = (e) => {
    setSelectedCountry(e.target.value.name);
    dispatch(
      allActions.userActions.SelectState({
        stateID: e.target.value.id,
        statename: e.target.value.name,
      })
    );

   };
 
  useEffect(() => {
    getState();
  }, []);

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.name}</div>
        </div>
      );
    }

    return (
      <span>
        {selectedState === "" ? <>یک استان انتخاب کنید</> : <> {props.value}</>}
      </span>
    );
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="dropdown-demo">
      <Toast ref={toastBC} position="bottom-center" />
      <div className="card">
        <Dropdown
          value={selectedState}
          options={stateData}
          onChange={onStateChange}
          optionLabel="name"
          filter
          filterBy="name"
          placeholder="Select a Country"
          valueTemplate={selectedCountryTemplate}
          itemTemplate={countryOptionTemplate}
        />
      </div>
    </div>
  );
};

export default StateDropDownR;
