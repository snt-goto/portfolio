import { css } from '@emotion/react';

import { ScrollAnim } from 'components/anim';

import { mq } from 'styles/media';

interface Props {
  en: string;
  ja: string;
}

const MainTit = ({ en, ja }: Props) => {
  return (
    <ScrollAnim>
      <div css={component}>
        <div css={cont}>
          <h2>{en}</h2>
          <p>{ja}</p>
        </div>
      </div>
    </ScrollAnim>
  );
};

const component = css`
  margin-bottom: 1.5rem;
  position: relative;
  text-align: center;

  ${mq.m} {
    margin-bottom: 1.4rem;
  }

  ${mq.s} {
    text-align: center;
  }

  ${mq.xs} {
    margin-bottom: 1.3rem;
  }
`;

const cont = css`
  display: inline-block;
  position: relative;

  & > h2 {
    color: var(--white-transparent-50);
    font-family: var(--oswald);
    font-size: 5rem;
    font-weight: 700;
    margin-left: auto;
  }

  & > p {
    color: var(--black);
    font-family: var(--noto-sans-jp);
    font-size: 1.8rem;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }

  ${mq.xl} {
    & > h2 {
      font-size: 5.2rem;
    }

    & > p {
      font-size: 1.9rem;
    }
  }

  ${mq.l} {
    & > h2 {
      font-size: 4.8rem;
    }

    & > p {
      font-size: 1.7rem;
    }
  }

  ${mq.m} {
    & > h2 {
      font-size: 4.6rem;
    }

    & > p {
      font-size: 1.6rem;
    }
  }

  ${mq.s} {
    & > h2 {
      font-size: 4.4rem;
    }

    & > p {
      font-size: 1.5rem;
    }
  }

  ${mq.xs} {
    & > h2 {
      font-size: 4.2rem;
    }

    & > p {
      font-size: 1.4rem;
    }
  }
`;

export default MainTit;
