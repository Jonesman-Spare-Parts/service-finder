"use client";
import "../../styles/global.css";
import _ from "lodash";
import { ServiceCard } from "@/components/ServiceCard";

const Page = () => {
  const items = [
    {
      id: 1,
      element: <h1>Carousel Item</h1>,
    },
    {
      id: 2,
      element: <h1>Carousel Item</h1>,
    },
    {
      id: 3,
      element: <h1>Carousel Item</h1>,
    },
  ];

  const arr = _.range(10);

  return (
    <article>
      <section className={"grid grid-cols-4 gap-4"}>
        {arr.map((key) => (
          <ServiceCard key={key} />
        ))}
      </section>
    </article>
  );
};

export default Page;
