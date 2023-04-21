"use client";
import "../../styles/global.css";
import _ from "lodash";
import { ServiceCard } from "@/components/ServiceCard";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Carousel, Item } from "@/components/Carousel";
import PageTransition from "@/components/PageTransition";

const items: Item[] = [
  {
    id: 1,
    image: "https://www.hospitalitynet.org/picture/xxl_153107378.jpg",
  },
  {
    id: 2,
    image: "https://www.hospitalitynet.org/picture/xxl_153107378.jpg",
  },
  {
    id: 3,
    image: "https://www.hospitalitynet.org/picture/xxl_153107378.jpg",
  },
];
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

const Page = (ref: IndexPageRef) => {
  const arr = _.range(10);

  return (
    <PageTransition ref={ref}>
      <Carousel items={items} />

      <section className={"grid grid-cols-4 gap-4"}>
        {arr.map((key, index) => (
          <ServiceCard key={key} id={index.toString()} />
        ))}
      </section>
    </PageTransition>
  );
};

export default Page;
