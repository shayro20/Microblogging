import {React, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const UserPage = ({getMyUserName}) => {
  const [userName, setUserName] = useState("");
  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmitt = (e) => {
    e.preventDefault();
    getMyUserName(userName);
  };
  return (
    <div
      className="mt-5"
      style={{color: "white", paddingRight: "10%", width: "50%"}}
    >
      <h1>Profile</h1>
      <Form.Label>User Name</Form.Label>
      <Form onSubmit={handleSubmitt}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Control
            onChange={handleChange}
            className="inputstyle"
            style={{color: "#fff", backgroundColor: "#15202b"}}
            type="text"
          />
        </Form.Group>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="primary" type="submit">
            save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UserPage;
