import { useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import Loading from "../shared/Loading";
import MainTitle from "../shared/MainTitle";

import "./ArticleMovie.css";

function ArticleMovie({ data }) {
  const { title } = useSelector((state) => state.MOVIE.type);
  const { loading } = useSelector((state) => state.MOVIE.listMovie);

  if (loading) {
    return (
      <div className="list_movie">
        <div className="container">
          <MainTitle>{title}</MainTitle>
          <div className="movie">
            <div className="no_movie">
              <Loading />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // if (data.length === 0) {
  //   return (
  //     <div className="list_movie">
  //       <div className="container">
  //         <MainTitle>{title}</MainTitle>
  //         <div className="movie">
  //           <div className="no_movie">Không có video</div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="list_movie">
      <div className="container">
        <MainTitle>{title}</MainTitle>
        {data.length === 0 ? (
          <div className="movie">
            <div className="no_movie">Không có video</div>
          </div>
        ) : (
          <div className="body">
            {data.map((item) => {
              return <ArticleItem key={item.id} data={item} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleMovie;
