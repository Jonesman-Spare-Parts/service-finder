import "@/styles/global.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { getCategory, getCategoryServices } from "@/sanity/sanity-utils";
import { ServiceCard } from "@/components/ServiceCard";
import { Service } from "@/types/Service";
import React from "react";

type PageProps = {
  params: { slug: string };
};

async function Page({ params }: PageProps) {
  const slug = params.slug;
  const categoryServices = await getCategoryServices(slug);
  console.log("services", categoryServices);
  const category = await getCategory(params.slug);
  console.log("category", category);
  return (
    <section className={"container mx-auto flex flex-col gap-16"}>
      <div className={"flex flex-col gap-4"}>
        <h1
          className={
            "text-4xl text-gray-900  dark:text-white capitalize font-semibold"
          }
        >
          {" "}
          "{categoryServices[0].category}" Services
        </h1>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          {category?.description}
        </p>
      </div>
      <div className={"grid  md:grid-cols-3 lg:grid-cols-4  gap-4"}>
        {categoryServices.map((service: Service) => (
          <ServiceCard key={service._id} id={service._id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Page;
