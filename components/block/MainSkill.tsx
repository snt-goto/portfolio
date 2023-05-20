import { css } from '@emotion/react';

import { ScrollAnim } from 'components/anim';
import { Main, MaxWidth, Wrap } from 'components/frame';
import { Skill } from 'components/li';
import { MainTit } from 'components/tit';

interface Props {}

const MainSkill = ({}: Props) => {
  const skillItems = [
    {
      kind: 'HTML',
      level: 5,
      src: '/img/html.svg'
    },
    {
      kind: 'CSS',
      level: 5,
      src: '/img/css.svg'
    },
    {
      kind: 'SASS',
      level: 4,
      src: '/img/sass.svg'
    },
    {
      kind: 'JavaScript',
      level: 4,
      src: '/img/javascript.svg'
    },
    {
      kind: 'PHP',
      level: 3,
      src: '/img/php.svg'
    },
    {
      kind: 'WordPress',
      level: 4,
      src: '/img/wordpress.svg'
    },
    {
      kind: 'EC-CUBE',
      level: 4,
      src: '/img/ec_cube.svg'
    },
    {
      kind: 'Photoshop',
      level: 3,
      src: '/img/photoshop.svg'
    },
    {
      kind: 'Illustrator',
      level: 3,
      src: '/img/illustrator.svg'
    },
    {
      kind: 'XD',
      level: 3,
      src: '/img/xd.svg'
    }
  ];

  return (
    <Main>
      <div css={component} id="skill">
        <MaxWidth>
          <Wrap width="80">
            <MainTit en="SKILL" ja="スキル" />
            <ScrollAnim>
              <ul css={ulCss}>
                {skillItems.map((i, n) => {
                  return <Skill key={n} kind={i.kind} level={i.level} src={i.src} />;
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

export default MainSkill;
