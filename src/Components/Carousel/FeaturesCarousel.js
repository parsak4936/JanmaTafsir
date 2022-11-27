import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RightSign from '../../Assets/slideimage.png'

import Carousel from 'react-bootstrap/Carousel';

function FeaturesCarousel() {
  return (
    <Carousel fade='true' className="col-xs-12 col-md-7" style={{
      marginTop:'30px',
      position: 'relative',
      width: '100%',
      overflow: 'hidden',}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={RightSign}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={RightSign}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
     
    </Carousel>
  );
}

export default FeaturesCarousel;