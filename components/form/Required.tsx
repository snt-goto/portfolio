import { css } from '@emotion/react';

interface Props {}

const Required = ({}: Props) => {
  return <p css={component}>必須</p>;
};

const component = css`
  background-color: var(--black);
  color: var(--white);
  font-family: var(--noto-sans-jp);
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0.2rem 0.4rem 0.3rem;
`;

export default Required;
