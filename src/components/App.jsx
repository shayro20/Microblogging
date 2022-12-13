import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import "../styling/NavBarStyle.css";
import "../styling/AppStyling.css";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BlogContext from "../libs/BlogContext";
import db from "../libs/firebase";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import UserForm from "./UserForm";
import {auth} from "../libs/firebase";
import PrivateRoute from "./PrivateRoute";
import {onAuthStateChanged} from "firebase/auth";

const App = () => {
  const [myName, setMyName] = useState("");
  const [tweetList, setTweetList] = useState([]);
  const [onOff, setOnOff] = useState(false);
  const [error, setError] = useState(true);
  const [ready, setReady] = useState(false);
  const [isId, setIsId] = useState("");

  const fetchUserName = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setMyName(docSnap.data().userName);
    } else {
      console.log("No such document!");
    }
  };

  const saveUser = (userName) => {
    const obj = {
      userName: userName,
      profilePic: "check",
    };
    setDoc(doc(db, "users", auth.currentUser.uid), obj);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsId(auth.currentUser.uid);
      }
      setReady(true);
    });
  }, []);
  const addTweet = async (newTweet) => {
    setError(true);
    setOnOff(true);
    try {
      await addDoc(collection(db, "tweets"), {
        content: newTweet.content,
        date: newTweet.date,
        id: isId,
      });
    } catch (error) {
      setError(false);
      console.log(error);
    }
    setOnOff(false);
  };
  const getTweet = async () => {
    try {
      let res = [];
      db.collection("tweets")
        .orderBy("date", "desc")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            res.push({id: doc.id, ...doc.data()});
            setTweetList(res, ...tweetList);
          });
        });
      setError(true);
    } catch (error) {
      setError(false);
      console.log(error);
    }
    setOnOff(false);
  };

  useEffect(() => {
    setOnOff(true);
    getTweet();
    fetchUserName();
    setInterval(() => {
      getTweet();
    }, 10000);
  }, []);

  const getMyUserName = (myUser) => {
    // setMyName(myUser);
    saveUser(myUser);
  };

  return (
    <div>
      {ready && (
        <BlogContext.Provider
          value={{
            onOff,
            addTweet,
            tweetList,
            myName,
            getMyUserName,
            error,
            isUser: ready,
            saveUser,
            isId,
            fetchUserName,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="Log" element={<UserForm />}></Route>

              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <NavBar />
                  </PrivateRoute>
                }
              >
                <Route index element={<HomePage />} />
                <Route path="profile" element={<UserPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BlogContext.Provider>
      )}
    </div>
  );
};

export default App;
