import classes from "../../styles/Card.module.scss";

export default function Card({ image, title }) {
  return (
    <div className={classes.card}>
      <div className={classes.card__image}>
        <img src={image} alt={title} />
      </div>
      <h3 className={classes.card__title}>
        {title}
      </h3>
    </div>
  );
}
