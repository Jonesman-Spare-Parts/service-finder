import React from "react";
import Image from "next/image";
import spinner from "../assets/images/iphone-spinner-1.gif";

function Loading() {
  return (
    <div className={"flex justify-center h-full w-full"}>
      <Image src={spinner} alt={"spinner"} />
    </div>
  );
}

export default Loading;
