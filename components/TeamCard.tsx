import { Avatar, Divider } from '@arco-design/web-react';
import ImBg from '@/assets/im-bg.png';

export const TeamIntroduction = (props: {
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
}) => {
  return (
    <div className="py-2">
      <div className="flex justify-center my-2">
        <div
          className="text-xl px-2 py-2 font-bold text-white w-60 text-center rounded-md"
          style={{
            backgroundColor: 'rgb(146, 64, 14)',
            backgroundImage: `url(${ImBg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
          }}
        >
          {'团队介绍'}
        </div>
      </div>
      <div className="flex my-5">
        <Avatar size={120} className="shrink-0 my-auto">
          <img alt="avatar" src={props.leader.avatarUrl} />
        </Avatar>
        <div className="flex flex-col justify-center my-auto mx-10">
          <h3 className="text-xl font-bold">{props.leader.title}</h3>
          <p>{props.leader.introduction}</p>
        </div>
      </div>
      <Divider />
      <div className="md:flex flex-wrap justify-center my-10">
        {props.members.map((item, index) => <div className="flex flex-col justify-center basis-1/4 mx-7 md:mx-auto my-2 p-5" key={`team-member-${index}`}>
          <Avatar size={120} className="shrink-0 mx-auto">
            <img alt="avatar" src={item.avatarUrl} />
          </Avatar>
          <h3 className="text-lg mx-auto my-2">{item.title}</h3>
          <p>{item.introduction}</p>
        </div>)}
      </div>
    </div>
  );
};
