import { Link } from "react-router-dom";
import MainTitle from "../shared/MainTitle";

import "./ArticleBox.css";
import { useState } from "react";
function ArticleBox({ data, children, onClick, type }) {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(null);


  function handleShow() {
    setShow(!show);
  }

  function handleActive(index){
    setActive(index)
  }
  return (
    <div className="box">
      <div className="container">
        <MainTitle Icon size="smoll" isCon={show} onClick={handleShow}>
          {children}
        </MainTitle>
        <nav className={`box-list ${show ? "show" : ""}`}>
          <ul>
            {data.map((item) => {
              return (
                // <ArticleBoxItem item={item} onClick={onClick} type={type}/>
                <li
                  key={item.id}
                  className={`box-list-item ${active === item.id ? 'active':''} `}
                  onClick={() => {
                    onClick(type, item.id, item.name)
                    handleActive(item.id)
                  } }
                >
                  <Link to={`/caterogy/${item.id}?type=${item.name}`}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ArticleBox;
