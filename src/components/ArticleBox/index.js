import { Link } from "react-router-dom";
import MainTitle from "../shared/MainTitle";

import "./ArticleBox.css";
import { useState } from "react";
function ArticleBox({ data, children, onClick, type }) {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="box">
      <div className="container">
        <MainTitle Icon size="smoll" isCon={show} onClick={handleShow}>
          {children}
        </MainTitle>
        <div className={`box-list ${show ? "show" : ""}`}>
          <ul>
            {data.map((item) => {
              return (
                <li
                  key={item.id}
                  className="box-list-item"
                  onClick={() => onClick(type, item.id, item.name)}
                >
                  <Link to="/">{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ArticleBox;
