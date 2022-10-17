import React from "react";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <div id="lDiv">
        <img src="./logo_social_media.png" alt="..." />
      </div>
      <div className="div1">
        <div>
          <h1 style={{ marginTop: "36%" }}>
            Get engaged with the most
            <br />
            Creative and Progressive minds.
          </h1>
          
          <button id="btn1">
            <Link to="./Signup" style={{color:"black" , textDecoration:"none"}}>Get Started <i className="fa-solid fa-arrow-right" ></i></Link>
          </button>
        </div>
        <img src="./1.png" alt="..." style={{ width: "35%" }} />
      </div>
      <div id="featuresDiv">
        <h1 style={{ marginTop: "6%" }}>
          Connect & Share ideas as never before
        </h1>
        <img src="./2.png" alt="..." style={{ width: "45%" }} />
        <br />
        <button id="btn2">
        <Link to="./Signup" style={{color:"black" , textDecoration:"none"}}>Get Started <i className="fa-solid fa-arrow-right" ></i></Link>
        </button>
      </div>
      <div id="motiveDiv">
        <div>
          <img src="./3.png" alt="..." style={{ width: "80%" }} />
          <h1 style={{ marginTop: "15%" }}>Share what you have</h1>
        </div>
        <div>
          <img src="./4.png" alt="..." style={{ width: "80%" }} />
          <h1 style={{ marginTop: "15%" }}>Learn what you want</h1>
        </div>
        <div>
          <img src="./5.png" alt="..." style={{ width: "80%" }} />
          <h1 style={{ marginTop: "15%" }}>Discover novel ideas</h1>
        </div>
      </div>
      <div id="signup">
        <div>
          <h1 style={{ marginTop: "70%" }}>Get Started Now</h1>
          <button id="btn3">
          <Link to="./Signup" style={{color:"black" , textDecoration:"none"}}>Get Started <i className="fa-solid fa-arrow-right" ></i></Link>
          </button>
        </div>
        <img src="./6.png" alt="..." style={{ width: "35%" }} />
      </div>
      <hr style={{ border: "1px solid rgb(27, 27, 27)", width: "90%" }} />
    </>
  );
}
