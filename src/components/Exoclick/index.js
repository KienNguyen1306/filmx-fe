/* eslint-disable jsx-a11y/iframe-has-title */
function Exoclick({ link, width, height }) {
  return (
    <div className="ab">
      <iframe
        width={width}
        height={height}
        frameBorder={0}
        scrolling="no"
        src={link}
      />
    </div>
  );
}

export default Exoclick;
