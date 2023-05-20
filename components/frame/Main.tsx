import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { mq } from 'styles/media';

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return <div css={component}>{children}</div>;
};

const component = css`
  padding-bottom: 7.5rem;
  position: relative;

  ${mq.m} {
    padding-bottom: 6.8rem;
  }

  ${mq.xs} {
    padding-bottom: 6.1rem;
  }
`;

export default Main;
