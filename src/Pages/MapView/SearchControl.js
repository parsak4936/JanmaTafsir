import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
  import './SearchControl.css'
 import {
  GeoSearchControl,
  MapBoxProvider,
  AlgoliaProvider,
  OpenStreetMapProvider
} from "leaflet-geosearch";
const SearchControl = (props) => {
  const map = useMap();
  const provider = new OpenStreetMapProvider();

   useEffect(() => {
    const searchControl = new GeoSearchControl({
      provider: provider,
 
      ...props
    }).addTo(map);

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map]);

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
  