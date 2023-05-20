import { css } from '@emotion/react';

interface Props {
  href: string;
  menu: string;
}

const HeaderNav = ({ href, menu }: Props) => {
  return (
    <li css={component}>
      <a href={href}>{menu}</a>
    </li>
  );
};

const component = css`
  position: relative;

  &:nth-child(n + 2) {
    margin-top: 1.1rem;
  }

  & > a {
    color: var(--color-2);
    display: inline-block;
    font-family: var(--oswald);
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    padding: 0.1rem 0;
    position: relative;

    &::after {
      background-color: var(--color-2);
      bottom: 0;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      right: 100%;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }

    &:hover {
      text-decoration: none;

      &::after {
        right: 0;
      }
    }
  }
`;

export default HeaderNav;
