import { useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import Loading from "../shared/Loading";
import MainTitle from "../shared/MainTitle";

import "./ArticleMovie.css";

function ArticleMovie({ data, loading, highlightSearch, heading }) {
  const { title } = useSelector((state) => state.MOVIE.type);
  if (loading) {
    return (
      <div className="list_movie">
        <div className="container">
        <MainTitle>{heading===undefined?title:heading}</MainTitle>
          <div className="movie">
            <div className="no_movie">
              <Loading />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="list_movie">
      <div className="container">
        <MainTitle>{heading===undefined?title:heading}</MainTitle>
        {data.length === 0 ? (
          <div className="movie">
            <div className="no_movie">Không có video</div>
          </div>
        ) : (
          <div className="body">
            {data.map((item) => {
              return (
                <ArticleItem
                  key={item.id}
                  data={item}
                  highlightSearch={highlightSearch}
                  heading
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleMovie;
