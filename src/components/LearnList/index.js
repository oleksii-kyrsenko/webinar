/* eslint-disable no-loop-func */
import classes from "../../styles/LearnList.module.scss";
import LearnItem from "../LearnItem";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

export default function LearnList({ list }) {
  useEffect(() => {
    const list = document.querySelector(`.${classes.list}`);
    const collapsibles = document.querySelectorAll(".collapsible");

    list.addEventListener("click", function (e) {
      if (e.target.classList.contains("collapsible__btn")) {
        collapsibles.forEach((coll) => {
          if (e.target.parentNode !== coll) {
            coll.classList.remove("active");
            coll.children[1].style.maxHeight = null;
          }
        });

        e.target.parentNode.classList.toggle("active");

        let content = e.target.nextElementSibling;

        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      }
    });
  }, []);
  return (
    <ul className={classes.list}>
      {list.map(({ title, text }) => (
        <LearnItem key={uuid()} title={title} text={text} />
      ))}
    </ul>
  );
}
