import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { SidebarData } from "../SidebarData";
import { Link } from "react-router-dom";

const UserDashboardSidebar = () => {
  
  const [visibleRight, setVisibleRight] = useState(false);
  
  return (
    <>
      <Sidebar
      className="bg-blue-400 w-3"
        visible={visibleRight}
        position="right"
         
        onHide={() => setVisibleRight(false)}
      >
        <h3>محیط کار</h3>
        <div className=" col-12 text-center w-full">
       {SidebarData.map((item, index) => {
              return (
                <li
                   
                  key={index}
                  className="align-items-center p-1 list-none justify-content-center w-full"
                >
                  <Link to={item.path} className="align-items-center w-full justify-content-center">
                   
                    <span className="align-items-center w-full justify-content-center">{item.title}</span>
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

export default UserDashboardSidebar;
