import classes from "../../../styles/Button.module.scss";
import gsap from "gsap";

export default function Button({ text }) {
  function handleButtonClick() {
    gsap.to(window, { duration: 1, scrollTo: "#widget" });
  }

  return (
    <button className={classes.button} onClick={handleButtonClick}>
      {text}
    </button>
  );
}
