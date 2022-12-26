import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl } from "leaflet-geosearch";
 import './SearchControl.css'
 
const SearchControl = (props) => {
  const map = useMap();
 
   useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: props.provider,
       
      ...props
    });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map, props]);

  return null;
};
export default SearchControl;
{/* <div class="geosearch leaflet-bar leaflet-control leaflet-control-geosearch">
    <form class=" ">
        <input class="glass " type="text" placeholder="Enter address, please">
       <a class="reset">X</a>
       <div class="results"></div>
       </form>

       <a class="leaflet-bar-part leaflet-bar-part-single" title="Enter address, please" href="#">
    </a>
    </div> */}
  