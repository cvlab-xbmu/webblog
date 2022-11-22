import navLogo from "@/assets/nav-logo.png";
export const NavPlain = (props: { navTitle?: string }) => {
  return (
    <nav className={`sticky top-0 left-0 z-10 flex w-full flex-wrap justify-between bg-amber-700 px-10`}>
      <div className="my-3 flex">
        <img src={navLogo.src} className=" m-3 my-auto h-8 w-8" alt="xbmu-cvlab-logo" />
        <h1 className="my-auto text-2xl font-bold text-white">
          {props.navTitle ?? "西北民族大学 CVLAB"}
        </h1>
      </div>
      <div className="flex">
        <ul className="menu mx-2">
          <li className="cursor-pointer py-4 hover:text-gray-300">
            <a className="mx-3 text-lg text-white hover:text-gray-300" href="/">
              首页
            </a>
          </li>
        </ul>
        <ul className="menu mx-2">
          <li className="cursor-pointer py-4 hover:text-gray-300">
            <a className="mx-3 text-lg text-white hover:text-gray-300" href="/">
              学术博客
            </a>
            <ul className="text-md text-md absolute top-28 right-0 z-10 flex w-fit max-w-2xl flex-wrap bg-black px-10 py-2 text-white md:top-14">
              <li className="px-3 py-1 hover:text-gray-300">测试1</li>
              <li className="px-3 py-1 hover:text-gray-300">测试1</li>
              <li className="px-3 py-1 hover:text-gray-300">测试1</li>
              <li className="px-3 py-1 hover:text-gray-300">测试1</li>
              <li className="px-3 py-1 hover:text-gray-300">测试1</li>
              <li className="px-3 py-1 hover:text-gray-300">测试1</li>
              <li className="px-3 py-1 hover:text-gray-300">测试1</li>
              <li className="px-3 py-1 hover:text-gray-300">测试1</li>
            </ul>
          </li>
        </ul>
        <ul className="menu mx-2">
          <li className="cursor-pointer py-4 hover:text-gray-300">
            <a className="mx-3 text-lg text-white hover:text-gray-300" href="/">
              项目介绍
            </a>
          </li>
        </ul>
        <ul className="menu mx-2">
          <li className="cursor-pointer py-4 hover:text-gray-300">
            <a className="mx-3 text-lg text-white hover:text-gray-300" href="/">
              项目展示
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
