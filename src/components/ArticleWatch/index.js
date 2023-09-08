import { useEffect, useState } from "react";
import VideoPlayer from "../shared/VideoPlayer";
import "./ArticleWatch.css";
function ArticleWatch({ linkVideo }) {
  const [videoBlobURL, setVideoBlobURL] = useState(null);
  useEffect(() => {
    // Hàm tải video và tạo Blob URL
    async function loadVideo() {
      try {
        // Tải video từ URL
        const response = await fetch(linkVideo);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch video: ${response.status} ${response.statusText}`
          );
        }
        const videoBlob = await response.blob();
        const blobURL = URL.createObjectURL(videoBlob);
        setVideoBlobURL(blobURL);
      } catch (error) {
        console.error("Error loading video:", error);
      }
    }
    loadVideo();
    return () => {
      if (videoBlobURL) {
        URL.revokeObjectURL(videoBlobURL);
      }
    };
  }, [linkVideo]);

  return (
    <div className="watch">
      <div className="container">
        <div className="body">
          <VideoPlayer linkVideo={videoBlobURL} />
        </div>
      </div>
    </div>
  );
}

export default ArticleWatch;
