import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel";
//import Image from "next/image";
import Button from "@/components/Button";

export type Item = {
  id: number;
  image: string;
};
type ServicesCarouselProps = {
  items: Item[];
  height?: number;
  width?: number;
};

export function Carousel(props: ServicesCarouselProps) {
  return (
    <CarouselProvider
      naturalSlideWidth={props.width ?? 100}
      naturalSlideHeight={props.height ?? 30}
      totalSlides={props.items.length}
      isPlaying={true}
      className={"mb-4"}
      infinite={true}
    >
      <Slider className={"rounded-lg"}>
        {props.items.map((item, index) => (
          <Slide index={index} key={index}>
            <Image
              className={"rounded-lg"}
              src={item.image}
              alt={"slider"}
              hasMasterSpinner={false}
            />
          </Slide>
        ))}
      </Slider>

      <div className={"flex justify-end gap-4 mt-4"}>
        <ButtonBack>
          <Button name={"Back"} variant={"secondary"} />
        </ButtonBack>
        <ButtonNext>
          <Button name={"Next"} variant={"secondary"} />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}
