import { useDispatch, useSelector } from "react-redux";
import ArticleMovie from "../components/ArticleMovie";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { actFetchMovieSearchAsync } from "../store/movie/action";
import Button from "../components/shared/Button";
import { Helmet } from "react-helmet";

function SearchPage() {
  const location = useLocation();
  const { lists, currenPage, totalpages, loading, check } = useSelector(
    (state) => state.MOVIE.movieSearch
  );
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchMovieSearchAsync({ q: q, check: currenPage }));
  }, [q]);

  function handleSeemore() {
    dispatch(
      actFetchMovieSearchAsync({ q: q, page: check + 1, check: check + 1 })
    );
  }

  const highlightSearch = (text) => {
    const regex = new RegExp(`(${q})`, "gi"); // phân biệt hoa thường
    return text.replace(regex, "<mark>$1</mark>"); // tìm kiếm thay thế
  };
  return (
    <>
      <Helmet>
        <title>{`Trang search ${q}`}</title>
        <link rel="canonical" href={`https://filmsexhd.com/search?q=${q}`} />
      </Helmet>
      <article className="list_movie">
        <ArticleMovie
          data={lists}
          loading={loading}
          highlightSearch={highlightSearch}
        />
        <div className="load_more">
          {currenPage !== totalpages && (
            <Button onClick={handleSeemore}>xem thêm</Button>
          )}
        </div>
      </article>
    </>
  );
}

export default SearchPage;
