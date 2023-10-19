import { useState } from "react";
import ArticCommentForm from "./ArticCommentForm";
import "./ArticleComment.css";

import ArticleCommentItem from "./ArticleCommentItem";
import Button from "../shared/Button";
function ArticleComment() {
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }
  return (
    <article className="comments">
      <div className="container">
        <div className="body">
          <ArticCommentForm />
          <div className="list-comment-container">
            <span className="total-comment">25 bình luận</span>
            <ul className="list-comment">
              <li>
                <ArticleCommentItem />
                <p className="rely" onClick={handleShowForm}>
                  Trả lời
                </p>
                {showForm && <ArticCommentForm />}
                <div className="rely-comment">
                  <ArticleCommentItem />
                </div>
              </li>
              <li>
                <ArticleCommentItem />
              </li>
              <li>
                <ArticleCommentItem />
              </li>
              <li>
                <ArticleCommentItem />
              </li>
              <li>
                <ArticleCommentItem />
              </li>
            </ul>
            <Button>Xem them 6 bình luận</Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleComment;
