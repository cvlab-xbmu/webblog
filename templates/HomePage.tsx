import { Footer } from "@/components/Footer";
import { Headline } from "@/components/Headline";
import { Carouser } from "@/components/Carouser";
import { NavLanding } from "@/components/NavLanding";
import { Col, Main, Row } from "@/components/Layout";
import { NewPosts } from "@/components/NewPosts";
import { ProjectCard } from "@/components/ProjectCard";
import { PublishList } from "@/components/PublishList";
import { TeamIntroduction } from "@/components/TeamCard";
import Head from "next/head";

export const HomePage = () => {
  return (
    <div className="">
      <Head>
        <title>西北民族大学 CVLAB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavLanding aspect="screen" />
      <Main>
        <Headline />
        <Row>
          <Col numerator={1} denominator={2}>
            <Carouser />
            <NewPosts />
          </Col>
          <Col numerator={1} denominator={2}>
            <NewPosts />
            <PublishList />
          </Col>
        </Row>
        <ProjectCard />
        <TeamIntroduction />
      </Main>
      <Footer />
    </div>
  );
};
