import { Carouser } from "@/components/Carouser";
import { Footer } from "@/components/Footer";
import { Headline } from "@/components/Headline";
import { HotPosts } from "@/components/HotPosts";
import { Col, Main, Row } from "@/components/Layout";
import { NavLanding } from "@/components/NavLanding";
import { NewPosts } from "@/components/NewPosts";
import { ProjectCard } from "@/components/ProjectCard";
import { PublishList } from "@/components/PublishList";
import { TeamIntroduction } from "@/components/TeamCard";
import { WebsiteConfigure } from "@/config/website.config";
import Head from "next/head";

export type HomePageProps = {
  title: string;
  description: string;
  headline: {
    title: string;
    url: string;
    citation?: string;
  };

  newPosts: {
    title: string;
    subtitle?: string;
    postId: string;
  }[];

  hotPosts: {
    title: string;
    subtitle?: string;
    postId: string;
  }[];

  landingImages: string[];

  carousel: {
    imageUrl: string;
    url: string;
  }[];

  projectCard: {
    introduction: string;
    imageUrl: string;
  }

  publishList: {
    title: string,
    url: string,
  }[];

  teamCard: {
    leader: {
      title: string;
      avatarUrl: string;
      introduction: string;
    };
    members: {
      title: string;
      avatarUrl: string;
      introduction: string;
    }[];
  }
}

export const HomePage = (props: HomePageProps) => {
  return (
    <div>
      <Head>
        <title>{WebsiteConfigure.title}</title>
        <meta name="description" content={WebsiteConfigure.describe} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavLanding aspect="screen" imageSrcs={WebsiteConfigure.landingImagesSrc} />
      <Main>
        <Headline
          title={props.headline.title}
          url={props.headline.url}
          citation={props.headline.citation} />
        <Row>
          <Col numerator={1} denominator={2}>
            <Carouser data={props.carousel} />
            <HotPosts data={props.hotPosts} />
          </Col>
          <Col numerator={1} denominator={2}>
            <NewPosts data={props.newPosts} />
            <PublishList data={props.publishList} />
          </Col>
        </Row>
        <ProjectCard
          introduction={props.projectCard.introduction}
          imageUrl={props.projectCard.imageUrl} />
        <TeamIntroduction leader={props.teamCard.leader} members={props.teamCard.members} />
      </Main>
      <Footer />
    </div>
  );
};
