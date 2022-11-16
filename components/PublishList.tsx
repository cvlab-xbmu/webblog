import liIcon from '@/assets/li.png';
export const PublishList = () => {
  return (
    <div className="p-5 flex flex-col justify-center cursor-pointer ">
      <div className="flex">
        <img className="mx-2" src={liIcon.src} />
        <h2 className="text-xl">出版与发表</h2>
      </div>
      <ul className="my-3 list-decimal px-5">
        <li>
          <a className="block my-1 hover:text-amber-800">{'Beijing Bytedance Technology Co., Ltd.'}</a>
        </li>
        <li>
          <a className="block my-1 hover:text-amber-800">{'Beijing Bytedance Technology Co., Ltd Technology Co., Ltd.. Beijing Bytedance Technology Co., Ltd.'}</a>
        </li>
        <li>
          <a className="block my-1 hover:text-amber-800">{'Beijing Bytedance Technology Co., Ltd. Beijing Bytedance Technology Co., Ltd. Beijing Bytedance Technology Co., Ltd.'}</a>
        </li>
        <li>
          <a className="block my-1 hover:text-amber-800">{'Beijing Bytedance Technology Co., Ltd.'}</a>
        </li>
        <li>
          <a className="block my-1 hover:text-amber-800">{'Beijing Bytedance Technology Co., Ltd.'}</a>
        </li>
        <li>
          <a className="block my-1 hover:text-amber-800">{'Beijing Bytedance Technology Co., Ltd.'}</a>
        </li>
      </ul>
    </div>
  );
};
