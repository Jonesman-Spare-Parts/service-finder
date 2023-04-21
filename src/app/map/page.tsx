"use client";
import React from "react";
import "../../styles/global.css";
import Map from "@/components/Map";
import PageTransition from "@/components/PageTransition";

type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

const Page = (ref: IndexPageRef) => (
  <PageTransition ref={ref} className={"flex flex-col justify-between"}>
    <h1 className={"text-2xl"}>Map page</h1>
    <Map />
  </PageTransition>
);

export default Page;
