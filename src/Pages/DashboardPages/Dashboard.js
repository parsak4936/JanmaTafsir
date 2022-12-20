import React from "react";
import "../../Styles/dashboard.css";
import "primeflex/primeflex.scss";
import Header from "../../Components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderImg from "../../Assets/DashboardAsset/bg2.jpg";
import ContactUsBG from "../../Assets/DashboardAsset/ContantUs.svg";
import AboutUsImageBG from "../../Assets/DashboardAsset/AboutUsBG.jpg";

import UsersBg from "../../Assets/DashboardAsset/UserShowup.svg";

import UserShowUp from "./UserShowUp";
import Footer from "../../Components/Footer/Footer";
import GoTopScroll from "../../Components/GoTop/goTopScroll";
import Appdescription from "./Appdescription";
import Aboutus from "./Aboutus";
import ContactUs from "./ContactUs";
import DescriptionImage from "../../Assets/DashboardAsset/DetailInfoBG.svg";

function Dashboard() {
  return (
    <div className="grid">
      <GoTopScroll />
      {/* navbar Row */}

      <div
        className="grid col-12 w-full"
        style={{
          height: "100vh",
          backgroundImage: `url(${HeaderImg})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
      </div>
      {/* features Row */}

      <div
        className="grid col-12 w-full"
        style={{
          height: "100vh",
          backgroundImage: `url(${DescriptionImage})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <Appdescription />
      </div>
      {/* users Row */}
      <div
        className="grid col-12 w-full"
        style={{
          height: "auto",
          backgroundImage: `url(${UsersBg})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <UserShowUp />
      </div>

      <div
        className="grid col-12 w-full"
        style={{
          height: "200vh",
          backgroundImage: `url(${AboutUsImageBG})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Aboutus />
      </div>
      <div
        className="grid col-12 w-full"
        style={{
          height: "100vh",
          backgroundImage: `url(${ContactUsBG})`,

          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <ContactUs />
      </div>
      <div className="grid col-12 ">
        <Footer />
      </div>
    </div>
  );
}
export default Dashboard;
