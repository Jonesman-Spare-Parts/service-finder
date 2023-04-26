"use client";
import React from "react";
import "../../styles/global.css";
import PageTransition from "@/components/PageTransition";

type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

const Page = (ref: IndexPageRef) => (
  <PageTransition ref={ref}>
    <h1 className={"text-2xl"}>Blog Page</h1>
  </PageTransition>
);

export default Page;
