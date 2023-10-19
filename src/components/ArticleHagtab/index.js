import { hagtab } from "../../assets/data/index";

import "./ArticleHagtab.css";
function ArticleHagtab() {
  return (
    <article className="habtag">
      <div className="container">
        <ul className="habtag-list">
          {hagtab.map((item, index) => {
            return (
              <li key={index} className="habtab-item">
                <strong>{item}</strong>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}

export default ArticleHagtab;
