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
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={RightSign}
          alt="Second slide"
        />
 
      </Carousel.Item>
     
    </Carousel>
  );
}

export default FeaturesCarousel;

// import React from "react";
//  import './carousel.css'
// import SlideImage from '../../Assets/slideimage.png'
// import { Carousel } from 'primereact/carousel';
// import { useState } from "react";

 
// function FeaturesCarousel() {
//   const [products, setProducts] = useState([
    
//   ]);
//     const responsiveOptions = [
//         {
//             breakpoint: '1024px',
//             numVisible: 1,
//             numScroll: 1
//         },
//         {
//             breakpoint: '600px',
//             numVisible: 1,
//             numScroll: 1
//         },
//         {
//             breakpoint: '480px',
//             numVisible: 1,
//             numScroll: 1
//         }
//     ];
//   const productTemplate = (product) => {
//     return (
//         <div className="product-item">
//             <div className="product-item-content">
                
//                 <span>sadas</span>
//             </div>
//         </div>
//     );
// }



//   return (
//     <div className="card" style={{
//        marginTop:'30px',
//       position: 'relative',
//       width: '100%',
//       overflow: 'hidden',}} >
//     <Carousel value={products} numVisible={2} numScroll={2} responsiveOptions={responsiveOptions}
//         itemTemplate={productTemplate}  />
// </div>
//   );
// }

// export default FeaturesCarousel;