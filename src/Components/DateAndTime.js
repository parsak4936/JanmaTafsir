import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import moment from "jalali-moment";

function DateAndTime() {
  const current = new Date();
  const date = `${current.getFullYear()}/${current.getMonth() + 1}/${current.getDate()}`;

  var dateNumber = moment(date, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD");
  var dateMonth = moment(date, "YYYY/MM/DD").locale("fa").format("MMMM");
  var dateDayCounter = moment(date).day();
  function dateDay (dateDay) {
    switch (dateDay) {
      case 0:
        return "شنبه";
      case 1:
        return "یکشنبه";
      case 2:
        return "دو شنبه";
      case 3:
        return "سه شنبه";
      case 4:
        return "چهارشنبه";
      case 5:
        return "پنجشنبه";
      case 6:
        return "جمعه";
      
      default:
        return "نامعلوم";
    }
  };

   

  useEffect(() => {}, []);

  return (
    <div style={{ direction: "ltr" }}>
      {dateNumber} - {dateMonth} - {dateDay(dateDayCounter)}
    </div>
  );
}

export default DateAndTime;
