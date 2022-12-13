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
 // import './DropdownDemo.css';

const StatesDropDown = () => {
 
    const [selectedState, setSelectedCountry] = useState('');
    
    const dispatch = useDispatch();
 
    
    const [stateData, setstateData] = useState([]);
    const getStateURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/General/GetStates";
 
    const getState = () => {
        axios
          .get(getStateURL)
          .then((response) => {
            if (response.data.statusCode == 200) {
              setstateData(response.data.data);
            } else {
            }
          })
          .catch((exception) => {
            console.log(exception);
          });
      };
      

    const onStateChange = (e) => {
        setSelectedCountry(e.target.value.name)
           dispatch(
            allActions.userActions.SelectState({
              id: e.target.value.id,
              name: e.target.value.name,
            })
          );
          
//TODO:هم زمان با دیسپچ باید درخواست هم بکنه.یه راه حل برای این پیدا کن
         
    }
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
                {selectedState=='' ? <>یک استان انتخاب کنید</>:<>   {props.value}</>}
              
            </span>
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

                <Dropdown value={selectedState} options={stateData} onChange={onStateChange} optionLabel="name" filter   filterBy="name" placeholder="Select a Country"
                    valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} />
 
            </div>
        </div>
    );
}

export default StatesDropDown;