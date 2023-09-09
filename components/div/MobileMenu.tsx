import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

import { MobileNav } from 'components/li';

import { mq } from 'styles/media';

const MobileMenu = () => {
  const mobileNavItems = [
    {
      href: '/',
      menu: 'HOME'
    },
    {
      href: '/#work',
      menu: 'WORK'
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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const btnElem: any = document.getElementById('btn');
    const navElem: any = document.getElementById('nav');

    if (open) {
      btnElem.classList.add('open');
      navElem.classList.add('open');
    } else {
      btnElem.classList.remove('open');
      navElem.classList.remove('open');
    }

    window.onresize = () => {
      let windowWidth = document.documentElement.scrollWidth;
      if (windowWidth > 1024) {
        setOpen(false);
      }
    };
  });

  return (
    <div css={component}>
      <div
        css={btn}
        id="btn"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span />
        <span />
      </div>
      <ul css={ulCss} id="nav">
        {mobileNavItems.map((i, n) => {
          return <MobileNav href={i.href} key={n} menu={i.menu} />;
        })}
      </ul>
    </div>
  );
};

const component = css`
  display: none;
  position: relative;

  ${mq.s} {
    display: block;
  }
`;

const btn = css`
  cursor: pointer;
  height: calc(2.7rem * 0.3);
  position: relative;
  width: 2.7rem;
  z-index: 999;

  &.open {
    & > span {
      &:nth-child(1) {
        top: 50%;
        transform: rotate(15deg) translateY(-50%);
      }

      &:nth-child(2) {
        transform: rotate(-15deg) translateY(50%);
        bottom: 50%;
      }
    }
  }

  & > span {
    background-color: var(--color-2);
    display: block;
    height: 2px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      bottom: 0;
    }
  }
`;

const ulCss = css`
  background-color: var(--color-5);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 50%;
  list-style: none;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  z-index: 998;

  &.open {
    transform: translateX(0);
  }
`;

export default MobileMenu;
