import { getBlog, getCategory } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import "@/styles/global.css"

type PageProps = {
  params: { slug: string };
};

async function Page({ params }: PageProps) {
  const slug = params.slug;
  const blog = await getBlog(slug || "");
  console.log("slug", slug);
  
  return (
    
        <div className="flex flex-col items-center">
          <div className="col-span-1">
          <Image
            src={blog.image}
            alt=""
            width={600}
            height={200}
            className={"rounded-lg"}
          />
        </div>
          <h1 className="py-8 font-bold text-3xl text-black max-w-6xl">{blog.title}</h1>
          <p className="pt-4 text-justify max-w-7xl">
          <PortableText value={blog.content} />
          </p>
        </div>
  )
}

export default Page;
