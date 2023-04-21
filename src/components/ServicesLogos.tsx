"use client";
import Link from "next/link";
import React from "react";
import {
  FaAirbnb,
  FaTripadvisor,
  SiDoordash,
  SiKfc,
  SiUbereats,
  TbBrandBooking,
} from "react-icons/all";

function ServicesLogos() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          You’ll be in good company
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <Link href="#" className="flex justify-center items-center">
            <FaAirbnb
              className={"h-9 w-9 hover:text-gray-900 dark:hover:text-white"}
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <TbBrandBooking
              className={"h-9 w-9 hover:text-gray-900 dark:hover:text-white"}
            />
          </Link>
          <Link href="#" className="flex justify-center items-center">
            <FaTripadvisor
              className={"h-9 w-9 hover:text-gray-900 dark:hover:text-white"}
            />
          </Link>

          <Link href="#" className="flex justify-center items-center">
            <SiKfc
              className={"h-9 w-9 hover:text-gray-900 dark:hover:text-white"}
            />
          </Link>

          <Link href="#" className="flex justify-center items-center">
            <SiUbereats
              className={"h-9 w-9 hover:text-gray-900 dark:hover:text-white"}
            />
          </Link>

          <Link href="#" className="flex justify-center items-center">
            <SiDoordash
              className={"h-9 w-9 hover:text-gray-900 dark:hover:text-white"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesLogos;
