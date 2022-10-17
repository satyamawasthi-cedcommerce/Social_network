import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate()
  const logout = () => {
    // debugger;
    // props.setLogin({});
    window.location.reload();
    navigate("/");

  };
  // const logoutUser = () =>{
  //   props.setLogin("");
  // }
  return (
    <div>
      <div id="head">
        <i
          className="fa-solid fa-user fa-2xl"
          style={{ marginTop: "4%", wordSpacing: "5px", letterSpacing: "3px" }}
        >
          {" "}
          {props.login.name}
        </i>
        <Link to="/">
          <img
            src="./c_logo.png"
            alt="..."
            style={{ width: "30%", marginTop: "2%" }}
          />
        </Link>

        <i
          className="fa-solid fa-arrow-right-from-bracket fa-2xl"
          style={{ marginTop: "3.5%" }}
          onClick={logout}
        >
          {" "}
          <sub >Logout</sub>
        </i>
      </div>
      <hr style={{ border: "1px solid rgb(27, 27, 27)", width: "90%" }} />
    </div>
  );
}
