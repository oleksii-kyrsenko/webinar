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
            <h1 className={classes.hero__title}>{data.title}</h1>
            <h2 className={classes.hero__subtitle}>{data.subtitle}</h2>
            <div className={classes.hero__image}>
              <img
                src={data.image}
                alt="Engenious"
                width="724px"
                height="406px"
              />
            </div>
            <div className={classes.hero__text}>
              <Paragraph data={data.text} />
            </div>
            <div className={classes.hero__registration}>
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
            </div>
            <div className={classes.hero__description}>
              <Paragraph data={data.description} />
            </div>
        </section>
      </Container>
    </Section>
  );
}
