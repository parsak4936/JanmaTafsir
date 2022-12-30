import React, { useState } from "react";
import LocationPicker from "react-leaflet-location-picker";
import { useDispatch } from "react-redux";
import allActions from "../../app/Actions/AllActions";

const UserLocationPicker = () => {
  const [pointVals, setCustomers] = useState([
    [0, 0]
  ]);
  const dispatch = useDispatch();

  const pointMode = {
    banner: true,
    control: {
      values: pointVals,
      onClick: (point) => {
        const position ={
          lat:point[0],
          lng:point[1]
        }
         
        setCustomers([point])
        dispatch(allActions.NewReqActions.SelectPosition(position));

      },

      onRemove: (point) =>
        console.log("I've just been clicked for removal :(", point),
    },
  };

  return <LocationPicker pointMode={pointMode} />;
};

export default UserLocationPicker;
