import { Link } from "react-router-dom";
import { GrFormView } from "react-icons/gr";
import "./ArticleItem.css";
import MovieService from "../../services/movieServices";
import ArticleImage from "../ArticleImage";
function ArticleItem({ data, highlightSearch }) {
  function handlewatch() {
    MovieService.postViewMovie(data.id);
  }
  
  return (
    <Link to={`/watch/${data.id}`} className="item" onClick={handlewatch}>
      <ArticleImage link={data.imageUrl}/>
     {data?.Country?.name && <span className="genre">{data?.Country?.name}</span>}
      <span className="view">
        {data.view} <GrFormView className="icon" />
      </span>
      {highlightSearch ? (
        <p
          className="name line-clamp"
          dangerouslySetInnerHTML={{ __html: highlightSearch(data.name) }}
        />
      ) : (
        <p
          className="name line-clamp"
        >
          {data.name}
        </p>
      )}
    </Link>
  );
}

export default ArticleItem;
