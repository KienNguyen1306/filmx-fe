import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import ArticleMovie from "../components/ArticleMovie";
import Button from "../components/shared/Button";
import { actFetchAllMovieAsync, setReload } from "../store/movie/action";

function HomePage() {
  const { lists } = useSelector((state) => state.MOVIE.listMovie);
  const {lists:listsTop} = useSelector((state) => state.MOVIE.listMovieTopView);

  const { name, id } = useSelector((state) => state.MOVIE.type);
  const reload = useSelector((state) => state.MOVIE.reload);

  const [loadingMore, setLoadingMore] = useState(false);

  const { currenPage, totalpages, loading } = useSelector(
    (state) => state.MOVIE.listMovie
  );
  const dispatch = useDispatch();

  function handleSeemore() {
    setLoadingMore(true);
    dispatch(setReload(1));
    dispatch(
      actFetchAllMovieAsync({ page: currenPage + 1, type: name, id })
    ).then(() => {
      setLoadingMore(false);
    });
  }

  useEffect(() => {
    if (reload === 0) {
      dispatch(actFetchAllMovieAsync({ type: name, id }));
    }
  }, [name, id, loading, dispatch,reload]);

  return (
    <>
      <Helmet>
        <title>
        Phim Sex, Phim Sex Tuyển Chọn Mới Nhất 2023 - filmsexhd.com
        </title>
        <link rel="canonical" href="https://filmsexhd.com" />
      </Helmet>
      <article className="list_movie">
        <ArticleMovie data={lists} loading={loading} />
        <div className="load_more">
          {lists.length !== 0 && (
            <>
              {currenPage !== totalpages && (
                <Button onClick={handleSeemore}>
                  {loadingMore ? "Loading..." : "Xem thêm"}
                </Button>
              )}
            </>
          )}
        </div>
      </article>
      <article className="list_movie">
        <ArticleMovie data={listsTop} loading={loading} heading='Top phim hay'/>
      </article>
    </>
  );
}

export default HomePage;
