/* eslint-disable jsx-a11y/iframe-has-title */
function Exoclick({ link, width, height }) {
  return (
    <div className="ab">
      <iframe
        src={link}
        width={width}
        height={height}
        scrolling="no"
        marginWidth={0}
        marginHeight={0}
        frameBorder={0}
      />
    </div>
  );
}

export default Exoclick;
