import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { ExpertSidebarData } from "./ExpertSidebarData";
import { Link } from "react-router-dom";
import { Divider } from "primereact/divider";

const ExpertSidebar = () => {
  
  const [visibleRight, setVisibleRight] = useState(false);
  
  return (
    <>
      <Sidebar
      className="bg-blue-400 w-3"
        visible={visibleRight}
        position="right"
        style={{fontFamily:'IRANSansWeb'}}
        onHide={() => setVisibleRight(false)}
      >
                <div className="align-items-center text-center align-items-center"> <h5 className=" ">محیط کار </h5>   </div>
                <Divider></Divider>
        
        <div className=" col-12  text-end  w-full">
       {ExpertSidebarData.map((item, index) => {
              return (
                <li
                   
                  key={index}
                  className="  text-500 align-items-center p-3 list-none align-items-center w-full"
                >
                  <Link to={item.path} >
                   
                    <span   className="m-3">{item.title}</span>
                    <span className="">{item.icon}</span>
                  </Link>
                </li>
              );
            })}
            </div>
      </Sidebar>

      <Button
        icon="pi pi-align-justify"
        onClick={() => setVisibleRight(true)}
        className="mr-2"
      />
    </>
  );
};

export default ExpertSidebar;
