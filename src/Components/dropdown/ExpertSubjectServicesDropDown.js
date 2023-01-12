import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";

import "primeflex/primeflex.scss";


import axios from "axios";
import { useDispatch } from "react-redux";
import allActions from "../../app/Actions/AllActions";

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
        if (response.data.statusCode === 200) {
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
       allActions.userActions.selectedExpertSub({
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
        <div className="country-item country-item-value"  style={{fontFamily:'IRANSansWeb' ,direction:'rtl'}}>
          <div>{option.value}</div>
        </div>
      );
    }

    return (
      <span  style={{fontFamily:'IRANSansWeb' ,direction:'rtl'}}>
        {selectedExpertSub === "" ? <>در چه زمینه ایی کارشناسی میخواهید</> : <> {props.value}</>}
      </span>
    );
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item"  style={{fontFamily:'IRANSansWeb' ,direction:'rtl'}}>
        <div>{option.caption}</div>
      </div>
    );
  };

  return (
    <div className="dropdown-demo"  style={{fontFamily:'IRANSansWeb' ,direction:'rtl'}}>
     
      <div className="card" >
        <Dropdown
          value={selectedExpertSub}
          options={ExpertSubjectsOtions}
          onChange={onStateChange}
          optionLabel="name"
          filter
          filterBy="name"
          placeholder=" چه نوع کارشناسی درخواست دارید"
          valueTemplate={selectedCountryTemplate}
          itemTemplate={countryOptionTemplate}
        />
      </div>
    </div>
  );
};

export default ExpertSubjectServicesDropDown;
