import classes from "../../styles/Banner.module.scss";
import Section from "../commons/Section";
import Button from "../commons/Button";
import { data } from "../../data/banner";

export default function Banner() { 
  return (
    <Section className={classes.banner}>
      <section className={classes.banner__body}>
        <Button text={data.btnText} />
      </section>
    </Section>
  );
}
