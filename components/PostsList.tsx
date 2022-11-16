import { List } from "@arco-design/web-react";

export const PostsList = () => {
  return (
    <div className="px-5">
      <List
        bordered={false}
        dataSource={new Array(20).fill({
          title: "Beijing Bytedance Technology Co., Ltd.",
          subtitle:
            "Beijing ByteDance Technology Co., Ltd. is an enterprise located in China.",
        })}
        render={(item, index) => (
          <List.Item key={index} className="my-3 cursor-pointer">
            <a className="hover:text-amber-700" href="/post/example">
              <h3 className="text-xl">{item.title}</h3>
              <h4 className="text-gray-500">{item.subtitle}</h4>
              <div className="flex justify-between text-gray-500 my-1">
                <div>2022年8月19日</div>
                <div>李世民</div>
              </div>
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};
