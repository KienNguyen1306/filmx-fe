/* eslint-disable jsx-a11y/iframe-has-title */
import { useDispatch, useSelector } from "react-redux";
import ArticleBox from "../components/ArticleBox";
import Footer from "../components/footer";
import Header from "../components/header";
import { setProductType, setReload } from "../store/movie/action";
import Exoclick from "../components/Exoclick";
import ArticleHagtab from "../components/ArticleHagtab";

function DefaultLayout({ children }) {
  let genreData = useSelector((state) => state.GENRE.genre);
  let countryData = useSelector((state) => state.COUNTRY.country);
  let actorData = useSelector((state) => state.ACTOR.actor);

  const dispatch = useDispatch();
  function handleSetType(type, id, title) {
    dispatch(setReload(0));
    dispatch(setProductType(type, id, title));
    window.scrollBy({
      top: 250, // Cuộn xuống 40px
      behavior: "smooth" // Sử dụng hiệu ứng cuộn mượt
  });
  }
  return (
    <main className="app">
      <Header />
      <ArticleBox data={genreData} onClick={handleSetType} type="genre">
        Thể loại
      </ArticleBox>
      <ArticleBox data={countryData} onClick={handleSetType} type="country">
        Quốc gia
      </ArticleBox>
      <ArticleBox data={actorData} onClick={handleSetType} type="actor">
        Diễn viên
      </ArticleBox>
      <div className="container">
        <h1 className="h1">
          Phim Sex, Phim Sex Tuyển Chọn Mới Nhất 2023 - Filmsexhd
        </h1>
        <a className="link-home" href="https://www.filmsexhd.com">Xem phim tại FilmsexHD</a>
      </div>
      <Exoclick link="//a.magsrv.com/iframe.php?idzone=5095052&size=900x250" width={900} height={250}/>
      {children}
      <Exoclick link='//a.magsrv.com/iframe.php?idzone=5095034&size=300x250' width={300} height={250}/>
      <ArticleHagtab/>
      <Footer />
    </main>
  );
}

export default DefaultLayout;
