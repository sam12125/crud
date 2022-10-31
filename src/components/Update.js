import React from "react";
import { useState } from "react";
import axios from "axios";

function Update() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const [id, setId] = useState("");

  const updateData = () => {
    const user = {
      name: name,
      marks: marks,
    };
    console.log(user);
    axios.put(`http://localhost:8080/data/${id}`, { name, marks }).then(
      (response) => {
        //  data = response.data
        // setStudent(data)
        console.log(response);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <input
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter marks"
          type="number"
          onChange={(e) => setMarks(e.target.value)}
        />
        <input placeholder="Enter id" onChange={(e) => setId(e.target.value)} />
        <button onClick={updateData}>Update</button>
      </div>
    </>
  );
}

export default Update;
