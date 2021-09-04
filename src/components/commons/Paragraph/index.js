import { v4 as uuid } from "uuid";

export default function Paragraph({ data }){
  return (
    <>
      {data.map((paragraph) => (
        <p key={uuid()}>
          {paragraph}
        </p>
      ))}
    </>
  );
};
