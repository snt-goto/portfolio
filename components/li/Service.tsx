import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  cont: string;
  src: string;
  tit: string;
}

const Service = ({ cont, src, tit }: Props) => {
  return (
    <li css={component}>
      <img alt="" src={src} />
      <h3>{tit}</h3>
      <p dangerouslySetInnerHTML={{ __html: cont }} />
    </li>
  );
};

const component = css`
  background-color: var(--white-transparent-80);
  box-shadow: 0px 0px 10px var(--black-transparent-20);
  padding: 2rem;
  position: relative;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  width: var(--three-column-2);

  &:hover {
    background-color: var(--white);
    box-shadow: 0px 0px 0px var(--transparent);
  }

  &:not(:nth-child(3n)) {
    margin-right: 2rem;
  }

  &:nth-child(n + 4) {
    margin-top: 2rem;
  }

  & > h3 {
    color: var(--color-2);
    font-family: var(--noto-sans-jp);
    font-size: 1.1rem;
    font-weight: 700;
    margin: 1.5rem 0 0.5rem;
    text-align: center;
  }

  & > img {
    display: block;
    height: auto;
    margin: 0 auto;
    width: 5rem;
  }

  & > p {
    color: var(--color-2);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6em;
  }

  ${mq.m} {
    padding: 1.8rem;
    width: var(--three-column-1);

    &:not(:nth-child(3n)) {
      margin-right: 1rem;
    }

    &:nth-child(n + 4) {
      margin-top: 1rem;
    }

    & > h3 {
      margin: 1.4rem 0 0.5rem;
    }

    & > img {
      width: 4.5rem;
    }
  }

  ${mq.s} {
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
      margin-top: 1rem;
    }
  }

  ${mq.xs} {
    width: 100%;

    &:not(:nth-child(2n)) {
      margin-right: 0;
    }

    &:nth-child(n + 3) {
      margin-top: 0;
    }

    &:nth-child(n + 2) {
      margin-top: 1rem;
    }
  }
`;

export default Service;
