import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "primeflex/primeflex.scss";
import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import SelectLocationAcc from "../../Components/Accordion/SelectLocationAccordion";
import { Button } from "primereact/button";
import StatesDropDown from "../../Components/dropdown/StatesDropDown";
import CityDropDown from "../../Components/dropdown/CityDropDown";
function NewReqForm() {
  const selectedStateID = useSelector(
    (state) => state.SelectCSReducer.selectedState.id
  );
  const selectedCityID = useSelector(
    (state) => state.SelectCSReducer.selectedCity.id
  );
   
  
  const [newReqData, setnewReqData] = useState({
    // ctiveIndex: 0,
    selectedState: { id: "", name: "" },
    selectedCity: { id: "", name: "" },
    // len: null,
    // lon: null,
    // uploadedFile: null,
    // Address: "",
  });
  
  // const [modaltoggle, setmodaltoggle] = useState(false);
  const [uploadFile, setuploadFile] = useState();

  //TODO: after dispatch use a code immediately
  const dispatch = useDispatch();
  
  

  return (
    <Form style={{ margin: "40px" }}>
      <Form.Group>
        <StatesDropDown />
      </Form.Group>
      {selectedStateID===''?<></>:
      <Form.Group>
      <CityDropDown />
    </Form.Group>
      }
      
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <SelectLocationAcc />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>

        <Form.Control
          onChange={(e) => setuploadFile(e.target.files[0])}
          label="Upload The End-Game Photo"
          accept=".zip"
          type="file"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
{selectedStateID =='' || selectedCityID=='' ?  <Button
disabled
        variant="primary"
        type="button"
        onClick={() => {
          dispatch(allActions.NewReqActions.FirstForm(newReqData));
          // setmodaltoggle(true);
          // dispatch(allActions.ToggleActions.ModalToggle(true));
         
        }}
      >
        Submit
      </Button> : <Button
        variant="primary"
        type="button"
         onClick={() => {
          dispatch(allActions.NewReqActions.FirstForm(newReqData));
          // setmodaltoggle(true);
          // dispatch(allActions.ToggleActions.ModalToggle(true));
         
        }}
      >
        Submit
      </Button>}
     
    </Form>
  );
}

export default NewReqForm;
