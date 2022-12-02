import { Carousel } from "@arco-design/web-react";

export const Carouser = (props: {
  data: {
    imageUrl: string;
    url: string;
  }[];
}) => {
  return (
    <Carousel className="my-3 aspect-video" autoPlay>
      {props.data.map((item, index) => (
        <a href={item.url} key={`carousel-${index}`}>
          <img src={item.imageUrl} key={index} className="object-cover" alt="" />
        </a>
      ))}
    </Carousel>
  );
};
