"use client";
import React from "react";
import AboutHero from "@/components/AboutHero";
import MemberCard, { Member } from "@/components/MemberCard";

const members: Member[] = [
  {
    name: "John Doe",
    position: "CEO",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    description: "Lorem ipsum dolo Accusantium animi quis saepe unde!",
  },
  {
    name: "John Doe",
    position: "CEO",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    description: "Lorem ipsum dolor sit amet, consectetu   tempore",
  },
  {
    name: "John Doe",
    position: "CEO",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
    description: "Lorem ipsum dolor sit amet,  tempore vitae.is saepe unde!",
  },
  {
    name: "John Doe",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    position: "CEO",
    description: "Lorem ipsum dolo Accusantium animi quis saepe unde",
  },
];

function Page() {
  return (
    <section>
      <AboutHero />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              Offering services to
              <span className="font-extrabold"> 200,000+</span> customers
              nationwide
            </h2>
            <p className="mb-4 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium animi autem dolorem doloribus enim excepturi facere
              fugit impedit, ipsum libero necessitatibus nemo quibusdam quidem
              rem sit, tempore vitae. Ab deserunt fugiat ipsum iusto quis saepe
              unde!
            </p>
            <p className="mb-4 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur cumque eligendi fuga labore laudantium magni nihil
              porro provident qui unde.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              These are the personals dedicated to providing you with the best
              services available{" "}
            </p>
          </div>
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {members.map((member, index) => (
              <MemberCard
                key={index}
                image={member.image}
                description={member.description}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Page;
