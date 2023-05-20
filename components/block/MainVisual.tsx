import { css } from '@emotion/react';
import { useEffect } from 'react';

import { MaxWidth, Wrap } from 'components/frame';

import { mq } from 'styles/media';

interface Props {}

const MainVisual = ({}: Props) => {
  const h1Items = ['G', 'O', 'T', 'O', '', 'S', 'H', 'U', 'N', 'T', 'A'];

  useEffect(() => {
    const elem = document.getElementById('tit');

    addEventListener('scroll', () => {
      const height = window.outerHeight,
        scroll = window.scrollY;

      if (scroll <= height) {
        const ratio: number = Number((scroll / height).toFixed(2));
        elem!.style.opacity = String(1 - ratio * 2);
      } else {
        elem!.style.opacity = '0';
      }
    });
  });

  return (
    <div css={component}>
      <div css={tit} id="tit">
        <MaxWidth>
          <Wrap width="90">
            <h1>
              {h1Items.map((i, n) => {
                return i ? <span key={n}>{i}</span> : ' ';
              })}
            </h1>
          </Wrap>
        </MaxWidth>
      </div>
      <MaxWidth>
        <Wrap width="90">
          <div css={scroll}>
            <p>SCROLL</p>
            <span />
          </div>
        </Wrap>
      </MaxWidth>
    </div>
  );
};

const component = css`
  height: 100vh;
  padding: var(--header-padding);
  pointer-events: none;
  position: relative;

  ${mq.m} {
    padding: var(--header-padding_mq-m);
  }

  ${mq.xs} {
    padding: var(--header-padding_mq-xs);
  }
`;

const scroll = css`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;

  & > p {
    color: var(--color-3);
    font-family: var(--oswald);
    font-size: 0.8rem;
    font-weight: 300;
    margin-bottom: 0.4rem;
    writing-mode: vertical-rl;
  }

  & > span {
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

const tit = css`
  left: 0;
  opacity: 1;
  position: fixed;
  right: 0;
  top: 30%;

  & h1 {
    color: var(--color-2);
    font-family: var(--oswald);
    font-size: min(6vw, 6rem);
    font-weight: 700;
    overflow: hidden;
    position: relative;

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

  ${mq.l} {
    & h1 {
      font-size: 7.5vw;
    }
  }

  ${mq.m} {
    & h1 {
      font-size: 9vw;
    }
  }

  ${mq.s} {
    & h1 {
      font-size: 10.5vw;
    }
  }

  ${mq.xs} {
    & h1 {
      font-size: 12vw;
    }
  }
`;

export default MainVisual;
