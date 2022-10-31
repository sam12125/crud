import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Create() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const postData = () => {
    // console.log(name,marks)
    const user = {
      name: name,
      marks: marks,
    };
    console.log(user);

    axios.post("http://localhost:8080/data", { name, marks }).then((res) => {
      console.log(res);
      window.location.reload();
      //   console.log(res.data);
    });
  };

  return (
    <>
      <div>
        <input
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter marks"
          type="number"
          onChange={(e) => setMarks(e.target.value)}
        />
        <button onClick={postData}>Post</button>
      </div>
    </>
  );
}

export default Create;
