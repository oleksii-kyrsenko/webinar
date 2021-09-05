import classes from "../../styles/About.module.scss";
import Container from "../commons/Container";
import Title from "../commons/Title";
import Section from "../commons/Section";
import { data } from "../../data/about";
import { v4 as uuid } from "uuid";
import Paragraph from "../commons/Paragraph";

export default function About() {
  return (
    <Section className={classes.about}>
      <Container>
        <section className={classes.about__body}>
          <div className={classes.about__content}>
            <Title text={data.title_1} />
            <div className={classes.about__logo}>
              <img src={data.logo} alt={data.title_1} />
            </div>
            <div className={classes.about__text}>
              <Paragraph data={data.text} />
            </div>
          </div>
          <div className={classes.about__clients}>
            <Title text={data.title_2} />
            <ul className={classes.about__list}>
              {data.clients.map(({ logo, name }) => (
                <li className={classes.about__item} key={uuid()}>
                  <img src={logo} alt={name} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </Section>
  );
}
