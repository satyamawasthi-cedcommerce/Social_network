import "./App.css";
import Landing from "./Components/Landing";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Posts from "./Components/Posts";
import { useState } from "react";
function App() {
  const [signup, setsignup] = useState([
    {
      name: "Rahul",
      mail: "rahul@gmail.com",
      password: "1",
      confirm: "1",
      address: "Lucknow",
    },
    {
      name: "Abhimanyu",
      mail: "abhi@gmail.com",
      password: "2",
      confirm: "2",
      address: "Lucknow",
    },
  ]);
  const [login, setLogin] = useState({});
  const [postArr, setPostArr] = useState([
    {
      username: "Rahul",
      usermail: "rahul@gmail.com",
      image: "p1.jpeg",
      desc: "Augmented reality (AR) is the integration of digital information with the user's environment in real time. Unlike virtual reality (VR), which creates a totally artificial environment, AR users experience a real-world environment with generated perceptual information overlaid on top of it.",
      like: false,
      comments:''
    },
    {
      username: "Abhimanyu",
      usermail: "abhi@gmail.com",
      image: "p2.jpeg",
      desc: "The role of scientific knowledge within inventing teams and the moderating effects of team internationalization and team experience: Empirical tests into the aerospace sector",
      like: false,
      comments:''

    },
    {
      username: "Abhimanyu",
      usermail: "abhi@gmail.com",
      image: "p3.jpeg",
      desc: "Throughout computing history, there has not been a lone inventor or a single first computer. The invention of the computer was incremental, with dozens of scientists and mathematicians building on their predecessors. The modern computer, however, can be traced back to the 1930s.",
      comments:'',
      like: false,
    },
    {
      username: "Abhimanyu",
      usermail: "abhi@gmail.com",
      image: "p4.jpeg",
      desc: "The Creative Computing Curriculum, designed by the Creative Computing Lab at the Harvard Graduate School of Education, is a collection of ideas, strategies, and activities for an introductory creative computing experience using Scratch.",
      like: false,
      comments:''

    },
    {
      username: "Abhimanyu",
      usermail: "abhi@gmail.com",
      image: "p5.jpeg",
      desc: "Innovative educators realise the need to transit from offline learning to remote learning, which will help in the growth of the education sector. A progressive attitude will bring a change, says Dr Amrita Vohra, Director Education-Gems India & Executive Principal- GEMS International School, Gurgaon to Elets News Network (ENN).",
      like: false,
      comments:''

    },
    {
      username: "Rahul",
      usermail: "rahul@gmail.com",
      image: "p6.jpeg",
      desc: "You will discover the many different elements of brand strategy (brand purpose, values, positioning, differentiation, etc.) as well as how to run brand strategy workshops, how to sell brand strategy, brand strategy examples and much more.",
      like: false,
      comments:''

    },
  ]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/signup"
          element={<Signup signup={signup} setsignup={setsignup} />}
        />
        <Route
          path="/login"
          element={
            <Login
              signup={signup}
              setsignup={setsignup}
              login={login}
              setLogin={setLogin}
            />
          }
        />
        <Route
          path="/posts"
          element={
            <Posts postArr={postArr} setPostArr={setPostArr} login={login} />
          }
        />
      </Routes>
      {console.log("login" + login.name)}
    </div>
  );
}

export default App;
