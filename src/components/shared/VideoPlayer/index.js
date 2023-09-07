import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css";
function VideoPlayer({ linkVideo }) {
  function encodeData(data) {
    return btoa(data); // Sử dụng hàm btoa() để mã hóa dữ liệu thành Base64
  }

  // Hàm giải mã
  function decodeData(encodedData) {
    return atob(encodedData); // Sử dụng hàm atob() để giải mã dữ liệu từ Base64
  }

  const encodedVideoData = encodeData(linkVideo);

  // Giải mã nội dung video (sử dụng encodedVideoData)
  const decodedVideoData = decodeData(encodedVideoData);

  const videoConfig = {
    file: {
      attributes: {
        controlsList: "nodownload", // Ngăn người dùng tải xuống video
      },
      tracks: [], // Danh sách các subtitle track nếu có
      quality: {
        default: true, // Chất lượng mặc định
        options: [
          "auto",
          "720p", // Các tùy chọn chất lượng
          "480p",
          "360p",
        ],
      },
    },
  };

  return (
    <div>
      <ReactPlayer
        className="VideoPlayer"
        url={decodedVideoData}
        controls={true}
        config={videoConfig}
        playbackRate={1}
      />
    </div>
  );
}

export default VideoPlayer;
