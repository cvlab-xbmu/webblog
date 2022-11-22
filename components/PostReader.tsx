import { MDXRemote } from "next-mdx-remote";
import { PostReaderProps } from "./interface";

export const PostReader = (props: PostReaderProps) => {
  return (
    <div>
      <article className="p-5 my-2">
        <div className=" my-2">
          <h1 className="text-3xl font-bold my-1">{props.title}</h1>
          {props.subtitle && <div className="text-lg text-gray-600 my-1">{props.subtitle}</div>}
          {props.citation && <p className="text-md my-4 border-b border-t p-5 text-gray-500">{props.citation}</p>}
        </div>
        <div
          className="prose max-w-none p-5 prose-img:mx-auto prose-h1:text-3xl"
        >
          <article>
            <MDXRemote {...props.content} />
          </article>
        </div>
      </article>
    </div>
  );
};
