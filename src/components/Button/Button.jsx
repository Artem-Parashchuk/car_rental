import s from "./Button.module.css";

export const Button = ({
  text,
  width,
  handleClick,
  type = "submit",
  height = 44,
  padding = 12
}) => {
  return (
    <button
      type={type}
      className={s.btn}
      style={{ maxWidth: `${width}px`, height: `${height}px`, padding: `${padding}px` }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
