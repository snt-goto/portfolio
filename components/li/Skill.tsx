import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  kind: string;
  level: number;
  src: string;
}

const Skill = ({ kind, level, src }: Props) => {
  return (
    <li css={component}>
      <img alt="" src={src} />
      <p>{kind}</p>
      <ul css={ulCss}>
        {[...Array(5)].map((_, n) => {
          return n + 1 <= level ? (
            <li key={n}>
              <img alt="" src="/img/star.svg" />
            </li>
          ) : (
            <li key={n}>
              <img alt="" src="/img/star_white.svg" />
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const component = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  width: var(--five-column-2);

  &:not(:nth-child(5n)) {
    margin-right: 2rem;
  }

  &:nth-child(n + 6) {
    margin-top: 3rem;
  }

  & > img {
    display: block;
    height: 3rem;
    width: auto;
  }

  & > p {
    color: var(--color-2);
    font-size: 1.2rem;
    font-family: var(--oswald);
    font-weight: 700;
    margin: 0.5rem 0;
  }

  ${mq.xl} {
    & > img {
      height: 3.3rem;
    }
  }

  ${mq.m} {
    width: var(--four-column-1_5);

    &:not(:nth-child(5n)) {
      margin-right: 0;
    }

    &:nth-child(n + 6) {
      margin-top: 0;
    }

    &:not(:nth-child(4n)) {
      margin-right: 1.5rem;
    }

    &:nth-child(n + 5) {
      margin-top: 2.7rem;
    }

    & > img {
      height: 2.7rem;
    }
  }

  ${mq.s} {
    width: var(--three-column-1_5);

    &:not(:nth-child(4n)) {
      margin-right: 0;
    }

    &:nth-child(n + 5) {
      margin-top: 0;
    }

    &:not(:nth-child(3n)) {
      margin-right: 1.5rem;
    }

    &:nth-child(n + 4) {
      margin-top: 2.7rem;
    }
  }

  ${mq.xs} {
    width: var(--two-column-1);

    &:not(:nth-child(3n)) {
      margin-right: 0;
    }

    &:nth-child(n + 4) {
      margin-top: 0;
    }

    &:not(:nth-child(2n)) {
      margin-right: 1rem;
    }

    &:nth-child(n + 3) {
      margin-top: 2.4rem;
    }

    & > img {
      height: 2.4rem;
    }
  }
`;

const ulCss = css`
  display: flex;
  list-style: none;

  & img {
    display: block;
    height: auto;
    width: 100%;
  }

  & li {
    width: 1rem;

    &:nth-child(n + 2) {
      margin-left: 0.2rem;
    }
  }
`;

export default Skill;
