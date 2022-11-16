import { useScroll } from "ahooks";
import { useState } from "react";
import navLogo from "@/assets/nav-logo.png";

export const NavLanding = (props: {
  aspect: "screen" | "half";
  navTitle?: string;
}) => {
  const [imgIndex, setImgIndex] = useState(1);
  const scroll = useScroll(
    typeof document !== "undefined" ? document : undefined
  );
  return (
    <div className="w-full overflow-hidden border-b-4  border-b-amber-600 bg-black">
      <nav
        className={`fixed top-0 left-0 z-10 flex w-full flex-wrap justify-between px-10 ${
          scroll?.top === 0 ? "navbar-bg-translucent" : "navbar-bg-opaque"
        }`}
      >
        <div className="my-3 flex">
          <img src={navLogo.src} className=" m-3 my-auto h-8 w-8" />
          <h1 className="site-title my-auto text-2xl font-bold text-white">
            {props.navTitle ?? "西北民族大学 CVLAB"}
          </h1>
        </div>
        <div className="flex">
          <ul className="menu mx-2">
            <li className="cursor-pointer py-4 hover:bg-black">
              <a className="mx-3 text-lg text-white" href="/">
                首页
              </a>
            </li>
          </ul>
          <ul className="menu mx-2">
            <li className="cursor-pointer py-4 hover:bg-black">
              <div className="mx-3 text-lg text-white">学术博客</div>
              <ul className="text-md text-md absolute top-28 right-0 z-10 flex w-fit max-w-2xl flex-wrap bg-yellow-700 px-10 py-2 text-white md:top-14">
                <a href="/posts/example">
                  <li className="px-3 py-1 hover:text-gray-300">测试1</li>
                </a>
                <a href="/posts/example">
                  <li className="px-3 py-1 hover:text-gray-300">测试1</li>
                </a>
                <a href="/posts/example">
                  <li className="px-3 py-1 hover:text-gray-300">测试1</li>
                </a>
                <a href="/posts/example">
                  <li className="px-3 py-1 hover:text-gray-300">测试1</li>
                </a>
                <a href="/posts/example">
                  <li className="px-3 py-1 hover:text-gray-300">测试1</li>
                </a>
                <a href="/posts/example">
                  <li className="px-3 py-1 hover:text-gray-300">测试1</li>
                </a>
                <a href="/posts/example">
                  <li className="px-3 py-1 hover:text-gray-300">测试1</li>
                </a>
                <a href="/posts/example">
                  <li className="px-3 py-1 hover:text-gray-300">测试1</li>
                </a>
              </ul>
            </li>
          </ul>
          <ul className="menu mx-2">
            <li className="cursor-pointer py-4 hover:bg-black">
              <a className="mx-3 text-lg text-white" href="/display">
                项目展示
              </a>
            </li>
          </ul>
          <ul className="menu mx-2">
            <li className="cursor-pointer py-4 hover:bg-black">
              <a className="mx-3 text-lg text-white" href="/about">
                关于项目
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {props.aspect === "screen" ? (
        <div
          className="carousel-flip -z-10 aspect-5/2 w-full bg-cover"
          onAnimationIteration={() => {
            imgIndex === 4 ? setImgIndex(1) : setImgIndex(imgIndex + 1);
          }}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(/images/home-bg${imgIndex}.jpg)`,
          }}
        ></div>
      ) : null}
      {props.aspect === "half" ? (
        <div
          className="carousel-flip -z-10 aspect-4/1 w-full bg-cover"
          onAnimationIteration={() => {
            imgIndex === 4 ? setImgIndex(1) : setImgIndex(imgIndex + 1);
          }}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(/images/home-bg${imgIndex}.jpg)`,
          }}
        ></div>
      ) : null}
    </div>
  );
};
