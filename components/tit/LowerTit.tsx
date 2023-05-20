import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  tit: string;
}

const LowerTit = ({ tit }: Props) => {
  return (
    <div css={component}>
      <h1>{tit}</h1>
    </div>
  );
};

const component = css`
  padding: 15rem 0 10rem;
  position: relative;
  text-align: center;

  & > h1 {
    color: var(--color-2);
    display: inline-block;
    font-family: var(--oswald);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    position: relative;

    &::after {
      background-color: var(--color-1);
      bottom: 0;
      content: '';
      right: 0;
      position: absolute;
      top: 0;
      animation-duration: 1s;
      animation-name: fideTit;
      animation-timing-function: ease-in;
    }
  }

  @keyframes fideTit {
    0% {
      left: 0;
    }

    100% {
      left: 100%;
    }
  }

  ${mq.xl} {
    & > h1 {
      font-size: 2.1rem;
    }
  }

  ${mq.l} {
    & > h1 {
      font-size: 1.9rem;
    }
  }

  ${mq.m} {
    padding: 13.5rem 0 9rem;

    & > h1 {
      font-size: 1.8rem;
    }
  }

  ${mq.s} {
    & > h1 {
      font-size: 1.7rem;
    }
  }

  ${mq.xs} {
    padding: 12rem 0 8rem;

    & > h1 {
      font-size: 1.6rem;
    }
  }
`;

export default LowerTit;
