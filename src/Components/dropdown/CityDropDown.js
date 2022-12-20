import React, { useState, useEffect, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';
 import Form from "react-bootstrap/Form";
import "primeflex/primeflex.scss";
import { useLocation } from "react-router-dom";

 import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import SelectLocationAcc from "../../Components/Accordion/SelectLocationAccordion";
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
import Show400Errors, { Show500Errors, ShowNetorkErrors, ShowTokenErrors } from '../ShowErrors/ShowErrors';
 // import './DropdownDemo.css';

const CityDropDown = () => {
  const selectedStateID = useSelector(
    (state) => state.NewReqReducer.stateID
  );
    const [selectedCity, setSelectedCity] = useState('');
    const [cityData, setCityData] = useState([]);
    const toastBC = useRef(null);

    const dispatch = useDispatch();
    const getCityURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/General/GetCities";

    const showError = () => {
      toastBC.current.show({
        severity: "error",
        summary: " خطایی پیش آمده",
        detail:"از وصل بودن شبکه خود مطمئن شوید و صفحه را رفرش کنید",
         life: 3000,
      });
    };
      const getcity = () => {
        if (selectedStateID !=='') {
          axios
            .get(getCityURL, { params: { statId: selectedStateID } })
            .then((response) => {
              if (response.data.statusCode == 200) {
               
                setCityData(response.data.data);
              } else {
              }
            })
            .catch((exception) => {
              console.log(exception);
             
              if (exception.response.status == 400) {
                Show400Errors(toastBC);
              } else if (exception.response.status == 500) {
                Show500Errors(toastBC);
              }
              else if (exception.response.status == 401) {
                ShowTokenErrors(toastBC);
              }
              else if (exception.code=="ERR_NETWORK") {
                ShowNetorkErrors(toastBC)
              }
            });
            
        } else {
          console.log("GG");
        }
      };
      useEffect(() => {
         getcity();
      }, [selectedStateID]);
    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }
     
        return (
            <span>
  {selectedCity=='' ? <>یک شهر انتخاب کنید</>:<>   {props.value}</>}            </span>
        );
    }
    const oncityChange = (e) => {
        setSelectedCity(e.target.value.name)
        
          
        dispatch(
         allActions.NewReqActions.FirstFormcity({
           id: e.target.value.id,
           name: e.target.value.name,
         })
       );
        }
    const countryOptionTemplate = (option) => {
        return (
            <div className="country-item">
                 
                <div>{option.name}</div>
            </div>
        );
    }

    

    return (
        <div className="dropdown-demo">
            <div className="card">
            <Toast ref={toastBC} position="bottom-center" />
                <Dropdown value={selectedCity} options={cityData} onChange={oncityChange} optionLabel="name" filter  filterBy="name" placeholder="Select a Country"
                    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
 
            </div>
        </div>
    );
}

export default CityDropDown;