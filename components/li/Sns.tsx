import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  href: string;
  src: string;
}

const Sns = ({ href, src }: Props) => {
  return (
    <li css={component}>
      <a href={href}>
        <img alt="" src={src} />
      </a>
    </li>
  );
};

const component = css`
  position: relative;

  &:nth-child(n + 2) {
    margin-left: 2rem;
  }

  & > a {
    display: block;
    text-decoration: none;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    width: 3rem;

    &:hover {
      transform: scale(1.1);
      text-decoration: none;
    }

    & > img {
      display: block;
      height: auto;
      width: 100%;
    }
  }

  ${mq.xl} {
    & > a {
      width: 3.3rem;
    }
  }

  ${mq.m} {
    &:nth-child(n + 2) {
      margin-left: 1.8rem;
    }

    & > a {
      width: 2.7rem;
    }
  }

  ${mq.xs} {
    &:nth-child(n + 2) {
      margin-left: 1.6rem;
    }

    & > a {
      width: 2.4rem;
    }
  }
`;

export default Sns;
