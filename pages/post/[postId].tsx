import { PostPage } from "@/templates/PostPage";
import fs from "fs";

export default function Post(props: { text: string }) {
  return <PostPage text={props.text} />;
}

export const getServerSideProps = async () => {
  const aa = fs.readFileSync("posts/test.html", { encoding: "utf-8" });
  return {
    props: {
      text: aa,
    },
  };
};
