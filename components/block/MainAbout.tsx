import { css } from '@emotion/react';

import { ScrollAnim } from 'components/anim';
import { Main, MaxWidth, Wrap } from 'components/frame';
import { FixedRadioImg } from 'components/img';
import { History } from 'components/li';
import { AboutTit, MainTit } from 'components/tit';

import { mq } from 'styles/media';

interface Props {}

const MainAbout = ({}: Props) => {
  const historyItems = [
    {
      event: '愛知県立豊田工業高等学校を卒業',
      time: '2015年03月'
    },
    {
      event: '大手自動車製造メーカーに入社',
      time: '2015年04月'
    },
    {
      event: '独学でプログラミングを学習開始',
      time: '2020年10月'
    },
    {
      event: 'Web制作IT企業に入社',
      time: '2021年04月'
    },
    {
      event: '個人でHP・LP制作、ECサイト制作を中心に活動開始',
      time: '2023年04月'
    }
  ];

  return (
    <Main>
      <div css={component} id="about">
        <MaxWidth>
          <Wrap width="80">
            <MainTit en="ABOUT" ja="私について" />
            <ScrollAnim>
              <div css={flex}>
                <div className="left" css={cont}>
                  <FixedRadioImg src="/img/main_about.jpg" />
                </div>
                <div className="right" css={cont}>
                  <AboutTit en="NAME" ja="名前" />
                  <p>
                    <strong>後藤 駿太（ごとう しゅんた）</strong>
                  </p>
                  <AboutTit en="LOCATION" ja="活動拠点" />
                  <p>
                    <strong>群馬県（出身は愛知県）</strong>
                  </p>
                  <AboutTit en="HISTORY" ja="経歴" />
                  <ul css={ulCss}>
                    {historyItems.map((i, n) => {
                      return <History event={i.event} key={n} time={i.time} />;
                    })}
                  </ul>
                  <AboutTit en="THOUGHT" ja="想い" />
                  <p>
                    私はクライアント様の想いを汲み取って、「あなただけのWebサイト」を真心込めて制作しております。
                    一切の妥協もせず、クライアント様に寄り添ってサイト制作のお手伝いをさせていただきます。
                    また、制作して終わりではなく、保守・運用しやすいサイト制作を心掛けております。
                    どんなご依頼にもプロ意識を持って請け負いさせていただきますので、ご安心してご依頼ください。
                  </p>
                </div>
              </div>
            </ScrollAnim>
          </Wrap>
        </MaxWidth>
      </div>
    </Main>
  );
};

const component = css`
  position: relative;
`;

const cont = css`
  width: var(--two-column-3);

  &.left {
    height: 30rem;
    position: relative;
  }

  &.right {
    & > p {
      color: var(--color-2);
      font-family: var(--noto-sans-jp);
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.6em;

      & > strong {
        font-weight: 700;
      }
    }
  }

  ${mq.xl} {
    &.left {
      height: 33rem;
    }
  }

  ${mq.m} {
    width: var(--two-column-2);

    &.left {
      height: 27rem;
    }
  }

  ${mq.s} {
    width: 100%;

    &.left {
      margin-bottom: 2.7rem;
    }
  }

  ${mq.xs} {
    &.left {
      height: 24rem;
      margin-bottom: 2.4rem;
    }
  }
`;

const flex = css`
  display: flex;
  justify-content: space-between;

  ${mq.s} {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const ulCss = css`
  list-style: none;
`;

export default MainAbout;
