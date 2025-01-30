import Carousel from "react-material-ui-carousel";
import { CarouselItem } from "./CarouselItem";

export const HomeCarousel = () => {
  const sliderItems = [
    {
      id: "1",
      imageURL:
        "https://res.cloudinary.com/dhoz7uto3/image/upload/v1738096280/kapadox_z3bnfp.jpg",
      title: "Capadoccia",
    },
    {
      id: "2",
      imageURL:
        "https://res.cloudinary.com/dhoz7uto3/image/upload/v1738096279/pamukkale_rsrcbp.jpg",
      title: "Pamukkale",
    },
    {
      id: "3",
      imageURL:
        "https://res.cloudinary.com/dhoz7uto3/image/upload/v1738096278/kapadox2_utoqa6.jpg",
      title: "Capadoccia",
    },
    {
      id: "4",
      imageURL:
        "https://res.cloudinary.com/dhoz7uto3/image/upload/v1738096278/gumusluk_sb8fkx.jpg",
      title: "Gumusluk",
    },
    {
      id: "5",
      imageURL:
        "https://res.cloudinary.com/dhoz7uto3/image/upload/v1738096278/kapadox3_rblooz.jpg",
      title: "Capadoccia",
    },
  ];
  return (
    <Carousel>
      {sliderItems.map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
};
