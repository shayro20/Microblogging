import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TextareaAutosize from "react-textarea-autosize";
import {nanoid} from "nanoid";

const FormCreate = ({addTweet, onOff, userName}) => {
  const [tweetInput, setTweetInput] = useState("");
  console.log(userName);
  const handleTextChange = (e) => {
    setTweetInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const changeDate = date.toISOString();
    addTweet({
      content: tweetInput,
      date: changeDate,
      userName,
      id: nanoid(),
    });
  };
  return (
    <Form
      className="mt-5"
      style={{border: "3px solid white", borderRadius: "5px"}}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <TextareaAutosize
          maxLength={141}
          onChange={handleTextChange}
          className="my-2 mx-3"
          minRows={4}
          placeholder="What you have in mind"
          style={{
            backgroundColor: "#15202B",
            color: "#fff",
            border: "none",
            outline: "none",
            width: "-webkit-fill-available",
            resize: "none",
          }}
        />
      </Form.Group>
      <div className="d-flex justify-content-between align-items-center mb-3 me-3">
        <div>
          {tweetInput.length > 140 && (
            <div className="alert alert-danger p-1 m-0 ms-3" role="alert">
              The tweet can't contain more then 140 chars.
            </div>
          )}
        </div>
        <div hidden={!onOff} className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>
          <Button
            disabled={onOff || tweetInput.length > 140 ? true : false}
            className=""
            variant="primary"
            type="submit"
          >
            Tweet
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default FormCreate;
