import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {

   const ref =useRef(null);
  


  const data = [
    {
      desc: "This is the trial version of my Docs App.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" }, 
    },

    {
      desc: "This is the trial version of my Docs App.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download now", tagColor: "blue" }, 
    },

    {
      desc: "This is the trial version of my Docs App.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }, 
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
