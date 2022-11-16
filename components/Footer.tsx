import { BsGithub } from 'react-icons/bs';
import { SiGitee } from 'react-icons/si';
import { ImMail4 } from 'react-icons/im';
import navLogo from '@/assets/nav-logo.png';
export const Footer = () => {
  return (
    <div className="w-full justify-between overflow-hidden bg-black px-20 py-10 text-gray-200 md:flex md:px-40">
      <div className="my-5">
        <div className="flex">
          <a className="">
            <BsGithub className="mr-3 cursor-pointer hover:text-white" size={'32px'} />
          </a>
          <a className="">
            <SiGitee className="mr-3 cursor-pointer hover:text-white" size={'32px'} />
          </a>
          <a className="">
            <ImMail4 className="mr-3 cursor-pointer hover:text-white" size={'32px'} />
          </a>
        </div>
        <div className="my-5 flex flex-wrap">
          <h3 className="mr-5 text-lg font-bold">友情链接</h3>
          <a className="my-auto mr-2">西北民族大学</a>
          <a className="my-auto mr-2">字节跳动</a>
          <a className="my-auto mr-2">蜂鸟引擎</a>
          <a className="my-auto mr-2">Python社区</a>
        </div>
        <div className="my-2 flex flex-col">
          <div className="my-1">Copyright © 2015-2019 All Rights Reserved 西北民族大学CVLAB 版权所有</div>
          <div className="my-1">Powered By 张宇腾 | 豫ICP备2020026816号</div>
        </div>
      </div>
      <div className="my-5 shrink-0">
        <img className="mx-auto h-28 w-28" src={navLogo.src} />
      </div>
    </div>
  );
};
