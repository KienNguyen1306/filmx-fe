import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ArticleImage({ link }) {
  const [loaded, setLoaded] = useState(false);
  const { lists } = useSelector((state) => state.MOVIE.listMovie);

  const handleImageLoad = () => {
    setLoaded(true);
  };
  useEffect(()=>{
    handleImageLoad()
  },[lists])
  return (
    <>
      {!loaded && <div className="placeholder blur" />}
      <img
        className="image"
        src={link}
        alt="phim sex"
        style={{
          display: loaded ? "block" : "none",
        }}
        onLoad={handleImageLoad}
      />
    </>
  );
}

export default ArticleImage;
