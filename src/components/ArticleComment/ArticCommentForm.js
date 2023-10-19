import userImg from "../../assets/image/user.png";
import Button from "../shared/Button";

function ArticCommentForm() {
    return <div className="form-comment-container">
    <div className="user-comment">
      <img src={userImg} alt="usercommet" />
    </div>
    <div className="form-comment">
      <input placeholder="Bình luận" required />
    </div>
    <Button>Bình luận</Button>
  </div>
}

export default ArticCommentForm;