import { useEffect } from "react";
import ArticleMovie from "../components/ArticleMovie";
import ArticleWatch from "../components/ArticleWatch";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchMovieDetailAsync,
  actFetchMovieRelateAsync,
} from "../store/movie/action";
import ArticleComment from "../components/ArticleComment";
import { Helmet } from "react-helmet";
function WatchPage() {
  let { movieID } = useParams();
  const dispatch = useDispatch();
  let relateData = useSelector((state) => state.MOVIE.movieRelate);
  let movieDetail = useSelector((state) => state.MOVIE.movieDetail);
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

console.log('relateData',relateData)
  return (
    <>
      <Helmet>
        <title>{movieDetail?.name}</title>
        <link rel="canonical" href={`https://filmsexhd.com/watch/${movieDetail.id}`} />

      </Helmet>
      <article className="watch-container">
        <ArticleWatch data={movieDetail} />
        {/* <ArticleComment/> */}
        {relateData.length > 0 && <ArticleMovie data={relateData} title="Phim liên quan" />}
        
      </article>
    </>
  );
}

export default WatchPage;
