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
import ReasonRequest from "../../Components/dropdown/ReasonRequests";
import SubstantialTopics from "../../Components/dropdown/SubstantialTopics";
import { InputTextarea } from "primereact/inputtextarea";
import ExpertSubjectServicesDropDown from "../../Components/dropdown/ExpertSubjectServicesDropDown";
function DetailedReq() {
  const dispatch = useDispatch();
  const [moreDetails, setmoreDetails] = useState("");
  return (
    <div className="grid col-12 p-6 "  style={{fontFamily:'IRANSansWeb'}}>
      <div className="col-6">
        {" دلیل درخواست(برای ارائه به کدام ارگان)"}
        <ReasonRequest />
      </div>
      <div className="col-6">
        {" دلیل ثانویه"}
        <SubstantialTopics />
      </div>
       <div className="gird col-4  " > نوع کارشناسی <ExpertSubjectServicesDropDown /></div>
      
        <div className=" grid col-8">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>
              {" "}
              در صورت همراه داشتن فایل زیپ ، آن را آپلود کنید{" "}
              <span>(اختیاری)</span>
            </Form.Label>

            <Form.Control
              // onChange={(e) => setuploadFile(e.target.files[0])}
              label="Upload The End-Game Photo"
              accept=".zip"
              type="file"
            />
          </Form.Group>
        </div>
     

      <div className="gird col-12  ">
        <div className="col-12">         درصورت داشتن پرونده یا توضیحات بیشتر ، آنها را ذکر کنید
</div>
        <InputTextarea
          style={{ width: "100vh" }}
          value={moreDetails}
          onChange={(e) => setmoreDetails(e.target.value)}
          rows={15}
          cols={30}
          autoResize
        />

      </div>
     
      <div className="grid col-12  ">
        <Button
          style={{ marginLeft: "20px" }}
          onClick={() => {
            dispatch(allActions.NewReqActions.ThirdFormSubmit(moreDetails));
          }}
        >
          تایید
        </Button>
        <Button
          onClick={() => {
            dispatch(allActions.NewReqActions.ThirdFormBack());
          }}
        >
          برگشت
        </Button>
      </div>
    </div>
  );
}

export default DetailedReq;
