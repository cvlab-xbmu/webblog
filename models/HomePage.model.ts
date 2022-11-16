import { BlogColumns, Footer, OpenSourceLink } from "./utils.model";

export type HomePageModel = {
  title: string;
  landingImagesSrc: string[];

  blogColumns: BlogColumns;
  footer: Footer;

  NewPosts: {
    title: string;
    subtitle: string;
    postId: string;
  }[];

  Recommends: {
    title: string;
    subtitle: string;
    postId: string;
  }[];

  PublishList: {
    title: string;
    href?: string;
  }[];

  Carousel: {
    imageSrc: string;
    describe: string;
    href?: string;
  }[];

  ProjectCard: {
    introduction: string;
    openSourceLink: OpenSourceLink;
  };

  TeamCard: {
    leader: {
      title: string;
      avatarSrc: string;
      introduction: string;
      url?: string;
    };
    members: {
      title: string;
      avatarSrc: string;
      briefIntroduction: string;
      url?: string;
    }[];
  };
};
