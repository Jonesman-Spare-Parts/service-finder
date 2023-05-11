"use client";
import React from "react";
import Link from "next/link";
import { BiBookmarkPlus } from "react-icons/bi";
import Image from "next/image";
import bookImage from "@/assets/images/social-media-concept-with-smartphone.jpg";

const Page = () => (
  <div>
    <Link href={"./blogs/blog"}>
      <h1 className={"text-2xl"}>All Blogs Page</h1>
    </Link>
    <div className="box-border p-4 border-2 rounded-md mt-4 mx-24 w-3/5">
      <div className="flex space-x-4">
        <div className="">
          <h1 className="text-3xl font-bold text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, rem.
          </h1>
          <p className="text-slate-400 pt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            quibusdam aspernatur dicta quo commodi id sint autem dignissimos
            delectus maiores!
          </p>
        </div>

        <div className="pl-8">
          <Image src={bookImage} alt="" width={330} />
        </div>
      </div>
      <span>
        <span></span>
        <span>
          <BiBookmarkPlus className="text-xl"/>
        </span>
      </span>
    </div>
  </div>
);

export default Page;
