import axios from "axios";
import React, { useEffect, useState } from "react";

export function useApply(apply) {
  const [collages, setData] = useState([]);
  console.log("npm i axios" , window.location.pathname)
  const access = localStorage.getItem('access')
// const job = window.lo
  const getData = () => {
    axios
    .get(`http://127.0.0.1:8001/api/jobs${window.location.pathname}/apply/` , {

        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${access}`,
          "X-CSRFToken":
            "gnu99yM7oNaRBL4Pjcs88CeWmxOWW55xf2lf1E7Hyzm4UlIZKCkYRI3RL9nTjwm5",
        },
      })
      .then(function (res) {  
        setData(res.data);
      })
      .catch(function (err) {
        if (err.response.statusText === "Unauthorized") {
          window.location.href = "/login"
        } else if (err.request) {
          console.error("Req Error");
        } else {
          console.error("Error: ", err.message);
        }
      });
  };

  useEffect(() => {
    if (apply)    
    getData();
  }, [apply]);

  const data = React.useMemo(() => collages, [collages]);
  return {
    data,
  };
}