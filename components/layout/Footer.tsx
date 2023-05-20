import { css } from '@emotion/react';
import { useEffect } from 'react';

import { Sns } from 'components/li';

import config from 'config';

import { mq } from 'styles/media';

interface Props {}

const Footer = ({}: Props) => {
  const snsItems = [
    {
      href: config.TWITTER,
      src: '/img/twitter.svg'
    },
    {
      href: config.GITHUB,
      src: '/img/github.svg'
    }
  ];

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === '/') {
      const footer = document.getElementById('footer');

      const setHeight = () => {
        const height: number = Number(footer!.getBoundingClientRect().height.toFixed(2));

        footer!.style.marginTop = String(0 - height) + 'px';
      };

      setHeight();

      addEventListener('resize', () => {
        setHeight();
      });
    }
  });

  return (
    <footer css={component} id="footer">
      <ul>
        {snsItems.map((i, n) => {
          return <Sns href={i.href} key={n} src={i.src} />;
        })}
      </ul>
      <p>© 2023 GOTO SHUNTA PORTFOLIO.</p>
    </footer>
  );
};

const component = css`
  background-color: var(--color-4);
  padding: 2rem 0;
  position: relative;

  ${mq.xl} {
    padding: 2.2rem 0;
  }

  ${mq.m} {
    padding: 1.8rem 0;
  }

  ${mq.xs} {
    padding: 1.6rem 0;
  }

  & > p {
    color: var(--white);
    font-family: var(--noto-sans-jp);
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
  }

  & > ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    margin-bottom: 1rem;
  }
`;

export default Footer;
