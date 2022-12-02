import ImBg from "@/assets/im-bg.png";
import { WebsiteConfigure } from "@/config/website.config";
import { Button } from "@arco-design/web-react";

export const ProjectCard = (
  props: {
    introduction: string;
    imageUrl: string;
    github?: string;
    gitee?: string;
  }) => {
  return (
    <div className="border-t-2 border-b-2 border-amber-700 py-2">
      <div className="my-2 flex justify-center">
        <div
          className="w-60 rounded-md px-2 py-2 text-center text-xl font-bold text-white"
          style={{
            backgroundColor: "rgb(146, 64, 14)",
            backgroundImage: `url(${ImBg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
          }}
        >
          {"项目介绍"}
        </div>
      </div>
      <div className="my-2 flex justify-center">
        <img
          src={props.imageUrl}
          className="w-full aspect-5/1 rounded-md object-cover"
          alt="xbmu-cvlab-project"
        />
      </div>
      <p className="text-lg">{props.introduction}</p>
      <div className="my-5 flex justify-end">
        <Button type="primary" size="large" className="mx-3" href="/display">{"开始尝试"}</Button>
        {props.github && <Button size="large" className="mx-3" href={props.github}>{"Github"}</Button>}
        {props.gitee && <Button size="large" className="mx-3" href={props.gitee}>{"Gitee"}</Button>}
      </div>
    </div>
  );
};
