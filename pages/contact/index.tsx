import { NextPage } from 'next';

import { LowerContact } from 'components/block';
import { Layout } from 'components/layout';

interface Props {}

const Contact: NextPage<Props> = ({}: Props) => {
  return (
    <>
      <Layout tit="CONTACT">
        <LowerContact />
      </Layout>
    </>
  );
};

export default Contact;
