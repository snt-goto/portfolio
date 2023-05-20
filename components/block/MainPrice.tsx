import { css } from '@emotion/react';

import { ScrollAnim } from 'components/anim';
import { Main, MaxWidth, Wrap } from 'components/frame';
import { PriceTable } from 'components/table';
import { MainTit } from 'components/tit';

interface Props {}

const MainPrice = ({}: Props) => {
  const priceTableItems = [
    {
      menu: 'コーディング(TOP)',
      price: 10000
    },
    {
      menu: 'コーディング(下層)',
      price: 20000
    },
    {
      menu: 'ランディングページ作成',
      price: 50000
    },
    {
      menu: 'WordPress導入',
      price: 50000
    },
    {
      menu: 'コーポレートサイト制作(テンプレ使用)',
      price: 100000
    },
    {
      menu: 'コーポレートサイト制作(オリジナル)',
      price: 220000
    },
    {
      menu: 'ECサイト制作',
      price: 250000
    },
    {
      menu: '既存サイトレスポンジブ化',
      price: 100000
    }
  ];

  return (
    <Main>
      <div css={component} id="price">
        <MaxWidth>
          <Wrap width="80">
            <MainTit en="PRICE" ja="料金" />
            <ScrollAnim>
              <PriceTable priceTableItems={priceTableItems} />
              <p css={pCss}>
                上記金額は目安になります。
                <br />
                詳細はお問い合わせしてご確認ください。
              </p>
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

const pCss = css`
  color: var(--color-2);
  font-family: var(--noto-sans-jp);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6em;
  margin-top: 1.2rem;
  text-align: center;
`;

export default MainPrice;
