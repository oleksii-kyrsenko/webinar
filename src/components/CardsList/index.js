import { v4 as uuid } from "uuid";
import classes from "../../styles/CardsList.module.scss";
import Card from "../Card";

export default function CardsList({ data }) {
  return (
    <ul className={classes["cards-list"]}>
      {data.map(({ image, title, text }) => (
        <li key={uuid()} className={classes["cards-list__item"]}>
          <Card  image={image} title={title} text={text} />
        </li>
      ))}
    </ul>
  );
}
