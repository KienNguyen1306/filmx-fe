import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ArticleMovie from "../components/ArticleMovie";
import Button from "../components/shared/Button";
import { actFetchAllMovieAsync, setReload } from "../store/movie/action";

function CaterogyPage() {
  const { lists } = useSelector((state) => state.MOVIE.listMovie);
  const { name, id } = useSelector((state) => state.MOVIE.type);
  const reload = useSelector((state) => state.MOVIE.reload);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");

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
  }, [name, id, loading, dispatch]);

  return (
    <>
      <Helmet>
        <title>{type}</title>
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
    </>
  );
}

export default CaterogyPage;
