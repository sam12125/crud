import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Get() {
  const [student, setStudent] = useState([]);
  let data;

  const fetchData = () => {
    axios.get("http://localhost:8080/data").then(
      (response) => {
        data = response.data;
        // console.log(response.data.items)
        setStudent(data);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>

{student.length ? student.map((elem)=> (
      
      <div key={elem.id} style={{display:"flex" , gap:"6px" , justifyContent:"center"}}>
        <h3>{elem.name}</h3>
        <h3>{elem.marks}</h3>
      </div>
      
   )) : <h1>No data available</h1>}
    </>
  );
}

export default Get;
