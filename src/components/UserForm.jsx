import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useState} from "react";
import {auth, provider} from "../libs/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {useNavigate} from "react-router-dom";

function SignUp() {
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState({email: "", password: ""});
  const [error, setError] = useState({when: false, text: ""});
  const [form, setForm] = useState(true);

  const changeForm = (e) => {
    e.preventDefault();
    setForm(!form);
  };

  const handleChange = (e) => {
    setUserInfo({...userInfo, [e.target.name]: e.target.value});
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError({when: false, text: ""});
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        nav("/");
      })
      .catch((err) => setError({when: true, text: err.message}));
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    setError({when: false, text: ""});
    signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        nav("/");
      })
      .catch((err) => setError({when: true, text: err.message}));
  };

  return (
    <div className="d-flex align-items-center flex-column flex-wrap">
      <div className="mt-5 w-50">
        <h1 style={{color: "#fff", marginBottom: "10%"}}>
          {form ? "Sign-Up" : "Log-In"}
        </h1>
        <Form
          onSubmit={form ? handleSignUp : handleLogIn}
          className="user-form"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className="d-flex justify-content-between mt-3 py-2">
            <Button variant="primary" type="submit">
              {form ? "SignUp" : "LogIn"}
            </Button>
            <Button
              onClick={async () => {
                await signInWithPopup(auth, provider);
                nav("/");
              }}
            >
              Google
            </Button>
            <Button onClick={changeForm} variant="secondary" type="submit">
              {form ? "Change to LogIn" : "Change to SignUp"}
            </Button>
          </div>
          <div className="d-flex justify-content-center mt-3 py-2 fs-5 text-danger">
            {form ? error.text : error.text}
          </div>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
