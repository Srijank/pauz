import "./Post.css";

import profileIcon from "../../assets/images/profile-icon.png";
import postSamplePic from "../../assets/images/post-sample-pic.png";
import Button from "../smallerComponents/Button";

const Post = () => {
  return (
    <div className="Post">
      <div className="post-header">
        <div className="user">
          <img src={profileIcon} alt="profile" />
          <p>username</p>
        </div>
        <p>{"date & time"}</p>
      </div>

      <div className="post-content">
        <p>Lorem Ipsum is simply dummy text of the printing and😆 typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.😁😎</p>
        <img src={postSamplePic} alt="post content" />
      </div>

      <div className="comment-section">
        <div className="comments">
          <div className="comment">
            <img src={profileIcon} />
            <div>
              <p>username <span>{"date & time"}</span></p>
              <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard. 😁😎</p>
            </div>
          </div>
          <div className="comment">
            <img src={profileIcon} />
            <div>
              <p>username <span>{"date & time"}</span></p>
              <p>Awesome! See you soon.❣😁😎</p>
            </div>
          </div>
        </div>
        <p>View all comments</p>
        <form>
          <img src={profileIcon} alt="profile" />
          <input type="text" placeholder="Write a Comment" />
          <Button className="primary">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Post;