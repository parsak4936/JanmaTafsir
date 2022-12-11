import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import BachlorsTable from "../Tables/BachlorsListTable";

function ExpertModal() {
  const dispatch = useDispatch();

  const ModalToggleBoolean = useSelector(
    (state) => state.ToggleReducer.ModalToggle
  );
  const [show, setShow] = useState(ModalToggleBoolean);
  const handleClose = () => {
    setShow(false);
    dispatch(allActions.ToggleActions.ModalToggle(false));
    
  };
  
  //
  return (
    <>
 
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{
          
        }}
      >
        <Modal.Header closeButton style={{margin:'0'}}>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BachlorsTable/>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer style={{
          flexDirection:'row-reverse'
        }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExpertModal;
