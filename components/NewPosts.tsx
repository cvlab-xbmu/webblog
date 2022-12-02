import liIcon from "@/assets/li.png";
import { List } from "@arco-design/web-react";

export const NewPosts = (props: {
  data: {
    title: string;
    subtitle?: string;
    postId: string;
  }[]
}) => {
  return (
    <div className="my-3 w-full border-t-4 border-amber-700 bg-gray-50 p-5">
      <div className="flex">
        <img className="mx-2" src={liIcon.src} alt="" />
        <h2 className="text-xl">{"最新文章"}</h2>
      </div>
      <List
        bordered={false}
        dataSource={props.data}
        render={(item, index) => (
          <List.Item key={index} className="hover:text-amber-700">
            <a href={`/post/${item.postId}`} target="_blank" rel="noreferrer">
              <h3 className="text-lg">{item.title}</h3>
              <p className="text-gray-500">{item.subtitle}</p>
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};
