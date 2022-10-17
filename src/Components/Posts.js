import React, { useState } from "react";
import Addpostmodal from "./Addpostmodal";
import Header from "./Header";

export default function Posts(props) {
  const [openModal, setopenModal] = useState(false);
  const [comment , setComment] = useState([]);

  // delete post functionality
  const deletePosts = (flag) => {
    console.log(flag);
    var tempPost = props.postArr;
    tempPost.splice(flag, 1);
    props.setPostArr([...tempPost]);
  };
  const commenceLike = (flag) => {
    let tempLike = props.postArr;
    tempLike[flag].like = !tempLike[flag].like;
    props.setPostArr([...tempLike]);
    console.log(props.postArr);
  };
  const inputComment = (eve , ind) =>{
    var temp = comment;
    temp[ind] = eve.target.value
    setComment([...temp]);
    console.log(comment);
  }
  const mentionComment = (flag) =>{
   let tempCommentMention = props.postArr;
   tempCommentMention[flag].comments = comment[flag]
   props.setPostArr([...tempCommentMention])
   console.log(props.postArr);
  }
  return (
    <div>
      <Header login={props.login} setLogin={props.setLogin} />
      <div id="action">
        <img src="./8.png" alt="..." style={{ width: "30%" }} />
        <div>
          <h1 style={{ marginTop: "29%", width: "100%" }}>
            Welcome {props.login.name}
            <br />
            Share,Learn &amp; Contribute
          </h1>

          <div>
            <button id="addPostbtn" onClick={() => setopenModal(true)}>
              Add Post <i className="fa-solid fa-plus"></i>
            </button>
            {openModal && (
              <Addpostmodal
                setopenModal={setopenModal}
                postArr={props.postArr}
                setPostArr={props.setPostArr}
                login={props.login}
              />
            )}
            <p>Be a part of community and enhance the digital revolution.</p>
          </div>
        </div>
      </div>
      <h1>Catalyzing Digital Revolution </h1>
      <div id="mainDiv">
        <div id="postDiv">
          {props.postArr.map((item, index) => (
            <>
              <div id="posts">
                <h3 style={{ textDecoration: "underline" }}>
                  {" "}
                  <i className="fa-regular fa-user"></i> {item.username}
                </h3>
                <h4>{item.usermail}</h4>
                <img
                  src={item.image}
                  alt="..."
                  style={{
                    width: "50%",
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  }}
                />
                <p>{item.desc}</p>
                {item.like ? (
                  <>
                    <i
                      className="fa-solid fa-thumbs-up fa-2xl"
                      style={{ color: "#1c7ed6" }}
                      onClick={() => commenceLike(index)}
                    ></i>
                  </>
                ) : (
                  <>
                    <i
                      className="fa-solid fa-thumbs-up fa-2xl"
                      style={{ marginLeft: "2%" }}
                      onClick={() => commenceLike(index)}
                    ></i>
                  </>
                )}{" "}
                <i
                  className="fa-solid fa-share-nodes fa-2xl"
                  style={{ marginLeft: "2%" }}
                ></i>{" "}
                
                <button onClick={() => deletePosts(index)} className="btnDel">
                  Delete post
                </button>
                  <br/>
                <input type="text" placeholder="Comments please" value={comment?.[index]}
                 className="commentBox" onChange={(event) => inputComment(event,index)}/>&nbsp;{" "}<button style={{padding:"1%" , cursor:"pointer"}} onClick={() =>mentionComment(index)}><i className="fa-solid fa-paper-plane"></i></button>


                 {(comment)?(<>
                 <li style={{listStyle:"none"}}>{item.comments}</li>
                 </>):(<></>)}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
