import { WebsiteConfigure } from '@/config/website.config';
import { HomePage, HomePageProps } from '@/templates/HomePage';
import { GetStaticProps, NextPage } from 'next';

const Home: NextPage<HomePageProps> = (props) => {
  return <HomePage title={''} description={''} headline={{
    title: '',
    url: '',
    citation: undefined
  }} newPosts={[]} hotPosts={[]} landingImages={[]} carousel={[]} projectCard={{
    introduction: '',
    imageUrl: ''
  }} publishList={[]} teamCard={{
    leader: {
      title: '',
      avatarUrl: '',
      introduction: ''
    },
    members: []
  }}  />
}

export default Home;