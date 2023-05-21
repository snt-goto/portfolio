import { css } from '@emotion/react';

import { FixedRadioImg } from 'components/img';

import { mq } from 'styles/media';

interface Props {
  href: string;
  src: string;
  tit: string;
}

const Work = ({ href, src, tit }: Props) => {
  return (
    <li css={component}>
      <a href={href} rel="noopener noreferrer" target="_blank">
        <FixedRadioImg alt="" src={src} />
        <p>{tit}</p>
      </a>
    </li>
  );
};

const component = css`
  position: relative;
  width: var(--three-column-2);

  &:not(:nth-child(3n)) {
    margin-right: 2rem;
  }

  &:nth-child(n + 4) {
    margin-right: 2rem;
  }

  & > a {
    display: block;
    padding-bottom: 75%;
    position: relative;
    text-decoration: none;
    width: 100%;

    &::after {
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }

    &:hover {
      text-decoration: none;

      &::after {
        background-color: var(--black-transparent-80);
      }

      & > p {
        opacity: 1;
      }
    }

    & > p {
      align-items: center;
      bottom: 0;
      color: var(--white);
      display: flex;
      font-family: var(--noto-sans-jp);
      font-size: 1rem;
      font-weight: 500;
      justify-content: center;
      left: 0;
      opacity: 0;
      padding: 1rem;
      position: absolute;
      right: 0;
      text-align: center;
      top: 0;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
      z-index: 1;
    }
  }

  ${mq.m} {
    width: var(--three-column-1);

    &:not(:nth-child(3n)) {
      margin-right: 1rem;
    }

    &:nth-child(n + 4) {
      margin-top: 1rem;
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

export default Work;
