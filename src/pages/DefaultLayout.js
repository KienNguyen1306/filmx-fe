/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleBox from "../components/ArticleBox";
import ArticleHagtab from "../components/ArticleHagtab";
import Footer from "../components/footer";
import Header from "../components/header";
import { actFetchAllMovieTopViewAsync, setProductType, setReload } from "../store/movie/action";

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
      behavior: "smooth", // Sử dụng hiệu ứng cuộn mượt
    });
  }

  useEffect(()=>{
    dispatch(actFetchAllMovieTopViewAsync())
  },[])
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
        <a className="link-home" href="https://www.filmsexhd.com">
          Xem phim tại FilmsexHD
        </a>
      </div>
      {/* <Exoclick
        link="//tsyndicate.com/iframes2/a6c5bc7362be45069200e8c3361729e6.html?extid={extid}"
        width={300}
        height={250}
      /> */}
      {children}
      {/* <Exoclick
        link="//tsyndicate.com/iframes2/66ff6025d14f42608105d36d1cedde0f.html?extid={extid}"
        width={900}
        height={250}
      /> */}
      {/* <Exoclick link='//a.magsrv.com/iframe.php?idzone=5112200&size=728x90' width={728} height={90}/> */}
      <ArticleHagtab />
      {/* <Exoclick link='//a.magsrv.com/iframe.php?idzone=5112202&size=900x250' width={900} height={250}/> */}
      <Footer />
    </main>
  );
}

export default DefaultLayout;
