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
// import './DropdownDemo.css';

const SubstantialTopics = () => {
  const toastBC = useRef(null);

  const [selectecSub, setselectecSub] = useState("");

  const dispatch = useDispatch();
//   const SubscribedUser = useSelector(
//     (state) => state.NewReqReducer.selectReason
//   );
//   const ass = useSelector(
//     (state) => state.NewReqReducer
//   );
//   console.log(ass)
  const [SubstantialTopicsData, setSubstantialTopicsData] = useState([]);
  
  const GetSubstantialTopicsURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/ExpertRequests/GetSubstantialTopicsServices";

  const getReasons = () => {
    axios
      .get(GetSubstantialTopicsURL)
      .then((response) => {
        if (response.data.statusCode == 200) {
            setSubstantialTopicsData(response.data.data);
        } else {
        }
      })
      .catch((exception) => {
        console.log(exception);
        
      });
  };

  const onStateChange = (e) => {
    setselectecSub(e.target.value.caption);
    // "id": 14,
    // "caption": " ارائه گزارش به دوائر حقوقی و قضایی"

     dispatch(
       allActions.userActions.SelectSubstantialTopics({
         id: e.target.value.id,
         caption: e.target.value.caption,
      })
     );

    
  };
  
  useEffect(() => {
    getReasons();
  }, []);

  const selectedCountryTemplate = (option, props) => {
    
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.value}</div>
        </div>
      );
    }

    return (
      <span>
        {selectecSub == "" ? <>یک زیر مجموعه را انتخاب کنید</> : <> {props.value}</>}
      </span>
    );
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <div>{option.caption}</div>
      </div>
    );
  };

  return (
    <div className="dropdown-demo">
     
      <div className="card">
        <Dropdown
          value={selectecSub}
          options={SubstantialTopicsData}
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

export default SubstantialTopics;
