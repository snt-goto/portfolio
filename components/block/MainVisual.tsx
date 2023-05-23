import { css } from '@emotion/react';
import Link from 'next/link';

import { MaxWidth, Wrap } from 'components/frame';

import { mq } from 'styles/media';

interface Props {}

const MainVisual = ({}: Props) => {
  const h1Items = ['G', 'O', 'T', 'O', '', 'S', 'H', 'U', 'N', 'T', 'A'],
    pItems = ['あ', 'な', 'た', 'だ', 'け', 'の', 'W', 'e', 'b', 'サ', 'イ', 'ト', 'を'];

  return (
    <div css={component}>
      <img alt="" src="/img/main_visual_bg.svg" />
      <div css={cont}>
        <MaxWidth>
          <Wrap width="90">
            <h1>
              {h1Items.map((i, n) => {
                return i ? <span key={n}>{i}</span> : ' ';
              })}
            </h1>
            <p>
              {pItems.map((i, n) => {
                return <span key={n}>{i}</span>;
              })}
            </p>
            <Link href="/contact">ご連絡はこちら</Link>
          </Wrap>
        </MaxWidth>
      </div>
      <div css={scroll}>
        <MaxWidth>
          <Wrap width="90">
            <div css={scrollCont}>
              <p>SCROLL</p>
              <span />
            </div>
          </Wrap>
        </MaxWidth>
      </div>
    </div>
  );
};

const component = css`
  height: 100vh;
  margin-bottom: 5rem;
  overflow: hidden;
  pointer-events: none;
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    content: '';
    background: var(--radial-gradient-1);
  }

  & > img {
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-name: imgRevolution;
    animation-timing-function: linear;
    display: block;
    height: auto;
    left: 50%;
    position: absolute;
    top: 50%;
    width: 100%;

    @keyframes imgRevolution {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }

      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }

  ${mq.l} {
    & > img {
      width: 150%;
    }
  }

  ${mq.m} {
    margin-bottom: 4.5rem;

    & > img {
      width: 200%;
    }
  }

  ${mq.s} {
    & > img {
      width: 250%;
    }
  }

  ${mq.xs} {
    margin-bottom: 4rem;

    & > img {
      width: 300%;
    }
  }
`;

const cont = css`
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  & a {
    animation-delay: 3.9s;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    animation-name: displayBtn;
    animation-timing-function: ease-in-out;
    background-color: var(--color-2);
    color: var(--white);
    display: block;
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 500;
    margin: 0 auto;
    padding: 0.6rem 0;
    pointer-events: auto;
    position: relative;
    text-decoration: none;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    transform: scale(0);
    width: 15rem;

    &:hover {
      background-color: var(--white);
      color: var(--color-2);
      letter-spacing: 0.1em;
      text-decoration: none;
    }

    @keyframes displayBtn {
      0% {
        opacity: 0;
        transform: scale(0);
      }

      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  & h1 {
    color: var(--color-2);
    font-family: var(--oswald);
    font-size: min(8vw, 8rem);
    font-weight: 700;
    overflow: hidden;

    & > span {
      display: inline-block;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-name: moveTit;
      animation-timing-function: ease-in-out;
      transform: translateY(100%);

      &:nth-child(2) {
        animation-delay: 0.1s;
      }

      &:nth-child(3) {
        animation-delay: 0.2s;
      }

      &:nth-child(4) {
        animation-delay: 0.3s;
      }

      &:nth-child(5) {
        animation-delay: 0.4s;
      }

      &:nth-child(6) {
        animation-delay: 0.5s;
      }

      &:nth-child(7) {
        animation-delay: 0.6s;
      }

      &:nth-child(8) {
        animation-delay: 0.7s;
      }

      &:nth-child(9) {
        animation-delay: 0.8s;
      }

      &:nth-child(10) {
        animation-delay: 0.9s;
      }

      @keyframes moveTit {
        0% {
          transform: translateY(100%);
        }

        100% {
          transform: translateY(0%);
        }
      }
    }
  }

  & p {
    color: var(--color-2);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6em;
    margin: 0.2rem 0 2rem;

    & > span {
      animation-duration: 0.8s;
      animation-fill-mode: forwards;
      animation-name: displayText;
      animation-timing-function: ease-in-out;
      border: 1px solid var(--color-2);
      display: inline-block;
      height: 1.8rem;
      opacity: 0;
      width: 1.8rem;

      &:nth-child(n + 2) {
        margin-left: 0.1rem;
      }

      &:nth-child(1) {
        animation-delay: 1.9s;
      }

      &:nth-child(2) {
        animation-delay: 2s;
      }

      &:nth-child(3) {
        animation-delay: 2.1s;
      }

      &:nth-child(4) {
        animation-delay: 2.2s;
      }

      &:nth-child(5) {
        animation-delay: 2.3s;
      }

      &:nth-child(6) {
        animation-delay: 2.4s;
      }

      &:nth-child(7) {
        animation-delay: 2.5s;
      }

      &:nth-child(8) {
        animation-delay: 2.6s;
      }

      &:nth-child(9) {
        animation-delay: 2.7s;
      }

      &:nth-child(10) {
        animation-delay: 2.8s;
      }

      &:nth-child(11) {
        animation-delay: 2.9s;
      }

      &:nth-child(12) {
        animation-delay: 3s;
      }
      &:nth-child(13) {
        animation-delay: 3.1s;
      }

      @keyframes displayText {
        0% {
          opacity: 0;
          transform: rotate(0deg);
        }

        100% {
          opacity: 1;
          transform: rotate(360deg);
        }
      }
    }
  }

  ${mq.l} {
    & h1 {
      font-size: 9.5vw;
    }
  }

  ${mq.m} {
    & a {
      width: 13.5rem;
    }

    & h1 {
      font-size: 11vw;
    }

    & p {
      line-height: 1.5em;
      margin: 0.2rem 0 1.8rem;

      & > span {
        height: 1.7rem;
        width: 1.7rem;
      }
    }
  }

  ${mq.s} {
    & h1 {
      font-size: 12.5vw;
    }
  }

  ${mq.xs} {
    & a {
      width: 12rem;
    }

    & h1 {
      font-size: 14vw;
    }

    & p {
      line-height: 1.4em;
      margin: 0.2rem 0 1.6rem;

      & > span {
        height: 1.6rem;
        width: 1.6rem;
      }
    }
  }
`;

const scroll = css`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--header-padding);
  position: absolute;
  z-index: 1;

  ${mq.m} {
    padding: var(--header-padding_mq-m);
  }

  ${mq.xs} {
    padding: var(--header-padding_mq-xs);
  }
`;

const scrollCont = css`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  z-index: 1;

  & p {
    color: var(--color-3);
    font-family: var(--oswald);
    font-size: 0.8rem;
    font-weight: 300;
    margin-bottom: 0.4rem;
    writing-mode: vertical-rl;
  }

  & span {
    display: block;
    height: 4rem;
    overflow: hidden;
    position: relative;
    width: 1px;

    &::after {
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-name: scrollLine;
      animation-timing-function: ease-in-out;
      background-color: var(--color-3);
      content: '';
      height: 1rem;
      position: absolute;
      width: 100%;
    }

    @keyframes scrollLine {
      0% {
        top: 0;
        transform: translateY(-100%);
      }

      100% {
        top: 100%;
        transform: translateY(0);
      }
    }
  }
`;

export default MainVisual;
