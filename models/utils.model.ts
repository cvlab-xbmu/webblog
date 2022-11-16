export type Footer = {
  icp: string;
  poweredBy: string;
  yearStart: string;
  copyright: string;
  friends: {
    title: string;
    url: string;
    describe: string;
  }[];
  openSourceLink?: OpenSourceLink;
  contact: {
    email?: string;
    phone: string;
  };
};

export type BlogColumns = {
  title: string;
  columnId: string;
}[];

export type OpenSourceLink = {
  github: string;
  gitee: string;
};
