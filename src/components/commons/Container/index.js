import classes from "../../../styles/Container.module.scss";

export default function Container({ children }) {
  return <div className={classes.container}>{children}</div>;
}
