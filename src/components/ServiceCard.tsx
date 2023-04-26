import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Service } from "@/types/Service";
import { FaStar } from "react-icons/all";

interface ServiceCardProps {
  id: string;
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="w-full flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <Link href={`/services/${service.slug}`}>
          <Image
            className={"rounded-t-lg"}
            width={500}
            height={250}
            loading={"lazy"}
            src={service.image || ""}
            alt={"service image"}
          />
        </Link>
        {/*<div className={"mt-2"}>*/}
        {/*  <span className=" uppercase font-semibold bg-blue-100 text-blue-800 text-xs mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">*/}
        {/*    {service.category}*/}
        {/*  </span>*/}
        {/*</div>*/}
      </div>
      <div className="px-5 py-5">
        <Link href={`/services/${service.slug}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {service.name}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <FaStar className={"w-4 h-4 text-yellow-300"} />
          <FaStar className={"w-4 h-4 text-yellow-300"} />
          <FaStar className={"w-4 h-4 text-yellow-300"} />
          <FaStar className={"w-4 h-4 text-yellow-300"} />
          <FaStar className={"w-4 h-4 text-yellow-300"} />

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {service.rating?.toFixed(1)}
          </span>
        </div>
        <div className="flex flex-col  lg:flex-row gap-4 justify-between">
          <div className="flex gap-2 items-end ">
            <div className={"text-sm text-gray-600 font-bold dark:text-white"}>
              Starts at
            </div>
            <div className={"text-2xl font-bold text-gray-900 dark:text-white"}>
              ${service.startPrice}
            </div>
          </div>
          <Link
            href={`/services/${service.slug}`}
            className="text-white w-full lg:w-3/6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
