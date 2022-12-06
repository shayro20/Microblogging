import React from "react";

const Tweet = ({post}) => {
  return (
    <div
      className="my-3 d-flex flex-column"
      style={{
        wordWrap: "break-word",
        backgroundColor: "#343A40",
        color: "#fff",
        borderRadius: "6px",
      }}
    >
      <div
        style={{color: "#6C757D"}}
        className="d-flex justify-content-between px-3 pt-3"
      >
        <span>{post.userName}</span>
        <span>{post.date}</span>
      </div>
      <p className="px-3 mt-1">{post.content}</p>
    </div>
  );
};
export default Tweet;
