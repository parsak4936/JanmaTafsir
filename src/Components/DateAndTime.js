import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from "jalali-moment";

function DateAndTime() {
  const current = new Date();
  const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;

  var dateNumber = moment(date, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD");
  var dateMonth = moment(date, "YYYY/MM/DD").locale("fa").format("MMMM");
  var dateDayCounter = moment(date).day();
  

   

  useEffect(() => {}, []);
//-fot showing the Date :  {dateDay(dateDayCounter)}
  return (  
    <div   style={{ direction: "ltr" ,fontFamily:'IRANSansWeb' }}>
      {dateNumber} - {dateMonth} 
    </div>
  );
}

export default DateAndTime;
