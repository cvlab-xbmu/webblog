import { Footer } from "@/components/Footer";
import { NavLanding } from "@/components/NavLanding";
import { Main } from "@/components/Layout";
import { PostsList } from "@/components/PostsList";
import Head from "next/head";

export const BlogListPage = () => {
  return (
    <div className="">
      <Head>
        <title>CVLAB | 学术博客</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavLanding title="学术博客" aspect="half" />
      <Main>
        <PostsList data={[]} />
      </Main>
      <Footer />
    </div>
  );
};