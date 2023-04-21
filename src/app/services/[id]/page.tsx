import React from "react";
import ServiceCTASection from "@/components/ServiceCTASection";
import { Item } from "@/components/Carousel";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/all";
import DiscountCTASection from "@/components/DiscountCTASection";

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

async function Page({ params }: { params: { id: string } }) {
  const image: string =
    "https://www.hospitalitynet.org/picture/xxl_153107378.jpg";
  return (
    <section className={"flex flex-col justify-between gap-16"}>
      <div>
        <div className={"flex justify-center "}>
          <Image
            className={"rounded-xl"}
            src={image}
            height={600}
            width={1200}
            alt={"image"}
          />
        </div>
        <ServiceCTASection />
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
            <p className={"text-lg"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              accusamus aperiam, atque delectus distinctio doloribus ea eum
              fugiat harum in laudantium nemo nobis provident quod repellat
              reprehenderit rerum tempore vel?harum in laudantium nemo nobis
              provident quod repellat reprehenderit rerum tempore vel?
            </p>
          </div>
          <ul className={"grid grid-cols-2"}>
            {Array.from({ length: 7 }).map((_, index) => (
              <li key={index} className={"flex items-center   "}>
                <FaCheckCircle className={"mr-2 text-green-500"} />
                <span>{index}</span>
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              accusamus aperiam, atque delectus distinctio doloribus ea eum
              fugiat harum in laudantium nemo nobis provident quod repellat
              reprehenderit rerum tempore vel?harum in laudantium nemo nobis
              provident quod repellat reprehenderit rerum tempore vel?
            </p>
          </div>
          <div>
            <h2
              className={"mb-2 text-2xl font-bold text-black  dark:text-white"}
            >
              Our offer
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              accusamus aperiam, atque delectus distinctio doloribus ea eum
              fugiat harum in laudantium nemo nobis provident quod repellat
              reprehenderit rerum tempore vel?harum in laudantium nemo nobis
              provident quod repellat reprehenderit rerum tempore vel?
            </p>
          </div>
        </div>
      </div>
      <DiscountCTASection />
    </section>
  );
}

export default Page;
