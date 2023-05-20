import { css } from '@emotion/react';

import { mq } from 'styles/media';

interface Props {
  priceTableItems: {
    menu: string;
    price: number;
  }[];
}

const PriceTable = ({ priceTableItems }: Props) => {
  return (
    <table css={component}>
      <tbody>
        {priceTableItems.map((i, n) => {
          return (
            <tr css={trCss} key={n}>
              <td>{i.menu}</td>
              <td>¥{i.price.toLocaleString()}〜</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const component = css`
  position: relative;
  width: 100%;
`;

const trCss = css`
  display: flex;
  width: 100%;

  &:nth-child(n + 2) {
    margin-top: 0.1rem;
  }

  & > td {
    color: var(--color-2);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    padding: 1.2rem;
    text-align: center;
    width: var(--two-division);

    &:nth-child(1) {
      background-color: var(--white);
      font-weight: 700;
      position: relative;

      &::after {
        border-color: transparent transparent transparent var(--white);
        border-style: solid;
        border-width: 0.8rem 0 0.8rem 1rem;
        content: '';
        left: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &:nth-child(2) {
      background-color: var(--white-transparent-50);
      font-weight: 500;
      letter-spacing: 0.1em;
    }
  }

  ${mq.s} {
    flex-direction: column;

    &:nth-child(n + 2) {
      margin-top: 0.5rem;
    }

    & > td {
      width: 100%;

      &:nth-child(1) {
        &::after {
          content: none;
        }
      }
    }
  }
`;

export default PriceTable;
