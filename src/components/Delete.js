import React from "react";
import { useState } from "react";
import axios from "axios";

function Delete() {
  const [id, setId] = useState("");

  const deleteData = () => {
    console.log(id);
    axios.delete(`http://localhost:3001/data/${id}`).then((res) => {
      console.log(res);
      window.location.reload();
      //   console.log(res.data);
    });
  };

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <input placeholder="Enter id" onChange={(e) => setId(e.target.value)} />
        <button onClick={deleteData}>Delete</button>
      </div>
    </>
  );
}

export default Delete;
