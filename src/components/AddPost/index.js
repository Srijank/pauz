import "./AddPost.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { showAlert, startLoading, stopLoading } from "../../actions/index";
import { connect } from "react-redux";
import axios from "axios";

import Button from "../smallerComponents/Button";
import AppNavbar from "../smallerComponents/AppNavbar";

const mapDispatchToProps = {
  startLoading: startLoading,
  stopLoading: stopLoading,
  showAlert: showAlert,
};

const AddPost = (props) => {
  const [caption, setCaption] = useState("");

  const [img, setImg] = useState("");

  const [url, setUrl] = useState("");

  const handleInputChange = (e) => {
    setCaption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.startLoading();

    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "pauz-images");
    data.append("cloud_name", "yuvrajhere");

    fetch("https://api.cloudinary.com/v1_1/yuvrajhere/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });

    const postDetails = {
      caption: caption,
      imgUrl: url || "",
    };

    axios
      // .post(`${process.env.REACT_APP_API_URL}/users/`, postDetails)
      .post(`http://localhost:5000/api/posts/`, postDetails, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setCaption("");
        props.stopLoading();
        props.showAlert(res.data.message);
      })
      .catch((error) => {
        props.stopLoading();
        if (error.response) {
          props.showAlert(error.response.data.message);
        } else {
          props.showAlert(
            error.message + ", Please try again after some time!"
          );
        }
      });
  };

  return (
    <div className="AddPost container-1">
      <AppNavbar />
      <main className="container-2">
        <h2>Add Post</h2>
        <p>Let your connections know what you are upto</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="caption">Caption</label>

            <textarea
              id="caption"
              name="caption"
              placeholder="Enter Caption here"
              value={caption}
              onChange={handleInputChange}
              maxLength="150"
            ></textarea>
            <div>
              <label htmlFor="img">Image</label>
              <input
                type="file"
                id="img"
                name="img"
                onChange={(e) => {
                  setImg(e.target.files[0]);
                }}
                accept=".jpg"
              />
            </div>
          </div>
          <Button className="primary">Upload</Button>
        </form>
      </main>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(AddPost);
