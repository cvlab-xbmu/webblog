import ImBg from "@/assets/im-bg.png";
import { WebsiteConfigure } from "@/config/website.config";
import { Button } from "@arco-design/web-react";

export const ProjectCard = () => {
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
          src={"/images/project-intro-bg.png"}
          className="w-full aspect-5/1 rounded-md object-cover"
          alt="xbmu-cvlab-project"
        />
      </div>
      <p className="text-lg">{WebsiteConfigure.projectCard.introduction}</p>
      <div className="my-5 flex justify-end">
        <Button type="primary" size="large" className="mx-3">{"开始尝试"}</Button>
        <Button size="large" className="mx-3" href={WebsiteConfigure.openSourceLink.github}>{"Github"}</Button>
        <Button size="large" className="mx-3" href={WebsiteConfigure.openSourceLink.gitee}>{"Gitee"}</Button>
      </div>
    </div>
  );
};
