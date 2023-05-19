import Image from "next/image";
import React from "react";
import { Blog } from "@/types/Blog";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

interface BlogSummary {
  blog: Blog;
}

export function BlogSummary({ blog }: BlogSummary) {
  return (
    <div className=" rounded-md  ">
      <div className="grid grid-cols-3 gap-8 w-full">
        <div className=" col-span-2 flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-gray-900">{blog.title}</h1>
          <p className="text-slate-400 line-clamp-3">
            <PortableText value={blog.content} />
          </p>
          <Link href="#" className={"underline italic text-gray-500"}>
            Read more
          </Link>
        </div>
        <div className="col-span-1">
          <Image
            src={blog.image}
            alt=""
            width={300}
            height={200}
            className={"rounded-lg"}
          />
        </div>
      </div>
      {/*<span>*/}
      {/*  <span></span>*/}
      {/*  <span>*/}
      {/*    <BiBookmarkPlus className="text-xl" />*/}
      {/*  </span>*/}
      {/*</span>*/}
    </div>
  );
}
