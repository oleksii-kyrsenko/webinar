import { v4 as uuid } from "uuid";
import { decodeEntities } from "@wordpress/html-entities";


export default function Paragraph({ data }){
  return (
    <>
      {data.map((p) => (
        <p
        key={uuid()}
        dangerouslySetInnerHTML={{
          __html: decodeEntities(p),
        }}
      />
      ))}
    </>
  );
};
