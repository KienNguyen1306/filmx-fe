import userImg from "../../assets/image/user.png";

function ArticleCommentItem() {
  return (
    <div className="content">
      <div className="user-comment">
        <img src={userImg} alt="user" />
      </div>
      <div className="comment-content">
        <p className="name-user">KHách</p>
        <p className="comment-ti">
          noikshđfjdshfkjdshfkjsdhfjhsmnbfjhgfjdsdgfhj
        </p>
      </div>
    </div>
  );
}

export default ArticleCommentItem;
