import { Divider } from "@arco-design/web-react";
import fs from "fs";

export const PostReader = (props: { text: string }) => {
  return (
    <div>
      <article className="p-5 my-2">
        <div className="px-2">
          <h1 className="text-3xl font-bold">
            The Idea For Doing Capture In WebDom Object
          </h1>
          <p className="text-lg">The Idea For Doing Capture In WebDom Object</p>
        </div>
        <Divider />
        <div
          className="prose max-w-none p-5"
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></div>
      </article>
    </div>
  );
};
