import React, {useContext} from "react";
import Tweet from "./Tweet";
import BlogContext from "../libs/BlogContext";
import {nanoid} from "nanoid";
import {auth} from "../libs/firebase";

const TweetList = () => {
  const {tweetList, myName} = useContext(BlogContext);

  return (
    <div className="mt-4">
      {tweetList.map((post) => {
        return (
          <Tweet
            key={nanoid()}
            post={post}
            newuserName={post.id === auth.currentUser.uid ? myName : ""}
          />
        );
      })}
    </div>
  );
};
export default TweetList;
