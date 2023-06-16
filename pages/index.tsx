import { GetStaticProps, NextPage } from 'next';

import { MainAbout, MainContact, MainPrice, MainService, MainSkill, MainVisual, MainWork } from 'components/block';
import { Layout } from 'components/layout';

import { getLatestWorkItems } from 'lib';

interface Props {
  latestWorkItems: {
    src: string;
    tit: string;
    url: string;
  }[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const latestWorkItems = await getLatestWorkItems();

  return {
    props: { latestWorkItems }
  };
};

const Home: NextPage<Props> = ({ latestWorkItems }: Props) => {
  return (
    <Layout>
      <MainVisual />
      <MainWork latestWorkItems={latestWorkItems} />
      <MainService />
      <MainPrice />
      <MainAbout />
      <MainSkill />
      <MainContact />
    </Layout>
  );
};

export default Home;
