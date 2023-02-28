import React from "react";
import axios from "axios";
export default function Login() {
  const handleClick = () => {
    axios
      .post("http://localhost:5000/user/login", {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  };
  return <button onClick={handleClick}>Login Page</button>;
}
