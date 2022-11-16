export type HeadlineModel = {
  title: string;
  subtitle?: string;
  href: string;
};

export type PostListModel = {
  title: string;
  subtitle: string;
  author: string;
  timestamp: string;
  postId: string;
}[];

export type PublishListModel = {
  title: string;
  href?: string;
}[];

export type CarouselModel = {
  imageSrc: string;
  describe: string;
  href?: string;
}[];

export type ColumnListModel = {
  title: string;
  columnId: string;
}[];

export type ProjectCardModel = {

};
