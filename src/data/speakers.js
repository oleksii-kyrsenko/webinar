import sp1 from "../assets/images/speakers/sp1.png";
import sp2 from "../assets/images/speakers/sp2.png";

export const data = {
  title: "The speakers",
  list: [
    {
      position: "CTO at Engenious",
      name: "Boris Gurtovoy",
      text: [
        "Co-founder and CTO of Engenious, Boris is an experienced iOS developer who worked at Tinder and participated in open source projects. He holds a Masters in Computer Science from USC and is passionate about blockchain technology.",
        "His mind is full of innovative ideas and he’s ready to share them with anybody who will join the talk about SIFT technology.",
        "Today, Boris leads a technical team at Engenious to deliver excellence and bring change.",
      ],
      image: sp1,
    },
    {
      position: "Guest speaker",
      name: "Anton Prokuda",
      text: [
        "Sr iOS Software Engineer at Tinder  with a focus on Testing and CI/CD infrastructure with substantial experience in both established IT companies as well as consulting.",

        "The main driver behind  enterprise-level in-house solutions that scale continuous development as well as testing processes:",
      ],
      image: sp2,
      list:[
        "Scalable test architecture for native IOS infrastructure",
        "The main contributor for open-source parallel test execution solution -- Sift",
        "iOS CI/CD solution from scratch",
      ]
    },
  ],
};
