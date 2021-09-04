import "../../styles/LearnItem.scss";
import Paragraph from "../commons/Paragraph";

export default function LearnItem({ title, text }) {
  return (
    <li className="collapsible">
      <button className="collapsible__btn">
        <div className="collapsible__icon">
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.07713 6.32503L1.99513 4.24303C1.88303 4.13068 1.73084 4.06754 1.57213 4.06754C1.41342 4.06754 1.26123 4.13068 1.14913 4.24303C0.915133 4.47703 0.915133 4.85503 1.14913 5.08903L3.65713 7.59703C3.89113 7.83103 4.26913 7.83103 4.50313 7.59703L10.8511 1.24903C11.0851 1.01503 11.0851 0.63703 10.8511 0.40303C10.739 0.290679 10.5868 0.227539 10.4281 0.227539C10.2694 0.227539 10.1172 0.290679 10.0051 0.40303L4.07713 6.32503Z"
              fill="white"
            />
          </svg>
        </div>
        <span>{title}</span>
        <div className="collapsible__close"></div>
      </button>
      <div className="collapsible__content">
        <Paragraph data={text} />
      </div>
    </li>
  );
}
