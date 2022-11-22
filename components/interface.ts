import { MDXRemoteProps } from "next-mdx-remote";

export type NavLandingProps = {
  aspect: "screen" | "half";
  title?: string;
  imageSrcs?: string[];
};

export type PostReaderProps = {
  title: string;
  author?: string;
  subtitle?: string;
  citation?: string;
  content: MDXRemoteProps;
};

export type PostsListProps = {
  data: {
    title: string;
    subtitle?: string;
    author?: string;
    timestmp: string;
    postId: string;
  }[];
};
