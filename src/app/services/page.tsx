import "../../styles/global.css";
import _ from "lodash";
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
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

export default async function Page() {
  const arr = _.range(10);

  const services = await getServices();
  console.log("services", services);
  return (
    <div>
      <Carousel items={items} />

      <section className={"grid grid-cols-3 lg:grid-cols-4  gap-4"}>
        {services.map((service: Service) => (
          <ServiceCard key={service._id} id={service._id} service={service} />
        ))}
      </section>
    </div>
  );
}
