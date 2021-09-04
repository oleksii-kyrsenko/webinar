import { useEffect } from "react";
import classes from "../../../styles/Button.module.scss";

export default function Button({ text }) {
 let widget
  function handleButtonClick(element) {
   element
      .scrollIntoView({ block: "center", behavior: "smooth" });
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    widget = document.getElementById("widget")
  }, [])

  return (
    <button className={classes.button} onClick={()=> widget?handleButtonClick(widget):false}>
      {text}
    </button>
  );
}
