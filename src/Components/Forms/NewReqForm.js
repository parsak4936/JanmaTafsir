import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Form from "react-bootstrap/Form";
import BachlorsTable from "../../Components/Tables/BachlorsListTable";
import { Button, Dropdown } from "react-bootstrap";
 import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect } from "react";
import Modal from '../Modals/Modal'
import { ModalContext } from '../Modals/context';
 
 
 
const getStates = () => {     
    return new Promise((resolve, reject) =>
    fetch('https://iran-locations-api.vercel.app/api/v1/states')
    .then((data) => resolve(data.json()))
        .catch((err) => reject(err))
    );
  }

function NewReqForm() {
  const [showModal, updateShowModal] = useState(false);
console.log(showModal)
  const toggleModal = () => updateShowModal(state => !state);

    const [stateData, setstateData] = React.useState();
useEffect(() => {
        getStates().then((data) => setstateData(data));

               
        
    }, []);
    const [uploadFile, setuploadFile] = React.useState();

     
  const [selectedState, setSelectedState] = React.useState();
  const [selectedCity, setSelectedCity] = React.useState();
// console.log(selectedState)
//    const availableCities =
//     selectedState?.find(
//         (s) => s === selectedState
//       );
    
//   console.log(stateData)
 
  return (
    <Form style={{ margin: "40px" }}>
      

      <Form.Group>
        <Row>
          
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Label>State: </Form.Label>
        {stateData==undefined ? <div></div> : 
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
        } 
        
        {/* {stateData==undefined ? <div></div> :
        
        <select
          placeholder="City"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
         
          {stateData?.map((e, key) => {
            return (
              <option value={e.center} key={key}>
                {e}
              </option>
            );
          })}
        </select>
        } */}

       
         
        
      
 
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
        
        <Form.Control  onChange={(e) => setuploadFile(e.target.files[0])}
         label="Upload The End-Game Photo"
         accept=".zip"  type="file" />
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
 <ModalContext.Provider value={{ showModal, toggleModal }}>
      <div>
        
        <button onClick={toggleModal}>Show Modal</button>
        {/* <Modal   updateModalState={toggleModal} /> */}
      </div>
    </ModalContext.Provider>

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
