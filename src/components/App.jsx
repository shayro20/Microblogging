import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import "../styling/NavBarStyle.css";
import "../styling/AppStyling.css";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  const [myName, setMyName] = useState(() => {
    const user = localStorage.getItem("name");
    return user;
  });

  const url =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";
  const [onOff, setOnOff] = useState(false);
  const [tweetList, setTweetList] = useState([]);
  const addTweet = async (newTweet) => {
    await setOnOff(true);
    try {
      await axios.post(url, newTweet);
    } catch (error) {
      console.log(error);
    }
    getTweet();
  };
  const getTweet = async () => {
    try {
      const response = await axios.get(url);
      setTweetList(response.data.tweets);
    } catch (error) {
      console.log(error);
    }
    setOnOff(false);
  };

  useEffect(() => {
    console.log("called");
    setOnOff(true);
    getTweet();
  }, []);
  const getMyUserName = (myUser) => {
    setMyName(myUser);
    localStorage.setItem("name", myUser);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route
            index
            element={
              <HomePage
                addTweet={addTweet}
                onOff={onOff}
                list={tweetList}
                userName={myName}
              />
            }
          />
          <Route
            path="profile"
            element={<UserPage getMyUserName={getMyUserName} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
