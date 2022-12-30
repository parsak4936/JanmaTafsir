import React from "react";
  import "../../Styles/dashboardFeatures.css";
import FeaturesCarousel from "../../Components/Carousel/FeaturesCarousel";
 import { useNavigate } from "react-router-dom";
 import { Button } from "primereact/button";

import { useSelector } from "react-redux";
function Features() {
  const navigate = useNavigate();
  const SubscribedUser = useSelector(
    (state) => state.persistedReducer.LoginReducers.SubscribedUser
  );
  return (
    <div 
      className=" flex flex-wrap noPadding grid threeViewMain"
      style={{  paddingRight:'20px' ,paddingLeft:'20px'}}
      
    >

      <div className="section1 col-12 fadein animation-duration-1000 md:col-6 lg:col-6">
          <div className="   threeViewTxt ">
            <h1
              className="  featuresheader "
              style={{
                 
                  fontSize: "25px",
                textAlign: "center",
                  lineHeight: "1.5",
              }}
            >
              سامانه ایی برای حل مشکلات حقوقی اراضی{" "}
            </h1>
            <ul style={{  fontSize: "18px",textAlign:'justify',unicodeBidi:'bidi-override'}}>
              <li
                data-wow-delay=".1s"
                data-wow-duration=".9s"
                className="wow fadeInRight"
              >
                دیگر منتظر زمان دادگاه نباشید ، جانماتفسیر قبل نتیجه پرونده را
                مشخص میکند و نیازی به دادگاه نخواهد بود
              </li>
              <li
                data-wow-delay=".2s"
                data-wow-duration=".9s"
                className="wow fadeInRight"
              >
                سرعت بخشیدن به روند حقوقی پرونده ها{" "}
              </li>
              <li
                data-wow-delay=".3s"
                data-wow-duration=".9s"
                className="wow fadeInRight"
              >
                بستری مطمئن برای حل مشکلات اراضی
              </li>
              <li
                data-wow-delay=".4s"
                data-wow-duration=".9s"
                className="wow fadeInRight"
              >
                                ارتباط مستقیم با کارشناسان حرفه ایی دادگستری

               </li>
              <div style={{marginTop:'30px',textAlign:'center'}}>
              <Button 
             className="bg-indigo-500 h-3rem"
              onClick={
                ()=>{
                  if(SubscribedUser===true){
                    navigate("/MapView");
                  }else{
                    navigate("/Login");
                  }
                 
                }
              } >همین الان شروع کن!</Button>
              </div>
              
               
            </ul>
          </div>
        

        
      </div>

      <div  className="col-12 scalein animation-duration-1000 md:col-6 lg:col-6"   lg={true}>
          {" "}
          <FeaturesCarousel />{" "}
        </div>

    </div>
  );
}

export default Features;
