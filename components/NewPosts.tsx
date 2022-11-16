import liIcon from "@/assets/li.png";
import { List } from "@arco-design/web-react";
export const NewPosts = () => {
  return (
    <div className="my-3 w-full border-t-4 border-amber-700 bg-gray-50 p-5">
      <div className="flex">
        <img className="mx-2" src={liIcon.src} />
        <h2 className="text-xl">最新文章</h2>
      </div>
      <List
        bordered={false}
        dataSource={new Array(4).fill({
          title: "Beijing Bytedance Technology Co., Ltd.",
          description:
            "Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.",
        })}
        render={(item, index) => (
          <List.Item key={index}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </div>
  );
};
