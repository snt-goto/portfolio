import { css } from '@emotion/react';

import { ScrollAnim } from 'components/anim';
import { Main, MaxWidth, Wrap } from 'components/frame';
import { Work } from 'components/li';
import { MainTit } from 'components/tit';

interface Props {}

const MainWork = ({}: Props) => {
  const workItems = [
    {
      href: 'https://snt-goto.com/',
      src: '/img/work_1.jpg',
      tit: 'GOTO SHUNTA PORTFOLIO'
    }
  ];

  return (
    <Main>
      <div css={component} id="work">
        <MaxWidth>
          <Wrap width="80">
            <MainTit en="WORK" ja="実績" />
            <ScrollAnim>
              <ul css={ulCss}>
                {workItems.map((i, n) => {
                  return <Work href={i.href} key={n} src={i.src} tit={i.tit} />;
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
  list-style: none;
`;

export default MainWork;
