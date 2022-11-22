import { useScroll } from "ahooks";
import { useState } from "react";
import navLogo from "@/assets/nav-logo.png";
import React from "react";
import classnames from "classnames";
import { NavLandingProps } from "./interface";

export const NavLanding = (props: NavLandingProps) => {

  /**
   * Indicates the image currently being displayed in a carousel.
   */
  const [image_index_cursor, set_image_index_cursor] = useState(0);

  /**
   * Provides scroll detection in the context of client-side rendering.
   */
  const scroll = useScroll(typeof document !== "undefined" ? document : undefined);

  /**
   * Compile all images into ReactElement Array.
   */
  const image_dom_group = React.Children.toArray(props.imageSrcs?.map((src, index) => (
    <div
      className={`w-full h-full bg-cover absolute ${image_index_cursor === index ? 'visible' : 'invisible'}`}
      key={`bg${index}`}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${src}})`,
      }} />
  )));

  /**
   * Realize the logic control of flipping images.
   */
  const flip_handler = () => {
    let length = props.imageSrcs?.length;
    if (length) {
      image_index_cursor === length - 1 ?
        set_image_index_cursor(0) : set_image_index_cursor(image_index_cursor + 1);
    };
  }

  /**
   * Adjust the aspect ratio of the image according to the aspect ratio scheme given by the props.
   */
  const image_aspect = (() => {
    switch (props.aspect) {
      case "half": return 'aspect-4/1';
      case "screen": return 'aspect-5/2'
    }
  })();

  return (
    <div className="w-full overflow-hidden border-b-4  border-b-amber-600 bg-black">
      <nav
        className={classnames("fixed top-0 left-0 z-10 flex w-full flex-wrap justify-between px-10",
          scroll?.top === 0 ? "navbar-bg-translucent" : "navbar-bg-opaque")}>
        <div className="my-3 flex">
          <img src={navLogo.src} className=" m-3 my-auto h-8 w-8" alt="xbmu-cvlab-logo" />
          <h1 className="site-title my-auto text-2xl font-bold text-white">
            {props.title ?? "西北民族大学 CVLAB"}
          </h1>
        </div>
        <div className="flex">
          <ul className="menu mx-2">
            <li className="cursor-pointer py-4 hover:bg-black">
              <a className="mx-3 text-lg text-white" href="/">{"首页"}</a>
            </li>
          </ul>
          <ul className="menu mx-2">
            <li className="cursor-pointer py-4 hover:bg-black">
              <div className="mx-3 text-lg text-white">{"学术博客"}</div>
              <ul className="text-md text-md absolute top-28 right-0 z-10 flex w-fit max-w-2xl flex-wrap bg-yellow-700 px-10 py-2 text-white md:top-14">
                {Array(10).fill("测试").map((title, index) => (
                  <li className="px-3 py-1 hover:text-gray-300" key={`col-${index}`}>
                    <a href="/posts/example">{`${title}${index}`}</a>
                  </li>))}
              </ul>
            </li>
          </ul>
          <ul className="menu mx-2">
            <li className="cursor-pointer py-4 hover:bg-black">
              <a className="mx-3 text-lg text-white" href="/display">{"项目展示"}</a>
            </li>
          </ul>
          <ul className="menu mx-2">
            <li className="cursor-pointer py-4 hover:bg-black">
              <a className="mx-3 text-lg text-white" href="/about">{"关于项目"}</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={classnames("carousel-flip -z-10 w-full bg-cover", image_aspect)}
        onAnimationIteration={flip_handler}
      >
        {image_dom_group}
      </div>
    </div>
  );
};
