import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";

import "primeflex/primeflex.scss";
import { Toast } from "primereact/toast";

import axios from "axios";
import { useDispatch } from "react-redux";
import allActions from "../../app/Actions/AllActions";

const StatesDropDown = () => {
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
        //TODO: if error is 500 show errors
        console.log(exception);
        showError();
      });
  };

  const onStateChange = (e) => {
    setSelectedCountry(e.target.value.name);
    dispatch(
      allActions.NewReqActions.FirstFormstate({
        id: e.target.value.id,
        name: e.target.value.name,
      })
    );

   };
  const showError = () => {
    toastBC.current.show({
      severity: "error",
      summary: " خطایی پیش آمده",
      detail:"از وصل بودن شبکه خود مطمئن شوید و صفحه را رفرش کنید",
       life: 3000,
    });
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
      <div className="country-item"  style={{fontFamily:'IRANSansWeb'}}>
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <div className="dropdown-demo"  style={{fontFamily:'IRANSansWeb'}}>
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

export default StatesDropDown;
