import React from "react";
import "../../Styles/dashboardFeatures.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeaturesCarousel from "../../Components/Carousel/FeaturesCarousel";
function Features() {
  return (
    <Container
      className="col-xs-12 noPadding threeViewMain"
      style={{ height: "60vh", marginBottom: "20px" }}
      fluid="true"
    >
      <Row>
        <Col style={{}} lg={true}>
          {" "}
          <FeaturesCarousel />{" "}
        </Col>
        <Col
          className="col2"
          style={{
            height: "40vh",
            direction: "rtl",
            paddingTop: "90px",
            marginBottom: "20px",
          }}
          lg={true}
        >
          <div className="col-xs-12 col-md-5 threeViewTxt ">
            <h1
              className="col-xs-12 col-md-5 featuresheader "
              style={{
                width: "350px",
                fontSize: "30px",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              جانما تفسیر چیست ؟
            </h1>
            <ul>
              <li
                data-wow-delay=".1s"
                data-wow-duration=".9s"
                className="wow fadeInRight"
              >
                ویژگی اول
              </li>
              <li
                data-wow-delay=".2s"
                data-wow-duration=".9s"
                className="wow fadeInRight"
              >
                ویژگی دوم
              </li>
              <li
                data-wow-delay=".3s"
                data-wow-duration=".9s"
                className="wow fadeInRight"
              >
                ویژگی سوم
              </li>
              <li
                data-wow-delay=".4s"
                data-wow-duration=".9s"
                className="wow fadeInRight"
              >
                ویژگی چهارم
              </li>
              <li
                data-wow-delay=".5s"
                data-wow-duration=".9s"
                className="wow fadeInRight"
              >
                ویژگی پنجم
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;
