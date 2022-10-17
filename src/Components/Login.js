import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login(props) {
  const [loginMail, setloginMail] = useState("");
  const [loginPass, setloginPass] = useState("");
  const navigate = useNavigate();

  const loginUser = (event) => {
    if (loginMail !== "" && loginPass !== "") {
      props.signup.map((item, index) => {
        if (item.mail === loginMail && item.password === loginPass) {
          props.setLogin({ name: item.name ,mail: item.mail });
          console.log(props.login);
          navigate("/posts");
          console.log(item);
        }else{
          navigate("/signup");
        }
        return 1;
      });
    }
  };
  return (
    <>
      <div>
        <img src="./logo_social_media.png" alt="..." />
        <h1 style={{ textDecoration: "underline" }}>
          Welcome to CED COMMUNITY
        </h1>
        <div id="loginDiv">
          <img src="./7.png" alt="..." style={{ width: "35%" }} />
          <div id="loginformDiv">
            <h1>Welcome User</h1>

            <input
              type="text"
              className="infilelds"
              placeholder="Enter Your Email"
              onChange={(event) => setloginMail(event.target.value)}
              required
            />
            <br />
            <input
              type="password"
              className="infilelds"
              placeholder="Enter a password"
              onChange={(event) => setloginPass(event.target.value)}
              required
            />
            <br />
            <button id="signupbtn" onClick={loginUser}>
              Login
            </button>
          </div>
        </div>
        <h5>
          Don't have an account{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Create account <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </h5>
      </div>
    </>
  );
}
