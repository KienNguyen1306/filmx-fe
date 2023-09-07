import "./button.css";
import cls from "classnames";

function Button({
  type = "default",
  loading,
  loadingPos = "left",
  size,
  as = "button",
  htmlType,
  className,
  children,
  ...restProps
}) {
  const classes = cls(
    "btn",
    {
      "btn-default": type === "default",
      "btn-category": type === "category",
      "btn-primary": type === "primary",
      "btn-size-large": size === "large",
    },
    className
  );

  const injectedProps = {
    className: classes,
    type: htmlType,
    ...restProps,
  };

  if (as === "a") {
    return <a {...injectedProps}>{children}</a>;
  }

  return <button {...injectedProps}>{children}</button>;
}

export default Button;
