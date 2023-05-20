import { css } from '@emotion/react';
import { useState } from 'react';

import { ScrollAnim } from 'components/anim';
import { SubmitBtn } from 'components/btn';
import { Input, Textarea } from 'components/form';
import { MaxWidth, Wrap } from 'components/frame';
import { LowerTit } from 'components/tit';

import config from 'config';

import { mq } from 'styles/media';

interface Props {}

const LowerContact = ({}: Props) => {
  const [userCont, setUserCont] = useState(''),
    [userEmail, setUserEmail] = useState(''),
    [userName, setUserName] = useState(''),
    [userNameProduction, setUserNameProduction] = useState(''),
    [userTel, setUserTel] = useState('');

  const updateUserCont = (e: any) => setUserCont(e.target.value),
    updateUserEmail = (e: any) => setUserEmail(e.target.value),
    updateUserName = (e: any) => setUserName(e.target.value),
    updateUserNameProduction = (e: any) => setUserNameProduction(e.target.value),
    updateUserTel = (e: any) => setUserTel(e.target.value);

  const submit = async (e: any) => {
    e.preventDefault();

    const FORM_URL = `${config.WP}contact-form-7/v1/contact-forms/8/feedback`;
    const formData = new FormData();

    formData.append('your-cont', userCont);
    formData.append('your-email', userEmail);
    formData.append('your-name', userName);
    formData.append('your-name-production', userNameProduction);
    formData.append('your-tel', userTel);

    await fetch(FORM_URL, {
      body: formData,
      method: 'POST'
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status === 'mail_sent') {
          alert('問い合わせが完了しました。');
          location.reload();
        } else {
          alert('正しく送信できませんでした。もう一度お試しいただくか、電話にてお問い合わせください。');
        }
      })
      .catch((error) => {
        alert('正しく送信できませんでした。もう一度お試しいただくか、電話にてお問い合わせください。');
      });
  };

  return (
    <div css={component}>
      <MaxWidth>
        <Wrap width="70">
          <LowerTit tit="CONTACT" />
          <ScrollAnim>
            <form css={formCss} onSubmit={submit}>
              <Input
                label="お名前"
                name="name"
                onChange={updateUserName}
                required={true}
                type="text"
                value={userName}
              />
              <Input
                label="お名前（カタカナ）"
                name="name-production"
                onChange={updateUserNameProduction}
                required={true}
                type="text"
                value={userNameProduction}
              />
              <Input
                label="メールアドレス"
                name="email"
                onChange={updateUserEmail}
                required={true}
                type="email"
                value={userEmail}
              />
              <Input label="電話番号" name="tel" onChange={updateUserTel} required={false} type="tel" value={userTel} />
              <Textarea
                label="お問い合わせ内容"
                name="cont"
                onChange={updateUserCont}
                required={true}
                value={userCont}
              />
              <SubmitBtn />
            </form>
          </ScrollAnim>
        </Wrap>
      </MaxWidth>
    </div>
  );
};

const component = css`
  padding-bottom: 5rem;
  position: relative;

  ${mq.m} {
    padding-bottom: 4.5rem;
  }

  ${mq.xs} {
    padding-bottom: 4rem;
  }
`;

const formCss = css`
  & > div:nth-child(n + 2) {
    margin-top: 2rem;
  }

  ${mq.m} {
    & > div:nth-child(n + 2) {
      margin-top: 1.8rem;
    }
  }

  ${mq.xs} {
    & > div:nth-child(n + 2) {
      margin-top: 1.6rem;
    }
  }
`;

export default LowerContact;
