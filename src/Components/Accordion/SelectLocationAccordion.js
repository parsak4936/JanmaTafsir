import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import "./selectlocation.css";
import UserLocationPicker from "../Map/LocationPicker";

const SelectLocationAcc = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onClick = (itemIndex) => {
    let _activeIndex = activeIndex ? [...activeIndex] : [];

    if (_activeIndex.length === 0) {
      _activeIndex.push(itemIndex);
    } else {
      const index = _activeIndex.indexOf(itemIndex);
      if (index === -1) {
        _activeIndex.push(itemIndex);
      } else {
        _activeIndex.splice(index, 1);
      }
    }

    setActiveIndex(_activeIndex);
  };

  return (
    <>
      <div className="accordion-demo">
        <div className="card">
           <Accordion activeIndex={0}>
            <AccordionTab header=" مختصات زمین">
              <UserLocationPicker/>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </>
  );
};
export default SelectLocationAcc;
