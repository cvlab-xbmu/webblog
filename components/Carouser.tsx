import { Carousel } from "@arco-design/web-react";
const imageSrc = [
  "https://pic1.zhimg.com/v2-2099eac5d1a6d94c72fc52f3317635ea_r.jpg?source=1940ef5c",
  "https://pic1.zhimg.com/v2-399d18bc8c4a7a0f1353149bc011cd00_r.jpg",
  "https://pic1.zhimg.com/v2-bba0ef40eab50f88246ff4b99e2443bc_r.jpg",
  "https://pic1.zhimg.com/v2-43a699a8b3beffe15c54a6a6897dfb58_r.jpg",
];
export const Carouser = () => {
  return (
    <Carousel className="my-3 aspect-video" autoPlay>
      {imageSrc.map((src, index) => (
        <img src={src} key={index} className="object-cover" alt="" />
      ))}
    </Carousel>
  );
};
