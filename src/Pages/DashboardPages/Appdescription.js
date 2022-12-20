import React from "react";

import { Image } from "primereact/image";
import description from "../../Assets/DashboardAsset/description1.jpg";
function Appdescription() {
  return (
    <div className=" flex flex-wrap grid" style={{}}>
      <div className="grid col-12 scalein  animation-duration-1000  md:col-6 lg:col-6 align-items-center justify-content-center">
        <div className=" grid col-12 text-center    text-center align-items-center justify-content-center">
          <blockquote class="blockquote">
            <p class=" p-3  grid col-12 text-center align-items-center justify-content-center ">
              {" "}
              جانما تفسیر.
            </p>
            <p class=" p-3 grid col-12 text-muted align-items-center justify-content-center">
              سامانه کارشناسی اراضی دادگستری
            </p>
          </blockquote>
        </div>

        <div className="grid col-12 scalein  animation-duration-1000  md:col-6 lg:col-6 align-items-center justify-content-center w-full"  style={{marginTop:'0px', padding: "20px", direction: "rtl", fontSize: "1rem" }}>
          <p
           
            className="grid col-12  "
          >
            سامانه جانما تفسیر پیگی قضایی پرونده اراضی شما را حل میکند!
            <br></br>
            پیگیری پرونده های قضایی از جمله پرونده های اراضی وقت گیر است و در
            نهایت دادگاه به کارشناس ارجاع میدهد تا طبق نظر کارشناسان طرفین ،
            حکمی صادر بشود. با جانما تفسیر ،ابتدا طرفین با کارشناسان در ارتباط
            خواهند بود و دیگر درگیر دادگاه نخواهند شد. درنهایت اگر نظر کارشناسان
            متفاوت بود ، پرونده به دادگاه ارجاع میشود که هم در هزینه ، هم در وقت
            صرفه جویی خواهد شد کارشناسان این سامانه از کارشناسان رسمی دادگستری
            در سراسر کشور در زمینه کارشناسی اراضی هستند
          </p>
        </div>
      </div>

      <div className="grid fadein animation-duration-1000 col-12  md:col-6 lg:col-6 align-items-center justify-content-center">
        <div style={{ textAlign: "center" }}>
          <Image
            template="Preview Content"
            alt="Image Text"
            src={description}
            width="450"
            height="450"
            // preview
          />
        </div>
      </div>
    </div>
  );
}

export default Appdescription;
