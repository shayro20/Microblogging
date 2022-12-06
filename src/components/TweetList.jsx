import React from "react";
import Tweet from "./Tweet";

const TweetList = ({list}) => {
  return (
    <div className="mt-4">
      {list.map((post) => {
        return <Tweet key={post.id} post={post} />;
      })}
    </div>
  );
};
export default TweetList;
