import { NextPage } from 'next';

import { MainAbout, MainContact, MainPrice, MainService, MainSkill, MainVisual, MainWork } from 'components/block';
import { Layout } from 'components/layout';

interface Props {}

const Home: NextPage<Props> = ({}: Props) => {
  return (
    <>
      <Layout>
        <MainVisual />
        <MainService />
        <MainPrice />
        <MainAbout />
        <MainSkill />
        <MainContact />
      </Layout>
    </>
  );
};

export default Home;
