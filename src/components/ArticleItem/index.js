import { useNavigate } from "react-router-dom";

import "./ArticleItem.css";
function ArticleItem({ data }) {
  const navigate = useNavigate();
  function handlewatch() {
    navigate(`/watch/${data.id}`);
  }
  return (
    <div className="item" onClick={handlewatch}>
      <img className="image" src={data.imageUrl} alt="sda" />
      <span className="genre">{data.Country.name}</span>
      <p className="name line-clamp">{data.name}</p>
    </div>
  );
}

export default ArticleItem;
