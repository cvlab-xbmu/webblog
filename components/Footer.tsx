import { BsGithub } from 'react-icons/bs';
import { SiGitee } from 'react-icons/si';
import { ImMail4 } from 'react-icons/im';
import navLogo from '@/assets/nav-logo.png';
import { WebsiteConfigure } from '@/config/website.config';
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
          {WebsiteConfigure.friends.map((item, index) => (
            <a rel="noreferrer" className="my-auto mr-2 hover:text-white" href={item.url} title={item.describe} target="_blank" key={`friends-list-${index}`}>
              {item.title}
            </a>
          ))}
        </div>
        <div className="my-2 flex flex-col">
          <div className="my-1">{`Copyright © ${WebsiteConfigure.yearStart}-${new Date().getFullYear()} All Rights Reserved ${WebsiteConfigure.copyright} 版权所有`}</div>
          <div className="my-1">{`${WebsiteConfigure.poweredBy ? `Powered By ${WebsiteConfigure.poweredBy} | ` : ''}${WebsiteConfigure.icp}`}</div>
        </div>
      </div>
      <div className="my-5 shrink-0">
        <img className="mx-auto h-28 w-28" src={navLogo.src} alt="xbmu-cvlab-logo" />
      </div>
    </div>
  );
};
