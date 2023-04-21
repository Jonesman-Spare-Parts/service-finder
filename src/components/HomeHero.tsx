import React from "react";
import Image from "next/image";
import traveling from "../assets/images/traveling.svg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/all";

function HomeHero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl text-gray-800 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Find a service at Takoradi Harbour
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {" "}
            From resturants to hotels, we have you covered. Find the best
            services available at Takoradi Harbour right here.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Find Services
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Onboard a business
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={traveling} alt={"hero-image"} width={500} height={500} />
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
