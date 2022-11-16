import ImBg from "@/assets/im-bg.png";
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
        />
      </div>
      <p className="text-lg">
        {
          "清华大学宽带电力线通信(PowerlineCommunication，PLC)技术方案和系统设计。与已有的方案不同的是:本方案的核心技术将采用具有自主知识产权的时域同步正交频分复用(TDS一OFDM)技术，在保证技术先进性的同时，为国内相关企业提供一定的技术保障壁垒，在产业传输之初能够有效避免国外公司的竞争。清华大学在与美国波音公司合作进行的研究中，已经完成了系统方案设计、关键技术研究、系统的FPGA验证。目前，正在与国家电网合作进行PLC组网技术研发。本项目合作方向包括PLC专用芯片设计、PLC家庭网络产品等。"
        }
      </p>
      <div className="my-5 flex justify-end">
        <Button type="primary" size="large" className="mx-3">
          开始尝试
        </Button>
        <Button size="large" className="mx-3">
          Github
        </Button>
        <Button size="large" className="mx-3">
          Gitee
        </Button>
      </div>
    </div>
  );
};
