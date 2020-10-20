import React, { createContext, useEffect, useState } from "react";
export const DataContext = createContext();
export const Data = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://still-mesa-75708.herokuapp.com/Appointment")
      .then((response) => response.json())
      .then((jsun) => setData(jsun.reverse()));
  }, []);
  console.log(data);
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};
