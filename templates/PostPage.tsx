import { Footer } from "@/components/Footer";
import { Main } from "@/components/Layout";
import { NavPlain } from "@/components/NavPlain";
import { PostReader } from "@/components/PostReader";
import Head from "next/head";
export const PostPage = (props: { text: string }) => {
  return (
    <div className="">
      <Head>
        <title>西北民族大学 CVLAB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavPlain />
      <Main>
        <PostReader text={props.text} />
      </Main>
      <Footer />
    </div>
  );
};
