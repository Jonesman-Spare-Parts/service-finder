"use client";
import React from "react";
import "../../styles/global.css";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { BiBookAdd, BiBookmark, BiBookmarkPlus } from "react-icons/bi";
import Image from 'next/image';
import bookImage from '../../assets/images/social-media-concept-with-smartphone.jpg'

type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

const Page = (ref: IndexPageRef) => (
  <PageTransition ref={ref}>
    <Link href={"./blogs/blog"} ><h1 className={"text-2xl"}>All Blogs Page</h1></Link>
    <div className="box-border p-4 border-2 rounded-md">
      <div className="flex space-x-4">
        <div className="">
          <h1 className="text-3xl font-bold text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, rem.</h1>
          <p className="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quibusdam aspernatur dicta quo 
            commodi id sint autem dignissimos delectus maiores!</p>
        </div>

        <div className="pl-8">
        <Image 
          src={bookImage} 
          alt="" 
          width={330}
          />
        </div>
      </div>
         <span><span></span><span><BiBookmarkPlus/></span></span>
    </div>
  </PageTransition>
);

export default Page;
