
import VideoPlayer from "../shared/VideoPlayer";
import "./ArticleWatch.css";
function ArticleWatch({ linkVideo }) {

  return (
    <div className="watch">
      <div className="container">
        <div className="body">
          <VideoPlayer linkVideo={linkVideo} />
        </div>
      </div>
    </div>
  );
}

export default ArticleWatch;
