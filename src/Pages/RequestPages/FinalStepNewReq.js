import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import "primeflex/primeflex.scss";
import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import SelectLocationAcc from "../../Components/Accordion/SelectLocationAccordion";
import { Button } from "primereact/button";
import { Modal } from "react-bootstrap";
import { Field } from "formik";
import Show400Errors, { Show500Errors, ShowNetorkErrors, ShowTokenErrors } from "../../Components/ShowErrors/ShowErrors";
import { Toast } from "primereact/toast";
function FinalStepNewReq() {
  const dispatch = useDispatch();
  const ReqDetails = useSelector((state) => state.NewReqReducer);
  // ReqDetail Body :
  //   Address :  ""
  // SelectReason :  " ارائه گزارش به سازمانهای دولتی"
  // SubstantialTopics :  "salam"
  // activeIndex:  3
  // city :  "آذرشهر"
  // cityID : 3
  // len:  null
  // lon :  null
  // state :  "آذربایجان‌شرقی"
  // stateID :  1
  // uploadedFile: null
  const UserType = useSelector(
    (state) => state.persistedReducer.LoginReducers.userType
  );   
  const [NewReqData, setNewReqData] = useState({
    cityId: useSelector((state) => state.NewReqReducer.cityID),
    expertId: 1,
    reasonRequestId: useSelector((state) => state.NewReqReducer.SelectReasonID),
    substantiaTopicsId: useSelector(
      (state) => state.NewReqReducer.SubstantialTopicsID
    ),
    stateID:useSelector((state) => state.NewReqReducer.stateID),
    address: useSelector((state) => state.NewReqReducer.Address),
    lat: useSelector((state) => state.NewReqReducer.len),
    lng: useSelector((state) => state.NewReqReducer.lon),
    moreDetails: useSelector((state) => state.NewReqReducer.moreDetails),
  });
  const Token = useSelector(
    (state) => state.persistedReducer.LoginReducers.Token
  );
  
  const config = {
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  };
  // userrequests/addNewReq inputs in backEnd :
  // {
  //   "expertId": 0,
  //   "cityId": 0,
  //   "reasonRequestId": 0,
  //   "substantiaTopicsId": 0,
  //   "address": "string",
  //   "lat": "string",
  //   "lng": "string"
  // }
  // NewReqURL
  // "https://elated-swanson-mrhungrj5.iran.liara.run/api/UserRequest/AddNewUserRequest"
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const toastBC = useRef(null);
  const handleNewReq = () => {
    
    const user = {
      cityId: NewReqData.cityId,
      expertId: NewReqData.expertId,
      stateID:NewReqData.stateID,
      reasonRequestId: NewReqData.reasonRequestId,
      substantiaTopicsId: NewReqData.substantiaTopicsId,
      address: NewReqData.address,
      lat: NewReqData.lat,
      lng: NewReqData.lng,
    };
    console.log(UserType)
    if (UserType == 1) {
      setTimeout(
        () => {
          axios
            .post("https://elated-swanson-mrhungrj5.iran.liara.run/api/UserRequest/AddNewUserRequest",{
              cityId: user["cityId"],
              expertId: user["expertId"],
              reasonRequestId: user["reasonRequestId"],
              substantiaTopicsId: user["substantiaTopicsId"],
              address: user["address"],
              lat: user["lat"],
              stateID: user["stateID"],
              lng: user["lng"],
 
 
            },config)
            .then((response) => {
              if (response.data.statusCode == 200) {
                // setWaiting(false);
                // dispatch(
                //   allActions.userActions.FourthFormSubmit()
                // );
                // navigate("/Validation");
              }
            })
            .catch((exception) => {
              // setWaiting(false);

              if (exception.response.status == 400) {
                Show400Errors(toastBC);
              } else if (exception.response.status == 401) {
                ShowTokenErrors(toastBC);
              } else if (exception.response.status == 500) {
                Show500Errors(toastBC);
              } else if (exception.code == "ERR_NETWORK") {
                ShowNetorkErrors(toastBC);
              }
            });
        },

        2000
      );
    } else {
      // setWaiting(false);
    }
  };
  return (
    <>
     <Toast ref={toastBC} position="bottom-center" />
      <Modal
        className="align-items-center justify-content-center "
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="align-items-center justify-content-center text-lg"
            style={{ direction: "rtl" }}
          >
            {" "}
            آیا از درست بودن اطلاعات مطمئن هستید؟
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ direction: "rtl" }}>
          اگر از درست بودن اطلاعات درخواست مطمئن هستید،آنها را تایید کنید و
          منتظر نظر کارشناس بمانید{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="align-items-center justify-content-center m-2"
            variant="secondary"
            onClick={handleClose}
          >
            مطمئن نیستم
          </Button>
          <Button
            className="align-items-center justify-content-center m-2"
            variant="primary"
            onClick={handleNewReq}
          >
            مطمئن هستم{" "}
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="grid card col-12 m-4">
        <div className="grid ">
          <div className="col-6">نام استان :{NewReqData.stateId}</div>{" "}
          <div className="col-6">نام شهر :{NewReqData.cityId}</div>
        </div>

        <div className="grid ">
          <div className="col-6">
            دلیل اولیه درخواست:
            {NewReqData.reasonRequestId}
          </div>{" "}
          <div className="col-6">
            دلیل ثانویه درخواست :{NewReqData.substantiaTopicsId}
          </div>
        </div>

        <div className="grid ">
          <div className="col-6">
            آدرس زمین:
            {NewReqData.address}
          </div>{" "}
          <div className="col-6">
            شماره پرونده دادگاه (درصورت وجود):{NewReqData.moreDetails}
          </div>
        </div>
        <div className="grid ">
          <div className="col-12">اطلاعات کارشناس :{NewReqData.expertId}</div>{" "}
        </div>
      </div>
      <div className="grid col-12  ">
        <div className="m-2">
          <Button
            onClick={() => {
              handleShow(true);
              
            }}
          >
            تایید
          </Button>
        </div>
        <div className="m-2">
          <Button
            onClick={() => {
              dispatch(allActions.NewReqActions.FourthFormBack());
            }}
          >
            برگشت
          </Button>
        </div>
      </div>
    </>
  );
}

export default FinalStepNewReq;
