import classes from "../../styles/Header.module.scss";
import Container from "../commons/Container";
import logo from "../../assets/images/header/logo.png"

export default function Header() {
  return (
    <header className={classes.header}>
      <Container>
        <section className={classes.header__body}>
          <div className={classes.header__btn}>Free webinar</div>
          <div className={classes.header__logo}>
            <img src={logo} alt="Engenious" width="256px" height="37px"/>
          </div>
        </section>
      </Container>
    </header>
  );
}
