import { Avatar, Divider } from '@arco-design/web-react';
import ImBg from '@/assets/im-bg.png';
export const TeamIntroduction = () => {
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
          <img alt="avatar" src="https://picd.zhimg.com/v2-5d1f02a327b31694b8ae9214e6a109af_r.jpg" />
        </Avatar>
        <div className="flex flex-col justify-center my-auto mx-10">
          <h3 className="text-xl font-bold">季羡林</h3>
          <p>
            {
              '中国山东省聊城市临清人，字希逋，又字齐奘。民盟盟员、中共党员 。国际著名东方学大师、语言学家、文学家、国学家、佛学家、史学家、教育家和社会活动家。历任中国科学院哲学社会科学部委员、聊城大学名誉校长、北京大学副校长、中国社会科学院南亚研究所所长，是北京大学的终身教授，与饶宗颐并称为“南饶北季”。'
            }
          </p>
        </div>
      </div>
      <Divider />
      <div className="md:flex flex-wrap justify-center my-10">
        {Array(12).fill(
          <div className="flex flex-col justify-center basis-1/4 mx-7 md:mx-auto my-2 p-5">
            <Avatar size={120} className="shrink-0 mx-auto">
              <img alt="avatar" src="https://picd.zhimg.com/v2-5d1f02a327b31694b8ae9214e6a109af_r.jpg" />
            </Avatar>
            <h3 className="text-lg mx-auto my-2">季羡林</h3>
            <p>
              {
                '中国山东省聊城市临清人，字希逋，又字齐奘。民盟盟员、中共党员 。国际著名东方学大师、语言学家、文学家、国学家、佛学家、史学家'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
