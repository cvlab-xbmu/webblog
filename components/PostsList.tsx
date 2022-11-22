import { List } from "@arco-design/web-react";
import { PostsListProps } from "./interface";

export const PostsList = (props: PostsListProps) => {
  return (
    <div className="px-5">
      <List
        bordered={false}
        dataSource={props.data ?? []}
        render={(item, index) => (
          <List.Item key={index} className="my-3 cursor-pointer">
            <a className="hover:text-amber-700" href="/post/example">
              <h3 className="text-xl">{item.title}</h3>
              <h4 className="text-gray-500">{item.subtitle}</h4>
              <div className="flex justify-between text-gray-500 my-1">
                <div>{(new Date(item.timestmp)).getDate()}</div>
                <div>{item.author}</div>
              </div>
            </a>
          </List.Item>
        )}
      />
    </div>
  );
};
