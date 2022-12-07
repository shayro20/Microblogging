import React, {useContext} from "react";
import Tweet from "./Tweet";
import BlogContext from "../libs/BlogContext";
const TweetList = () => {
  const {tweetList} = useContext(BlogContext);
  return (
    <div className="mt-4">
      {tweetList.map((post) => {
        return <Tweet key={post.id} post={post} />;
      })}
    </div>
  );
};
export default TweetList;
