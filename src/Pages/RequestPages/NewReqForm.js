import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "primeflex/primeflex.scss";
import L, { Icon, latLng } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import SelectLocationAcc from "../../Components/Accordion/SelectLocationAccordion";
import { Button } from "primereact/button";
import StatesDropDown from "../../Components/dropdown/StatesDropDown";
import CityDropDown from "../../Components/dropdown/CityDropDown";
import { Toast } from "primereact/toast";
import { ShowEmptyState } from "../../Components/ShowErrors/ShowErrors";
 function NewReqForm() {
  const toastTL = useRef(null);

  const selectedStateID = useSelector((state) => state.NewReqReducer.stateID);
  const selectedCityID = useSelector((state) => state.NewReqReducer.cityID);
  const iconPerson = new L.Icon({
    iconUrl: require("../../Assets/PersonLocationIcon.png"),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
  });
  function LocationMarker() {
    const [userposition, setuserPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setuserPosition(e.latlng);
        //setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
      });
    }, [map]);

    return userposition === null ? null : (
      <Marker position={userposition} icon={iconPerson}>
        <Popup>
          موقعیت شما <br />
          در حال حاضر شما اینجا میباشد. <br />
        </Popup>
      </Marker>
    );
  }
  const [newReqData, setnewReqData] = useState({
    
    selectedState: { id: "", name: "" },
    selectedCity: { id: "", name: "" },
     len: "",
     lon: "",
     uploadedFile: null,
     Address: "",
  });
  console.log(newReqData.Address)
  const [uploadFile, setuploadFile] = useState();
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setnewReqData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <Form style={{ margin: "40px" }}>
      <Toast ref={toastTL} position="bottom-center" />
      <div className="grid"  style={{fontFamily:'IRANSansWeb'}}>
        <div className="col-6">
          <Form.Group>
            <Form.Label>
              {" "}
              استانی که زمین در آن قرار دارد:
              <span style={{ color: "red" }}>(اجباری)</span>
            </Form.Label>
            <StatesDropDown />
          </Form.Group>
        </div>
        <div className="col-6">
          {selectedStateID === "" ? (
            <></>
          ) : (
            <Form.Group>
              <Form.Label>
                {" "}
                شهری که زمین در آن قرار دارد:
                <span style={{ color: "red" }}>(اجباری)</span>
              </Form.Label>
              <CityDropDown />
            </Form.Group>
          )}
        </div>
      </div>

      <div className=" grid  ">
        <div className=" col-12">
          <Form.Group className="  " controlId="formGridAddress1">
            <Form.Label>
              {" "}
              مختصات زمین را روی نقشه مشخص نمایید.
              <span>(اختیاری)</span>
            </Form.Label>
            <SelectLocationAcc />
          </Form.Group>
        </div>
      </div>

     

      <div className=" grid  ">
        <div className=" col-8">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              {" "}
              آدرس محل زمین <span>(اختیاری)</span>
            </Form.Label>
            <Form.Control name="Address"  onChange={handlechange} as="textarea" rows={3} />
          </Form.Group>
        </div>
      </div>
      <div className="grid">
        <div className="col-12">
          {selectedStateID === "" || selectedCityID == "" ? (
            <Button
              variant="primary"
              className="p-button-danger"
              type="button"
              onClick={()=>{ShowEmptyState(toastTL)}}
            >
              تایید
            </Button>
          ) : (
            <Button
              variant="primary"
              type="button"
              onClick={() => {
                dispatch(allActions.NewReqActions.FirstFormSubmit(newReqData));
                 
              }}
            >
              تایید
            </Button>

        )} 
        </div>
      </div>
    </Form>
  );
}

export default NewReqForm;
