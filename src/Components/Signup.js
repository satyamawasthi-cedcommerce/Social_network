import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup(props) {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPass, setuserPass] = useState("");
  const [cnfPass, setcnfPass] = useState("");
  const [userAddress, setuserAddress] = useState("");
  const navigate = useNavigate();
  const arr = {
    name: userName,
    mail: userEmail,
    password: userPass,
    confirm: cnfPass,
    address: userAddress,
  };
  const enterUser = (event) => {
    event.preventDefault();
    if (userPass === cnfPass) {
      props.setsignup([...props.signup, arr]);
    }
    navigate("/login");
  };
  return (
    <>
      <div>
        <img src="./logo_social_media.png" alt="..." />
        <h1 style={{ textDecoration: "underline" }}>
          Welcome to CED COMMUNITY
        </h1>
        <div id="createaccountDiv">
          <div id="signupformDiv">
            <h1>Create Your Account</h1>
            <input
              type="text"
              className="infilelds"
              placeholder="Enter Your Name"
              onChange={(event) => setuserName(event.target.value)}
            />
            <br />
            <input
              type="text"
              className="infilelds"
              placeholder="Enter Your Email"
              onChange={(event) => setuserEmail(event.target.value)}
            />
            <br />
            <input
              type="password"
              className="infilelds"
              placeholder="Enter a password"
              onChange={(event) => setuserPass(event.target.value)}
            />
            <br />
            <input
              type="password"
              className="infilelds"
              placeholder="Confirm your password"
              onChange={(event) => setcnfPass(event.target.value)}
            />
            <br />
            <input
              type="text"
              className="infilelds"
              placeholder="Enter Your Address"
              onChange={(event) => setuserAddress(event.target.value)}
            />
            <br />
            <button id="signupbtn" onClick={enterUser}>
              Create Account
            </button>
          </div>
          <img src="./6.png" alt="..." style={{ width: "35%" }} />
        </div>
        <h5>
          Already have an account{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Get Started <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </h5>
      </div>
    </>
  );
}
