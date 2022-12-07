import React from "react";
import "../../Styles/dashboard.css";
import Header from "../../Components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
function MapShowUp() {
  const position = [51.505, -0.09];
  return (
    <Container
      style={{ height: "70vh"  }}
      fluid="true"
    >
      <Row>
       

        <MapContainer
          center={position}
          zoom={13}
          style={{ height: " 65vh" }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution=" "
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Row>
    </Container>
  );
}

export default MapShowUp;
