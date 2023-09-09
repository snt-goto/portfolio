import { css } from '@emotion/react';

import { ScrollAnim } from 'components/anim';
import { Main, MaxWidth, Wrap } from 'components/frame';
import { Work } from 'components/li';
import { MainTit } from 'components/tit';

interface Props {
  latestWorkItems: {
    src: string;
    tit: string;
    url: string;
  }[];
}

const MainWork = ({ latestWorkItems }: Props) => {
  return (
    <Main>
      <div css={component} id="work">
        <MaxWidth>
          <Wrap width="80">
            <MainTit en="WORK" ja="実績" />
            <ScrollAnim>
              <ul css={ulCss}>
                {latestWorkItems.map((i, n) => {
                  return <Work href={i.url} key={n} src={i.src} tit={i.tit} />;
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
`;

const ulCss = css`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export default MainWork;
