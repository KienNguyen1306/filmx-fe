import { useDispatch, useSelector } from "react-redux";
import ArticleMovie from "../components/ArticleMovie";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { actFetchMovieSearchAsync } from "../store/movie/action";
import Button from "../components/shared/Button";

function SearchPage() {
  const location = useLocation();
  const { lists, currenPage, totalpages } = useSelector(
    (state) => state.MOVIE.movieSearch
  );
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchMovieSearchAsync({ q: q }));
  }, [q]);

  function handleSeemore() {
    dispatch(actFetchMovieSearchAsync({ q: q, page: currenPage + 1 }));
  }
  return (
    <div className="list_movie">
      <ArticleMovie data={lists} />
      <div className="load_more">
        {currenPage !== totalpages && (
          <Button onClick={handleSeemore}>xem thêm</Button>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
