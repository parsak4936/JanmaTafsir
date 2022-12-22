import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { UserSidebarData } from "./UserSidebarData";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  
  const [visibleRight, setVisibleRight] = useState(false);
  
  return (
    <div className=""
    style={{
  
      
    }}>
      <Sidebar
      className="surface-400  w-auto "
       
        visible={visibleRight}
        position="right"
         
        onHide={() => setVisibleRight(false)}
      >
        <div className="align-items-center text-center align-items-center">محیط کار </div>
        <div className=" col-12 text-end  ">
       {UserSidebarData.map((item, index) => {
              return (
                <li
                 
                  key={index}
                  className="  text-500 align-items-center p-3 list-none align-items-center w-full"
                >
                  <Link to={item.path} className="text-800">
                    <span className="m-3">{item.title}</span>
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
    </div>
  );
};

export default UserSidebar;
