import { useDispatch, useSelector } from "react-redux";
import ArticleBox from "../components/ArticleBox";
import Footer from "../components/footer";
import Header from "../components/header";
import { setProductType } from "../store/movie/action";

function DefaultLayout({ children }) {
  let genreData = useSelector((state) => state.GENRE.genre);
  let countryData = useSelector((state) => state.COUNTRY.country);
  let actorData = useSelector((state) => state.ACTOR.actor);

  const dispatch = useDispatch();
  function handleSetType(type, id, title) {
    dispatch(setProductType(type, id, title));
  }
  return (
    <div className="app">
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
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
