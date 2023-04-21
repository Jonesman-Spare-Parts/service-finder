"use client";
import React from "react";
import "../../styles/global.css";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";

type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

const Page = (ref: IndexPageRef) => (
  <PageTransition ref={ref}>
    <Link href={"./blogs/blog"} ><h1 className={"text-2xl"}>All Blogs Page</h1></Link>
    <div>
      <div>
        
      </div>
    </div>
  </PageTransition>
);

export default Page;
