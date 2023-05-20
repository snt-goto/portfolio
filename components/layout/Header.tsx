import { css } from '@emotion/react';
import Link from 'next/link';
import { useEffect } from 'react';

import { MobileMenu } from 'components/div';
import { MaxWidth, Wrap } from 'components/frame';
import { HeaderNav } from 'components/li';

import { mq } from 'styles/media';

interface Props {}

const Header = ({}: Props) => {
  const headerNavItems = [
    {
      href: '/',
      menu: 'HOME'
    },
    {
      href: '/#service',
      menu: 'SERVICE'
    },
    {
      href: '/#price',
      menu: 'PRICE'
    },
    {
      href: '/#about',
      menu: 'ABOUT'
    },
    {
      href: '/#skill',
      menu: 'SKILL'
    },
    {
      href: '/contact',
      menu: 'CONTACT'
    }
  ];

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === '/') {
      const elem = document.getElementById('logo');

      elem!.style.opacity = '0';

      addEventListener('scroll', () => {
        const height = window.outerHeight,
          scroll = window.scrollY;

        if (scroll <= height) {
          const ratio = Number((scroll / height).toFixed(2));

          ratio <= 0.5 ? (elem!.style.opacity = String(ratio * 2)) : '';
        } else {
          elem!.style.opacity = '1';
        }
      });
    }
  });

  return (
    <header css={component}>
      <MaxWidth>
        <Wrap width="90">
          <div css={frame}>
            <div css={cont}>
              <Link css={aCss} href="/" id="logo">
                <img alt="GOTO SHUNTA" src="/img/logo.svg" />
              </Link>
              <div css={nav}>
                <ul css={ulCss}>
                  {headerNavItems.map((i, n) => {
                    return <HeaderNav href={i.href} key={n} menu={i.menu} />;
                  })}
                </ul>
                <MobileMenu />
              </div>
            </div>
          </div>
        </Wrap>
      </MaxWidth>
    </header>
  );
};

const component = css`
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
`;

const cont = css`
  height: 100%;
  position: relative;
`;

const frame = css`
  height: 100%;
  padding: var(--header-padding);

  ${mq.m} {
    padding: var(--header-padding_mq-m);
  }

  ${mq.xs} {
    padding: var(--header-padding_mq-xs);
  }
`;

const nav = css`
  bottom: 0;
  pointer-events: auto;
  position: absolute;
  right: 0;

  & > ul {
    list-style: none;
  }

  ${mq.s} {
    & > ul {
      display: none;
    }
  }
`;

const aCss = css`
  cursor: pointer;
  display: block;
  pointer-events: auto;
  text-decoration: none;
  width: 15rem;

  &:hover {
    text-decoration: none;
  }

  & > img {
    display: block;
    height: auto;
    width: 100%;
  }

  ${mq.m} {
    width: 13.5rem;
  }

  ${mq.xs} {
    width: 12rem;
  }
`;

const ulCss = css`
  /* bottom: 0;
  list-style: none;
  pointer-events: auto;
  position: absolute;
  right: 0;

  ${mq.s} {
    display: none;
  } */
`;

export default Header;
