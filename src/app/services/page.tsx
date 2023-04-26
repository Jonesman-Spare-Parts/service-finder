import "../../styles/global.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Carousel, Item } from "@/components/Carousel";
import { getServices } from "@/sanity/sanity-utils";
import { ServiceCard } from "@/components/ServiceCard";
import { Service } from "@/types/Service";

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

export default async function Page() {
  const services = await getServices();
  console.log("services", services);
  return (
    <div>
      <div className={"hidden md:block"}>
        <Carousel items={items} />
      </div>

      <section className={"grid  md:grid-cols-3 lg:grid-cols-4  gap-4"}>
        {services.map((service: Service) => (
          <ServiceCard key={service._id} id={service._id} service={service} />
        ))}
      </section>
    </div>
  );
}
