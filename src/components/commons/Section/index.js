
import classes from "../../../styles/Section.module.scss";

export default function Section({ children, className }) {
  return (
    <section className={`${classes.section} ${className || ""}`}>{children}</section>
  );
}
