import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  en: string;
  ja: string;
}

const AboutTit = ({ en, ja }: Props) => {
  return (
    <div css={component}>
      <h3>{ja}</h3>
      <p>{en}</p>
    </div>
  );
};

const component = css`
  align-items: flex-end;
  display: flex;
  margin-bottom: 1rem;
  position: relative;

  &:nth-child(n + 2) {
    margin-top: 2.5rem;
  }

  & > h3 {
    color: var(--color-2);
    font-family: var(--noto-sans-jp);
    font-size: 1.2rem;
    font-weight: 700;
    margin-right: 1rem;
  }

  & > p {
    color: var(--color-4);
    font-family: var(--oswald);
    font-size: 1rem;
    font-weight: 700;
  }

  ${mq.m} {
    &:nth-child(n + 2) {
      margin-top: 2.3rem;
    }
  }

  ${mq.xs} {
    &:nth-child(n + 2) {
      margin-top: 2.1rem;
    }
  }
`;

export default AboutTit;
