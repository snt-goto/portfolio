import { css } from '@emotion/react';

interface Props {}

const MainWork = ({}: Props) => {
  return (
    <div css={component}>
      <div></div>
    </div>
  );
};

const component = css`
  position: relative;
`;

export default MainWork;
