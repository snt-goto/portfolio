import { css } from '@emotion/react';
import { ReactNode } from 'react';

import { mq } from 'styles/media';

interface Props {
  children: ReactNode;
  width: string;
}

const Wrap = ({ children, width }: Props) => {
  return (
    <div className={`width-${width}`} css={component}>
      {children}
    </div>
  );
};

const component = css`
  height: 100%;
  margin: 0 auto;
  position: relative;

  &.width-70 {
    width: 70%;
  }

  &.width-80 {
    width: 80%;
  }

  &.width-90 {
    width: 90%;
  }

  ${mq.m} {
    &.width-70 {
      width: 80%;
    }

    &.width-80 {
      width: 85%;
    }
  }

  ${mq.xs} {
    &.width-70 {
      width: 90%;
    }

    &.width-80 {
      width: 90%;
    }
  }
`;

export default Wrap;
