import React, { useRef, useState } from "react";
import "primeflex/primeflex.scss";
import { Dialog } from "primereact/dialog";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import { Button } from "primereact/button";
import Show400Errors, {
  Show500Errors,
  ShowNetorkErrors,
  ShowSucessMsg,
  ShowTokenErrors,
} from "../../Components/ShowErrors/ShowErrors";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";
import Spiner from "../../Components/spiner/spiner";
import { useNavigate } from "react-router-dom";
function FinalStepNewReq() {
  const dispatch = useDispatch();
  // const ReqDetails = useSelector((state) => state.NewReqReducer);
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
  const [waiting, setWaiting] = useState(false);

  const [NewReqData, setNewReqData] = useState({
    cityId: useSelector((state) => state.NewReqReducer.cityID).toString(),
    city: useSelector((state) => state.NewReqReducer.city),

    stateID: useSelector((state) => state.NewReqReducer.stateID).toString(),
    state: useSelector((state) => state.NewReqReducer.state),

    expertId: useSelector((state) => state.NewReqReducer.expertId).toString(),
    expertName: useSelector((state) => state.NewReqReducer.expertName),

    reasonRequestId: useSelector((state) => state.NewReqReducer.SelectReasonID).toString(),
    SelectReason: useSelector((state) => state.NewReqReducer.SelectReason),

    substantiaTopicsId: useSelector(
      (state) => state.NewReqReducer.SubstantialTopicsID
    ).toString(),
    SubstantialTopics: useSelector(
      (state) => state.NewReqReducer.SubstantialTopics
    ),

    address: useSelector((state) => state.NewReqReducer.Address),

    lat: useSelector((state) => state.NewReqReducer.lat),

    lng: useSelector((state) => state.NewReqReducer.lng),

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
  const [displayBasic, setDisplayBasic] = useState(false);
  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const navigate = useNavigate();

  const toastBC = useRef(null);
  //Accept processes:
  const handleNewReq = () => {
    setWaiting(true);

    const user = {
      cityId: NewReqData.cityId,
      expertId: NewReqData.expertId,
      stateID: NewReqData.stateID,
      reasonRequestId: NewReqData.reasonRequestId,
      substantiaTopicsId: NewReqData.substantiaTopicsId,
      address: NewReqData.address,
      lat: NewReqData.lat,
      lng: NewReqData.lng,
    };
    if (UserType === 1) {
      setTimeout(
        () => {
          axios
            .post(
              "https://elated-swanson-mrhungrj5.iran.liara.run/api/UserRequest/AddNewUserRequest",
              {
                cityId: user["cityId"],
                expertId: user["expertId"],
                reasonRequestId: user["reasonRequestId"],
                substantiaTopicsId: user["substantiaTopicsId"],
                address: user["address"],
                lat: user["lat"],
                stateID: user["stateID"],
                lng: user["lng"],
              },
              config
            )
            .then((response) => {
              if (response.data.statusCode === 200) {
                 setWaiting(false);
                 ShowSucessMsg(toastBC)
                // dispatch(
                //   allActions.userActions.FourthFormSubmit()
                // );
                   navigate("/WorkInProgress");
              }
            })
            .catch((exception) => {
               setWaiting(false);

              if (exception.response.status === 400) {
                Show400Errors(toastBC);
              } else if (exception.response.status === 401) {
                ShowTokenErrors(toastBC);
              } else if (exception.response.status === 500) {
                Show500Errors(toastBC);
              } else if (exception.code === "ERR_NETWORK") {
                ShowNetorkErrors(toastBC);
              }
            });
        },

        2000
      );
    } else {
        setWaiting(false);
    }
  };

  const AcceptOptions = (name) => {
    
    return (
      <div>
        <Button
          label="            منصرف شدم
"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
         {waiting == false ? (
           <Button
           label="             از انتخابم مطمئنم
 "
           icon="pi pi-check"
           onClick={handleNewReq}
           autoFocus
         />
                       
                    ) : (
                      <Button className="">
                        <Spiner />
                      </Button>
                    )}
       
      </div>
    );
  };
  return (
    <>
      <Toast ref={toastBC} position="bottom-center" />

      <Dialog
        header=" آیا از اطلاعات درخواست  مطمئن هستید "
        className="text-center"
        visible={displayBasic}
        style={{ width: "50vw" }}
        onHide={() => onHide("displayBasic")}
        footer={AcceptOptions("displayBasic")}
      >
        <Divider />
        <span>در صورت تایید ، درخواست شما به کارشناس ارجاع داده خواهد شد</span>
      </Dialog>

      <div className="grid card col-12 m-4">
        <div className="grid ">
          <div className="col-6">نام استان :{NewReqData.state}</div>{" "}
          <div className="col-6">نام شهر :{NewReqData.city}</div>
        </div>

        <div className="grid ">
          <div className="col-6">
            دلیل اولیه درخواست:
            {NewReqData.SelectReason}
          </div>{" "}
          <div className="col-6">
            دلیل ثانویه درخواست :{NewReqData.SubstantialTopics}
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
          <div className="col-6">
            {" "}
            مختصات {NewReqData.lng}--
            {NewReqData.lat}
          </div>
        </div>

        <div className="grid ">
          <div className="col-12">
            اطلاعات کارشناس :{NewReqData.expertId}--{NewReqData.expertName}
          </div>{" "}
        </div>
      </div>
      <div className="grid col-12  ">
        <div className="m-2">
          <Button
            onClick={() => {
              onClick("displayBasic");
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
