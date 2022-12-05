import React from "react";
import Tweet from "./Tweet";

const TweetList = ({tweetList}) => {
  return (
    <div className="mt-4">
      {tweetList.map((post) => {
        return <Tweet key={post.id} post={post} />;
      })}
    </div>
  );
};
export default TweetList;
