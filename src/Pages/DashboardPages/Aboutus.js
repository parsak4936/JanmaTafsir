import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
 import { Avatar } from "primereact/avatar";
const Aboutus = () => {
  const header = (
    <div className="col-12 md:col-4">
      <Avatar
        image="images/avatar/amyelsner.png"
        className="mr-2"
        size="xlarge"
        shape="circle"
      />
    </div>
  );
  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary ml-2"
      />
    </span>
  );

  return (
    <div
      className=" grid align-items-center justify-content-center "
      
    >
      <div className="grid   align-items-center justify-content-center md:col-6 lg:col-6 ">
        <p className="col-12  align-items-center justify-content-center  ">
          {" "}
          درباره تیم جانما تفسیر
        </p>
        <p className="col-12 align-items-center justify-content-center ">
          جانما تفسیر تشکیل شده از چندین گروه ؛ ... و ... و ... میباشد .این
          سامانه در سال ... توسط ... تاسیس شده است
        </p>
      </div>
      <div className=" grid p-6 col-12 align-items-center justify-content-center ">
        <Card
          className="col-12 m-3  md:col-6 lg:col-6 "
          title="Advanced Card"
          subTitle="Subtitle"
          style={{ width: "25em" }}
          footer={footer}
          header={header}
        >
          <p className="m-0" style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        <Card
          className="col-12 m-3  md:col-6 lg:col-6"
          title="Advanced Card"
          subTitle="Subtitle"
          style={{ width: "25em" }}
          footer={footer}
          header={header}
        >
          <p className="m-0" style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        <Card
          className="col-12 m-3   md:col-6 lg:col-6"
          title="Advanced Card"
          subTitle="Subtitle"
          style={{ width: "25em" }}
          footer={footer}
          header={header}
        >
          <p className="m-0" style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Aboutus;
