import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {}

const SubmitBtn = ({}: Props) => {
  return (
    <button css={component}>
      <span>送信する</span>
    </button>
  );
};

const component = css`
  background-color: var(--white);
  border: 2px solid var(--color-2);
  border-radius: 50px;
  color: var(--color-2);
  display: block;
  font-size: 1.2rem;
  font-size: var(--noto-sans-jp);
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 4rem auto 0;
  overflow: hidden;
  padding: 0.8rem 0;
  position: relative;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  width: 20rem;

  &::after {
    background-color: var(--color-2);
    border-radius: 50%;
    content: '';
    left: 50%;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translateY(-50%);
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
  }

  &:hover {
    color: var(--white);

    &::after {
      left: 0;
      padding-bottom: 100%;
      right: 0;
    }
  }

  & > span {
    position: relative;
    z-index: 1;
  }

  ${mq.m} {
    border: 1.8px solid var(--color-2);
    width: 18rem;
  }

  ${mq.xs} {
    border: 1.6px solid var(--color-2);
    width: 16rem;
  }
`;

export default SubmitBtn;
