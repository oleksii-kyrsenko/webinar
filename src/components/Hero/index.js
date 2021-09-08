import classes from "../../styles/Hero.module.scss";
import Container from "../commons/Container";
import Section from "../commons/Section";
import Button from "../commons/Button";
import { data } from "../../data/hero";
import Paragraph from "../commons/Paragraph";


export default function Hero() {
  return (
    <Section className={classes.hero}>
      <Container>
        <section className={classes.hero__body}>
          <div className={classes.hero__content}>
            <h1 className={classes.hero__title}>
              <span>{data.title.top}</span>
              <span>{data.title.bottom}</span>
              <img src={data.titleIcon} alt={data.title.top} width={101} height={101} />
            </h1>
            <div className={classes["hero__title-image"]}>
            <img
              src={data.image}
              alt="Engenious Hero slide"
              width="724px"
              height="406px"
            />
          </div>
            <div className={classes.hero__text}>
              <Paragraph data={data.text} />
            </div>
            <div className={classes.hero__date}>
              <p>
                <span>{data.date.day.top}</span>
                <span>{data.date.day.bottom}</span>
              </p>
              <p>
                <span>{data.date.month.top}</span>
                <span>{data.date.month.bottom}</span>
              </p>
              <p>
                <span>{data.date.time.top}</span>
                <span>{data.date.time.bottom}</span>
              </p>
            </div>
            <Button text={data.btnText} />
            <p className={classes.hero__description}>{data.description}</p>
          </div>
          <div className={classes.hero__image}>
            <img
              src={data.image}
              alt="Engenious Hero slide"
              width="724px"
              height="406px"
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}
