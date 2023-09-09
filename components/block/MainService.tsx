import { css } from '@emotion/react';

import { ScrollAnim } from 'components/anim';
import { Main, MaxWidth, Wrap } from 'components/frame';
import { Service } from 'components/li';
import { MainTit } from 'components/tit';

interface Props {}

const MainService = ({}: Props) => {
  const serviceItems = [
    {
      cont: '1ページ単位からのコーディング、WordPressの構築のみもお受けいたします。また、W3Cに準拠したコーディング、保守運用がしやすいWordPressの構築を行い、管理しやすいWebサイトを制作いたします。',
      src: '/img/web.svg',
      tit: 'LP・HP制作'
    },
    {
      cont: '「EC-CUBE」というプラットフォームを利用したECサイトの構築を行っております。お客様のご希望に合ったテーマの選定とカスタマイズなど、柔軟にご対応いたします。',
      src: '/img/ec.svg',
      tit: 'ECサイト制作'
    },
    {
      cont: '「kintone」というノーコードツールを利用したアプリ開発を行っております。また、「JavaScript」を利用して、オリジナルアプリを作成することも可能です。',
      src: '/img/ec.svg',
      tit: 'kintoneアプリ開発'
    }
  ];

  return (
    <Main>
      <div css={component} id="service">
        <MaxWidth>
          <Wrap width="80">
            <MainTit en="SERVICE" ja="サービス" />
            <ScrollAnim>
              <ul>
                {serviceItems.map((i, n) => {
                  return <Service cont={i.cont} key={n} src={i.src} tit={i.tit} />;
                })}
              </ul>
            </ScrollAnim>
          </Wrap>
        </MaxWidth>
      </div>
    </Main>
  );
};

const component = css`
  position: relative;

  & ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
`;

export default MainService;
