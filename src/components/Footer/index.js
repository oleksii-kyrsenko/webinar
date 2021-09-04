import classes from "../../styles/Footer.module.scss";
import Container from "../commons/Container";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container>
        <p className={classes.footer__text}>2021 Engenious Inc. (c) All rights reserved</p>
      </Container>
    </footer>
  );
}
