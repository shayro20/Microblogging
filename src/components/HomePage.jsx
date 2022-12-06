import React from "react";
import FormCreate from "./Form";
import TweetList from "./TweetList";

const HomePage = ({addTweet, onOff, list, userName}) => {
  return (
    <div className="d-flex justify-content-center container">
      <div className="w-75">
        <FormCreate addTweet={addTweet} onOff={onOff} userName={userName} />
        <TweetList list={list} />
      </div>
    </div>
  );
};

export default HomePage;
