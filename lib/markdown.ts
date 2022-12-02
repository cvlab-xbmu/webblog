import externalLinks from 'remark-external-links';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import prism from 'remark-prism';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { parseISO } from 'date-fns';
import { serialize } from 'next-mdx-remote/serialize';

interface MatterMark {
  frontMatter: { date: string; title: string };
  content: string;
}

const postsDirectory = path.join(process.cwd(), "data/posts");

const fileNames = fs.readdirSync(postsDirectory);

export function getSortedPostsData() {
  const allPostsData = fileNames.map((fileName) => {
    const id = path. fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...(matterResult.data as MatterMark["frontMatter"]),
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
    ...(matterResult.data as MatterMark["frontMatter"]),
  };
}

/**
 * 在一级目录上，可归于一级栏目：
 *  * 遇到二级目录，则可归到二级栏目中
 *  * 遇到二级文件，则可归到
 */