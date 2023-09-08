import { useDispatch, useSelector } from "react-redux";
import ArticleMovie from "../components/ArticleMovie";
import { actFetchAllMovieAsync } from "../store/movie/action";
import Button from "../components/shared/Button";
import { useEffect } from "react";
function HomePage() {
  const { lists } = useSelector((state) => state.MOVIE.listMovie);
  const { name, id } = useSelector((state) => state.MOVIE.type);
  const { currenPage, totalpages, loading } = useSelector(
    (state) => state.MOVIE.listMovie
  );
  const dispatch = useDispatch();

  function handleSeemore() {
    dispatch(actFetchAllMovieAsync({ page: currenPage + 1, type: name, id }));
  }

  useEffect(() => {
    dispatch(actFetchAllMovieAsync({ type: name, id }));
  }, [name, id, loading, dispatch]);

  return (
    <div className="list_movie">
      <ArticleMovie data={lists} title="Phim mới cập nhập" />
      <div className="load_more">
        {lists.length !== 0 && (
          <>
            {currenPage !== totalpages && (
              <Button onClick={handleSeemore}>xem thêm</Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default HomePage;
