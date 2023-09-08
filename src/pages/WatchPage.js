import { useEffect } from "react";
import ArticleMovie from "../components/ArticleMovie";
import ArticleWatch from "../components/ArticleWatch";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchMovieDetailAsync,
  actFetchMovieRelateAsync,
} from "../store/movie/action";
function WatchPage() {
  let { movieID } = useParams();
  const dispatch = useDispatch();
  let relateData = useSelector((state) => state.MOVIE.movieRelate);
  let movieDetail = useSelector((state) => state.MOVIE.movieDetail);

  console.log("movieID", movieID);
  useEffect(() => {
    dispatch(actFetchMovieDetailAsync(movieID));
    dispatch(actFetchMovieRelateAsync(movieID));
  }, [dispatch, movieID]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [movieID]);

  return (
    <div>
      <ArticleWatch linkVideo={movieDetail.videoUrl} />
      <ArticleMovie data={relateData} title="Phim liên quan" />
    </div>
  );
}

export default WatchPage;
