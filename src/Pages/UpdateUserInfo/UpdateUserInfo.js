import React, { useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../app/Actions/AllActions";
import { Avatar } from "primereact/avatar";
import { FileUpload } from "primereact/fileupload";

import { SlideMenu } from "primereact/slidemenu";
import "primeflex/primeflex.css";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import Navbar from "../../Components/navbars/Navbar";
import AvaTarImage from "../../Assets/DashboardAsset/detailExpert.jpg";
import UpdateForm from "./UpdateForm";
import RRImage from "../../Assets/NewReqImage.jpg";
function UpdateUserInfo() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
  const menu = useRef(null);
  const dispatch = useDispatch();
  const [UserAvatar, setUserAvatar] = useState(AvaTarImage);
  // imageConvertor.replace(/data:image\/.*;base64,/g, "").replace("/^.+,/", "")
  const toastBC = useRef(null);
  const SubscribedUserafter = useSelector(
    (state) => state.persistedReducer.LoginReducers.nationalCode
  );
  const onUpload = () => {
    console.log("GG")
    toastBC.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
}

  const customBase64Uploader = async (event) => {
   // convert file to base64 encoded
    const file = event.files[0];
    const reader = new FileReader();
    let blob = await fetch(file.objectURL).then(r => r.blob()); //blob:url
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
        const base64data = reader.result;
        setUserAvatar(base64data)
         //console.log(base64data);
         //data:image/png;base64,iVBORw0K
         //it should have this to be shown on the screen !
    }
}
const uploadHandler =()=>{
  console.log("SDSDS")
}
  return (
    <div
      style={{
        direction: "rtl",
        backgroundImage: `url(${RRImage})`,
        height: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="grid col-12    " style={{ height: "100vh" }}>
        <div className="  fadeinleft animation-duration-500  align-items-center justify-content-center col-12 md:col-6 lg:col-6">
        <Avatar
        image={UserAvatar}
        label="P"
        shape="circle"
        style={{ width: "60vh", height: "60vh" }}
      />
          <FileUpload
            mode="advanced"
            name="demo"
            
            onSelect={customBase64Uploader}
            maxFileSize="10000000"
            uploadLabel="ارسال عکس"
            cancelLabel="حذف"
            chooseLabel="انتخاب "
            // onProgress={}
            onUpload={onUpload}
            onClear={()=>setUserAvatar(AvaTarImage)}
            onRemove={()=>setUserAvatar(AvaTarImage)}
            // onBeforeUpload : Callback to invoke before file upload begins to customize the request such as post parameters before the files.
             url="./upload"
            accept="image/*"
           
           
          />
        </div>
        <div className="fadeinleft animation-duration-500  align-items-center justify-content-center  col-12 md:col-6 lg:col-6">
          <UpdateForm />
        </div>
      </div>
    </div>
  );
}

export default UpdateUserInfo;
