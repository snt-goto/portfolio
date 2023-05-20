import { css } from '@emotion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MaxWidth = ({ children }: Props) => {
  return <div css={component}>{children}</div>;
};

const component = css`
  height: 100%;
  margin: 0 auto;
  max-width: 1800px;
  position: relative;
  width: 100%;
`;

export default MaxWidth;
