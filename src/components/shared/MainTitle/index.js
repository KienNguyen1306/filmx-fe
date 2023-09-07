import "./main-title.css";
import cls from "classnames";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
function MainTitle({
  children,
  btnLabel,
  type = "",
  size,
  Icon = false,
  isCon,
  ...restProps
}) {
  const classes = cls("main-title spacing", {
    "main-title__search": type === "search",
    "main-title-smoll": size === "smoll",
    "d-flex tcl-jc-between tcl-ais-center": btnLabel,
  });

  const injectedProps = {
    className: classes,
    ...restProps,
  };

  return (
    <div {...injectedProps}>
      <h2>{children}</h2>
      {Icon && (
        <>
          {isCon ? (
            <AiFillCaretUp className="icon_dow" />
          ) : (
            <AiFillCaretDown className="icon_dow" />
          )}
        </>
      )}
    </div>
  );
}

export default MainTitle;
