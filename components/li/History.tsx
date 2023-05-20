import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  event: string;
  time: string;
}

const History = ({ event, time }: Props) => {
  return (
    <li css={component}>
      <p>{time}</p>
      <p>{event}</p>
    </li>
  );
};

const component = css`
  display: flex;
  position: relative;

  &:last-child {
    & > p {
      &:nth-child(1) {
        border-bottom: 1px solid var(--black-transparent-50);
      }

      &:nth-child(2) {
        border-bottom: 1px solid var(--white-transparent-80);
      }
    }
  }

  & > p {
    color: var(--color-2);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    padding: 1rem;

    &:nth-child(1) {
      border-top: 1px solid var(--black-transparent-50);
      font-weight: 700;
      flex-shrink: 0;
    }

    &:nth-child(2) {
      border-top: 1px solid var(--white-transparent-80);
      font-weight: 500;
      width: 100%;
    }
  }
`;

export default History;
