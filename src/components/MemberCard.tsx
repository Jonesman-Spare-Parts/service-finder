import React from "react";
import { FaDribbble, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export type Member = {
  name: string;
  position: string;
  image: string;
  description: string;
};

function MemberCard(member: Member) {
  return (
    <div className="grid grid-cols-3 bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="#" className={"h-full w-full "}>
        <Image
          className="w-full h-full rounded-l-lg sm:rounded-none sm:rounded-l-lg"
          src={member.image}
          height={500}
          width={300}
          alt={member.name}
        />
      </Link>
      <div className="p-5 col-span-2 ">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">{member.name}</a>
        </h3>
        <span className="text-gray-500 dark:text-gray-400">
          {member.position}
        </span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {member.description}
        </p>
        <ul className="flex space-x-4 sm:mt-0">
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook className={"w-5 h-5"} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTwitter className={"w-5 h-5"} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub className={"w-5 h-5"} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaDribbble className={"w-5 h-5"} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MemberCard;
