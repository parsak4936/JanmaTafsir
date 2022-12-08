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

const getStateURL =
  "https://elated-swanson-mrhungrj5.iran.liara.run/api/General/GetStates";

const getCityURL =
  "https://elated-swanson-mrhungrj5.iran.liara.run/api/General/GetCities";
function NewReqForm() {
  //   const [showModal, updateShowModal] = useState(false);
  // console.log(showModal)
  //   const toggleModal = () => updateShowModal(state => !state);
  const [stateData, setstateData] = useState([]);
  const [cityData, setCityData] = useState([
 
    {id: 1, name: 'اصفهان'},
    {id: 12, name: 'قزوین'},
    {id: 3, name: 'تهران'},
    {id: 4, name: 'زنجان'},
 
    ]);
  
    
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
    axios
      .get(getCityURL)
      .then((response) => {
        if (response.data.statusCode == 200) {
          // setCityData(response.data.data);
        } else {
        }
      })
      .catch((exception) => {
        console.log(exception);
      });
  };
  const [uploadFile, setuploadFile] = React.useState();
  const [selectedState, setSelectedState] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");
  // console.log(selectedState)
   // const availableCities = cityData.filter((obj) => {
  //   return obj.data.name === selectedState;
  // });
  const availableCities = stateData?.find(
     (s) => s.name === selectedState
  );
  console.log(availableCities)
  useEffect(() => {
    getState();
    getcity();
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
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {stateData.map((e, key) => {
                  return (
                    <option value={e.center} key={key}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            )}

            {/* {cityData == undefined && availableCities==undefined ? (
              <div></div>
            ) : (
              <select
                placeholder="City"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {availableCities?.name.map((e, key) => {
                  return (
                    <option value={e.center} key={key}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            )}   */}
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewReqForm;
