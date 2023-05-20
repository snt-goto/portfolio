import { css } from '@emotion/react';
import Link from 'next/link';

import { mq } from 'styles/media';

interface Props {}

const MainContact = ({}: Props) => {
  return (
    <div css={component}>
      <Link href="/contact">CONTACT</Link>
    </div>
  );
};

const component = css`
  align-items: center;
  background-color: var(--black-transparent-10);
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;

  & > a {
    color: var(--white);
    display: inline-block;
    font-family: var(--oswald);
    font-weight: 700;
    letter-spacing: 0.1em;
    padding: 0.5rem 0.1rem;
    position: relative;
    text-decoration: none;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;

    &:hover {
      letter-spacing: 0.5em;
      text-decoration: none;
    }

    &::after {
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-name: flowingLine;
      animation-timing-function: ease-in-out;
      background-color: var(--white);
      bottom: 0;
      content: '';
      height: 2px;
      position: absolute;
    }

    @keyframes flowingLine {
      0% {
        left: 0;
        right: 100%;
      }

      50% {
        left: 0;
        right: 0;
      }

      100% {
        left: 100%;
        right: 0;
      }
    }
  }

  ${mq.xl} {
    & > a {
      &::after {
        height: 2.2px;
      }
    }
  }

  ${mq.m} {
    & > a {
      &::after {
        height: 1.8px;
      }
    }
  }

  ${mq.xs} {
    & > a {
      &::after {
        height: 1.6px;
      }
    }
  }
`;

export default MainContact;
