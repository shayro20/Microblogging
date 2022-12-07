import React from "react";
import FormCreate from "./Form";
import TweetList from "./TweetList";


const HomePage = () => {

  return (
    <div className="d-flex justify-content-center container">
      <div className="w-75">
        <FormCreate />
        <TweetList />
      </div>
    </div>
  );
};

export default HomePage;
