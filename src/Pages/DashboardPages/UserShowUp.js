import React from "react";
import "../../Styles/dashboard.css";

import LeftSign from "../../Assets/DashboardAsset/leftSign.svg";
import RightSign from "../../Assets/DashboardAsset/rightSign.svg";
import Image from "react-bootstrap/Image";
import userImage from "../../Assets/DashboardAsset/experts.jpg";
function UserShowUp() {
  return (
    <div className="grid  align-items-center justify-content-center">
      {/* row 1 : title and description of users */}
      <div className="grid col-12 align-items-center justify-content-center md:col-6 lg:col-6 ">
        <p className="col-12    "> کاربران</p>
        <p className="col-12  ">
          asdddddddddddddddddddddddddddd ddddddddddddddddddddddd ddddddddddd
        </p>
      </div>
      {/* row 2 : real User description*/}

      <div className="grid align-items-center justify-content-center">
        <div
          className="grid  align-items-center justify-content-center col-12"
          style={{
            backgroundImage: `url(${LeftSign})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          fluid="true"
        >
          <div className="col-12  md:col-6 lg:col-6">
            <p
              className=" "
              style={{
                padding: "20px",
                direction: "rtl",
                fontSize: "1rem",
              }}
            >
              عنوان کاربر حقیقی
            </p>
            <p
              className="align-items-center justify-content-center"
              style={{
                padding: "20px",
                direction: "rtl",
                fontSize: "1rem",
              }}
            >
              توضیحات کاربر
              حقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیق
              یحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقی
              قیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیح
              قیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیح قیقیحقیقیحقیقیحقیقیحقیقیحقیقی{" "}
            </p>
          </div>
          <div className=" col-12  md:col-6 lg:col-6 align-items-center justify-content-center">
            <div>
              <Image
                src={userImage}
                fluid
                style={{ width: "55vh", height: "55vh" }}
                roundedCircle
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 : expert users and their description */}
      <div className="grid align-items-center justify-content-center ">
        <div
          className="grid  align-items-center justify-content-center col-12"
          style={{
            backgroundImage: `url(${LeftSign})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          fluid="true"
        >
          {" "}
          <div className=" col-12  md:col-6 lg:col-6 align-items-center justify-content-center">
            <div>
              <Image
                src={userImage}
                fluid
                style={{ width: "55vh", height: "55vh" }}
                roundedCircle
              />
            </div>
          </div>
          <div className="col-12  md:col-6 lg:col-6">
            <p
              className=" "
              style={{
                padding: "20px",
                direction: "rtl",
                fontSize: "1rem",
              }}
            >
              عنوان کاربر حقیقی
            </p>
            <p
              className="align-items-center justify-content-center"
              style={{
                padding: "20px",
                direction: "rtl",
                fontSize: "1rem",
              }}
            >
              توضیحات کاربر
              حقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیق
              یحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقی
              قیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیح
              قیقیحقیقیحقیقیحقیقیحقیقیحقیقیحقیقیح قیقیحقیقیحقیقیحقیقیحقیقیحقیقی{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserShowUp;
