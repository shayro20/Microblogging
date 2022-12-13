import React, {useContext, useState} from "react";
import BlogContext from "../libs/BlogContext";
import {
  collection,
  addDoc,
  orderBy,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import {auth} from "../libs/firebase";
import db from "../libs/firebase";

const Tweet = ({post}) => {
  const [user, setUser] = useState("");
  const checkId = async () => {
    const docRef = doc(db, "users", post.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data().userName);
    } else {
      console.log("No such document!");
    }
  };
  checkId();

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
        <span className="tweetStyle">{user}</span>
        <span className="tweetStyle">{post.date}</span>
      </div>
      <p className="px-3 mt-1">{post.content}</p>
    </div>
  );
};
export default Tweet;
