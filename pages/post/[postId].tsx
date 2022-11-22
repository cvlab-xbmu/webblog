import { getAllPostIds, getPostData } from '@/lib/post';
import { MDXRemoteProps } from 'next-mdx-remote';
import { PostPage } from '@/templates/PostPage';
import type { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  postData: {
    title: string;
    date: string;
    content: MDXRemoteProps;
  };
}

export default function Post({ postData }: Props) {
  return (
    <PostPage postTitle={postData.title} content={postData.content} />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.postId as string);
  return {
    props: {
      postData,
    },
  };
};