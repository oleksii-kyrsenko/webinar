/* eslint-disable no-loop-func */
import classes from "../../styles/LearnList.module.scss";
import LearnItem from "../LearnItem";
import { v4 as uuid } from "uuid";

export default function LearnList({ list }) {

  return (
    <ul className={classes.list}>
      {list.map(({ title }) => (
        <LearnItem key={uuid()} title={title} />
      ))}
    </ul>
  );
}
