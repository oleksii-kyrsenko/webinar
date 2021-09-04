
import classes from "../../../styles/Title.module.scss";

export default function Title({ text, className }) {
  return (
    <h2 className={`${classes.title} ${className || ""}`}>{text}</h2>
  );
}
