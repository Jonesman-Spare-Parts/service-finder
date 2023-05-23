"use client";
import React, { useEffect, useState } from "react";
import "@/styles/global.css";
import SearchBar from "@/components/SearchBar";
import { BlogSummary } from "@/components/BlogSummary";
import { getBlogs } from "@/sanity/sanity-utils";
import { Blog } from "@/types/Blog";
import SideBlog from "@/components/SideBlog"

const Page = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    getBlogs(search).then((data) => setBlogs(data));
  }, [search]);

  const handleDataFromSearch = (data: string) => {
    setSearch(data);
  };
  return (
    <div className={"flex flex-col gap-16"}>
      <div className={"flex flex-col gap-4"}>
        <h1
          className={
            "text-4xl text-gray-900  dark:text-white capitalize font-bold"
           }
        >
          All Blogs
        </h1>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem
          dolore dolorum inventore modi optio totam? Dolor dolores eius velit?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          dolorem excepturi fuga labore totam! At autem ex exercitationem fuga
          fugit id molestiae, nobis, quas recusandae sit temporibus tenetur
          voluptatum. Beatae.
        </p>
      </div>

      <div className="flex gap-20">
        <div className={"w-3/5 flex flex-col gap-8"}>
          <SearchBar onSearch={handleDataFromSearch} />

          <div className={" flex flex-col gap-16"}>
            {blogs.map((blog, index) => (
              <BlogSummary blog={blog} key={index} />
            ))}
          </div>
          
        </div>
        <div>
          <SideBlog/>
        </div>
      </div>

    </div>
    
  );
};

export default Page;
