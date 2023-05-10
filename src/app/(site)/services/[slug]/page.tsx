import React from "react";
import ServiceCTASection from "@/components/ServiceCTASection";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import DiscountCTASection from "@/components/DiscountCTASection";
import { getService } from "@/sanity/sanity-utils";
import "@/styles/global.css";

type PageProps = {
  params: { slug: string };
};

async function Page({ params }: PageProps) {
  const slug = params.slug;
  const service = await getService(slug);
  return (
    <section className={"flex flex-col justify-between gap-16"}>
      <div>
        <div className={"flex justify-center "}>
          <Image
            className={"rounded-xl"}
            src={service.image}
            height={300}
            width={1000}
            alt={"image"}
          />
        </div>
        <ServiceCTASection
          serviceName={service.name}
          serviceIcon={""}
          externalLink={service.url}
          serviceCategory={service.category}
        />
      </div>
      <div
        className={
          "grid grid-cols-2 gap-16 text-gray-500 dark:text-gray-400 text-lg"
        }
      >
        <div className={"flex flex-col  gap-4"}>
          <div>
            <h2
              className={"mb-2 text-2xl font-bold text-black  dark:text-white"}
            >
              Overview
            </h2>
            <p className={"text-lg"}>{service.overview}</p>
          </div>
          <ul className={"grid grid-cols-2"}>
            {service.services.map((service, index) => (
              <li key={index} className={"flex items-center  capitalize  "}>
                <FaCheckCircle className={"mr-2 text-green-500"} />
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={"flex flex-col justify-between gap-8"}>
          <div>
            <h2
              className={"mb-2 text-2xl font-bold text-black  dark:text-white"}
            >
              Background
            </h2>
            <p>{service.background}</p>
          </div>
          <div>
            <h2
              className={"mb-2 text-2xl font-bold text-black  dark:text-white"}
            >
              Their offer
            </h2>
            <p>{service.offer}</p>
          </div>
        </div>
      </div>
      <DiscountCTASection />
    </section>
  );
}

export default Page;
