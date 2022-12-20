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

const ExpertSubjectServicesDropDown = () => {
  const toastBC = useRef(null);

  const [selectedExpertSub, setselectedExpertSub] = useState("");

  const dispatch = useDispatch();
//   const SubscribedUser = useSelector(
//     (state) => state.NewReqReducer.selectReason
//   );
//   const ass = useSelector(
//     (state) => state.NewReqReducer
//   );
//   console.log(ass)
  const [ExpertSubjectsOtions, setExpertSubjectsOtions] = useState([]);
  
  const getselectedExpertSubURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/ExpertRequests/GetExpertSubjectServices ";

  const getReasons = () => {
    axios
      .get(getselectedExpertSubURL)
      .then((response) => {
        if (response.data.statusCode == 200) {
          setExpertSubjectsOtions(response.data.data);
        } else {
        }
      })
      .catch((exception) => {
        console.log(exception);
        
      });
  };

  const onStateChange = (e) => {
    setselectedExpertSub(e.target.value.caption);
    // "id": 14,
    // "caption": " ارائه گزارش به دوائر حقوقی و قضایی"

     dispatch(
       allActions.userActions.setselectedExpertSub({
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
        {ExpertSubjectsOtions == "" ? <>یک زیر مجموعه را انتخاب کنید</> : <> {props.value}</>}
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
          value={selectedExpertSub}
          options={ExpertSubjectsOtions}
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

export default ExpertSubjectServicesDropDown;
