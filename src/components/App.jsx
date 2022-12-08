import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import "../styling/NavBarStyle.css";
import "../styling/AppStyling.css";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BlogContext from "../libs/BlogContext";

const App = () => {
  const url =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";
  const [myName, setMyName] = useState(() => {
    const user = localStorage.getItem("name");
    return user;
  });
  const [onOff, setOnOff] = useState(false);
  const [tweetList, setTweetList] = useState([]);
  const [error, setError]=useState(true)

  const addTweet = async (newTweet) => {
    setError(true)
    setOnOff(true);
    try {
      await axios.post(url, newTweet);
      const posts = [newTweet, ...tweetList];
      setTweetList(posts);
    } catch (error) {
      setError(false)
      console.log(error);
    }
    setOnOff(false);
  };
  const getTweet = async () => {
    try {
      const response = await axios.get(url);
      setTweetList(response.data.tweets);
      setError(true)
    } catch (error) {
      setError(false)
      console.log(error);
    }
    setOnOff(false);
  };

  useEffect(() => {
    setOnOff(true);
    getTweet();
    setInterval(() => {
      getTweet();
    }, 10000);
  }, []);
  const getMyUserName = (myUser) => {
    setMyName(myUser);
    localStorage.setItem("name", myUser);
  };

  return (
    <BlogContext.Provider
      value={{onOff, addTweet, tweetList, myName, getMyUserName,error}}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="profile" element={<UserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogContext.Provider>
  );
};

export default App;
