import React, {useState} from "react";
import FormCreate from "./Form";
import "../styling/AppStyling.css";
import TweetList from "./TweetList";

const App = () => {
  const [tweetList, setTweetList] = useState(() => {
    const cookie = JSON.parse(localStorage.getItem("tweetList"));
    return cookie || [];
  });
  const addTweet = (newTweet) => {
    console.log(newTweet);
    const tweetCreate = [newTweet, ...tweetList];
    setTweetList(tweetCreate);
    cookies(tweetCreate);
  };
  const cookies = (tweetCreate) => {
    localStorage.setItem("tweetList", JSON.stringify(tweetCreate));
    console.log(tweetCreate);
  };
  return (
    <div className="d-flex justify-content-center container">
      <div className="w-75">
        <FormCreate addTweet={addTweet} />
        <TweetList tweetList={tweetList} />
      </div>
    </div>
  );
};

export default App;
