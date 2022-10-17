import React, { useState } from "react";
function Addpostmodal({ setopenModal , postArr , setPostArr,login}) {
  const [pContent , setPContent] = useState("");
  const [img , setImg] = useState("");
  // addPost functionality
  const addPost = () =>{
    var tempArr = {
        username:login.name,
        usermail:login.mail,
        image: img,
        desc: pContent,
    };
    setPostArr([...postArr,tempArr])
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn ">
          <button onClick={() => setopenModal(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="title">
          <h1>Add your post</h1>
        </div>
        <div className="body">
          <textarea placeholder="Remember be nice!!" onChange={(event) => setPContent(event.target.value)}/>
          <br />
          <br />
          <input type="text" placeholder="Provide image url"  className="imgInput" onChange={(event) => setImg(event.target.value)}/>
          <br />
          <br />
        </div>
        <div className="footer">
          <button onClick={() => setopenModal(false)} id="cancelBtn">
            Cancel
          </button>
          <button onClick = {addPost}>Upload</button>
        </div>
      </div>
    </div>
  );
}

export default Addpostmodal;
