import liIcon from '@/assets/li.png';
import { WebsiteConfigure } from '@/config/website.config';
export const PublishList = () => {
  return (
    <div className="p-5 flex flex-col justify-center cursor-pointer ">
      <div className="flex">
        <img className="mx-2" src={liIcon.src} alt="" />
        <h2 className="text-xl">出版与发表</h2>
      </div>
      <ul className="my-3 list-decimal px-5">
        {WebsiteConfigure.publishList.map((item,index) => (
          <li key={`publish-list-${index}`}>
            <a className="block my-1 hover:text-amber-800" href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
