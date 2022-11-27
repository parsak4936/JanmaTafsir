import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
  //http://api.codebazan.ir/time-date/?td=date
 function DateAndTime() {
    const [date, sdate] = useState(null);
    const HandleDate = (values) => {
        axios.post("http://api.codebazan.ir/time-date/?td=date" ).then((response) => {
            alert(response.data.msg);
            console.log(response);
            window.location.reload();
        });
    };

  useEffect(() => {
    
  }, []);  
    return(
      <div className=" "  style={{
        
        height: "100vh",
      }}
       >
      
        
      </div>
    );
}

export default DateAndTime;