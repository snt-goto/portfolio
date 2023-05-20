import { css } from '@emotion/react';

import { Required } from 'components/form';

import { mq } from 'styles/media';

interface Props {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  type: string;
  value: string;
}

const Input = ({ label, name, onChange, required, type, value }: Props) => {
  return (
    <div css={component}>
      <div css={flex}>
        <label htmlFor={name}>{label}</label>
        {required ? <Required /> : ''}
      </div>
      <input id={name} onChange={onChange} required={required} type={type} value={value} />
    </div>
  );
};

const component = css`
  align-items: center;
  display: flex;
  position: relative;

  & > input {
    background-color: var(--white);
    color: var(--color-2);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 500;
    padding: var(--input-padding);
    width: 100%;
  }

  ${mq.s} {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const flex = css`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  margin-right: var(--label-mr);
  width: var(--label-width);

  & > label {
    color: var(--color-2);
    font-family: var(--noto-sans-jp);
    font-size: 1rem;
    font-weight: 700;
  }

  ${mq.m} {
    margin-right: var(--label-mr_mq-m);
    width: var(--label-width_mq-m);
  }

  ${mq.s} {
    margin: 0 0 var(--label-mb_mq-m);
    width: 100%;
  }
`;
export default Input;
