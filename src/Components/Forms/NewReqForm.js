import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Form from "react-bootstrap/Form";
import BachlorsTable from "../../Components/Tables/BachlorsListTable";
import { Button, Dropdown } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import Modal from "../Modals/Modal";
import { ModalContext } from "../Modals/context";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import UserLocationPicker from "../Map/LocationPicker";
import ExpertModal from "../Modals/Modal";

function NewReqForm() {
  const maptoggleBoolean = useSelector(
    (state) => state.ToggleReducer.MapToggle
  );
  const ModalToggleBoolean = useSelector(
    (state) => state.ToggleReducer.ModalToggle
  );
  const selectedStateID = useSelector(
    (state) => state.SelectCSReducer.selectedState.id
  );
  const [maptoggle, setmapToggle] = useState(false);
  const [modaltoggle, setmodaltoggle] = useState(false);
  const [uploadFile, setuploadFile] = useState();
  const [selectedState, setSelectedState] = useState({ id: "", name: "" });
 

  const [selectedCity, setSelectedCity] = useState({ id: "", name: "" });
  const [stateData, setstateData] = useState([]);
  const [cityData, setCityData] = useState([]);
console.log(cityData)
  const dispatch = useDispatch();
 
  const getStateURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/General/GetStates";

  const getCityURL =
    "https://elated-swanson-mrhungrj5.iran.liara.run/api/General/GetCities";

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
  const getcity = () => {
   if (selectedStateID==selectedState.id){
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
    });
   }else{
    console.log("GG")
   }
    
   
  };
  
  console.log(cityData)
  const checkcity=()=>{

  }
  useEffect(() => {
    getState();
  }, []);

  return (
    <Form style={{ margin: "40px" }}>
      <Form.Group>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Label>State: </Form.Label>
            {stateData == undefined ? (
              <div></div>
            ) : (
              <select
                placeholder="State"
                value={selectedState.name}
                onChange={(e) => {
                 
                  dispatch(
                    allActions.userActions.SelectState({
                      id: e.target.options.selectedIndex + 1,
                      name: e.target.value,
                    })
                  );
                  setSelectedState({
                    id: e.target.options.selectedIndex + 1,
                    name: e.target.value,
                  });
                  
                   getcity(selectedStateID);

                }}
              >
                {stateData.map((e) => {
                  return (
                    <option value={e.center} key={e.id}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
              



            )}

{/* 
{selectedStateID == '' ? (
              <div></div>
            ) : (
              <select
                placeholder="State"
                value={selectedCity.name}
                onChange={(e) => {
                  setSelectedCity({
                    id: e.target.options.selectedIndex + 1,
                    name: e.target.value,
                  });
                  // dispatch(
                  //   allActions.userActions.SelectState({
                  //     id: e.target.options.selectedIndex + 1,
                  //     name: e.target.value,
                  //   })
                  // );

                  //  getcity(selectedStateID);
                }}
              >
                {cityData.map((e) => {
                  return (
                    <option value={e.center} key={e.id}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
              



            )}
  */}
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Location</Form.Label>
        <button
          type="button"
          onClick={() => {
            setmapToggle(!maptoggle);
            dispatch(allActions.ToggleActions.MapToggle(maptoggle));
          }}
          class="btn btn-primary mb-5"
        >
          مشخص کردن از روی نقشه
        </button>
        {maptoggleBoolean && (
          <ul class="list-group">
            <li class="list-group-item">
              <UserLocationPicker />
            </li>
          </ul>
        )}
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

      {/* <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row> */}
      {/* <ModalContext.Provider value={{ showModal, toggleModal }}>
      <div>
        
        <button onClick={toggleModal}>Show Modal</button>
        <Modal   updateModalState={toggleModal} />
      </div>
    </ModalContext.Provider> */}

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      {ModalToggleBoolean == true && <ExpertModal />}
      <ExpertModal />
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          setmodaltoggle(true);
          dispatch(allActions.ToggleActions.ModalToggle(true));
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

export default NewReqForm;
