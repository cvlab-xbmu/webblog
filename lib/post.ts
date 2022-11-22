import { parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import externalLinks from "remark-external-links";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import prism from "remark-prism";

interface MatterMark {
  data: { date: string; title: string };
  content: string;
  [key: string]: unknown;
}

const postsDirectory = path.join(process.cwd(), "data");

const fileNames = fs.readdirSync(postsDirectory);

export function getSortedPostsData() {
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...(matterResult.data as MatterMark["data"]),
    };
  });
  return allPostsData.sort(({ date: a }, { date: b }) =>
    parseISO(a) < parseISO(b) ? 1 : -1
  );
}

export function getAllPostIds() {
  return fileNames.map((fileName) => {
    return {
      params: {
        postId: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    content: await serialize(matterResult.content, {
      mdxOptions: {
        remarkPlugins: [prism, externalLinks, remarkMath, remarkGfm],
        rehypePlugins: [rehypeKatex, rehypeSlug, rehypeAutoLinkHeadings],
      },
    }),
    ...(matterResult.data as MatterMark["data"]),
  };
}
