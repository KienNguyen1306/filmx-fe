/* eslint-disable jsx-a11y/iframe-has-title */
function ArticleWatchIframe({ linkVideo }) {
  return (
    <div className="wapper1">
      <iframe
        className="iframe"
        src={linkVideo}
        frameBorder={0}
        width="640"
        height="360"
        allowFullScreen
        quality="hd720"
      />
    </div>
  );
}

export default ArticleWatchIframe;
