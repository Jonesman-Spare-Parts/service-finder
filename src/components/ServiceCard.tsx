import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/all";

interface ServiceCardProps {
  id: string;
}

export function ServiceCard({ id }: ServiceCardProps) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/services/${id}`}>
        <Image
          className={"rounded-t-lg"}
          width={500}
          height={250}
          src={
            "https://image.winudf.com/v2/image/Y29tLnNhbW9vbnByaS5jb2ZmZWVzaG9wLnJlc3R1cmFudGRlc2lnbl9zY3JlZW5zaG90c181X2M1ZmFkNTg4/screen-4.jpg?fakeurl=1&type=.jpg"
          }
          alt={"service image"}
        />
      </Link>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Starlight restaurant
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <FaStar className={"w-4 h-4 text-yellow-300"} />
          <FaStar className={"w-4 h-4 text-yellow-300"} />
          <FaStar className={"w-4 h-4 text-yellow-300"} />
          <FaStar className={"w-4 h-4 text-yellow-300"} />
          <FaStar className={"w-4 h-4 text-yellow-300"} />

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className=" flex gap-2 items-end">
            <div className={"text-sm text-gray-600 font-bold dark:text-white"}>
              Starts at
            </div>
            <div className={"text-3xl font-bold text-gray-900 dark:text-white"}>
              $599
            </div>
          </span>
          <Link
            href={`/services/${id}`}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
