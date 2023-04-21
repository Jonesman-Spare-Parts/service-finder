import React from "react";
import { FaExternalLinkAlt, FaShoppingCart } from "react-icons/all";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";

function ServiceCtaSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col justify-between gap-12 ">
          <div className="mb-6 md:mb-0 flex justify-center">
            <a href="https://flowbite.com" className="flex items-center">
              <Image src={logo} className="mr-3 h-8" alt="FlowBite Logo" />
              <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
                ServiceHub
              </span>
            </a>
          </div>
          <div className={"flex justify-around font-bold text-lg"}>
            <a
              href="#"
              className="inline-flex  items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Get our service
              <FaShoppingCart className=" ml-2 w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Visit our website
              <FaExternalLinkAlt className="ml-2 w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCtaSection;
