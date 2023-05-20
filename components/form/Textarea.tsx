import { css } from '@emotion/react';

import { Required } from 'components/form';

import { mq } from 'styles/media';

interface Props {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required: boolean;
  value: string;
}

const Textarea = ({ label, name, onChange, required, value }: Props) => {
  return (
    <div css={component}>
      <div css={flex}>
        <label htmlFor={name}>{label}</label>
        {required ? <Required /> : ''}
      </div>
      <textarea id={name} onChange={onChange} required={true} value={value} />
    </div>
  );
};

const component = css`
  display: flex;
  position: relative;

  & > textarea {
    background-color: var(--white);
    color: var(--color-2);
    font-family: var(--noto-sans-jp);
    font-size: 0.9rem;
    font-weight: 500;
    height: 12rem;
    padding: var(--input-padding);
    width: 100%;
  }

  ${mq.m} {
    & > textarea {
      height: 13.5rem;
    }
  }

  ${mq.s} {
    align-items: flex-start;
    flex-direction: column;
  }

  ${mq.xs} {
    & > textarea {
      height: 15rem;
    }
  }
`;

const flex = css`
  align-items: flex-start;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  margin: var(--input-padding) var(--label-mr) 0 0;
  width: var(--label-width);

  & > label {
    color: var(--color-2);
    font-family: var(--noto-sans-jp);
    font-size: 0.9rem;
    font-weight: 700;
  }

  ${mq.m} {
    margin: var(--input-padding) var(--label-mr_mq-m) 0 0;
    width: var(--label-width_mq-m);
  }

  ${mq.s} {
    margin: 0 0 var(--label-mb_mq-m);
    width: 100%;
  }
`;

export default Textarea;
