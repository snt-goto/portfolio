import Head from 'next/head';
import { useEffect, useState } from 'react';

interface Props {
  tit?: string;
}

const Ogp = ({ tit }: Props) => {
  const description =
      '群馬県でWebクリエイターとして活動している、「後藤 駿太」のポートフォリオサイトです。私はクライアント様の想いを汲み取って、「あなただけのWebサイト」を真心込めて制作しております。お気軽にお問い合わせください。',
    siteName = 'GOTO SHUNTA PORTFOLIO';

  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(location.href);
  }, [url]);

  return (
    <>
      <Head>
        <title>
          {tit ? `${tit} |` : ''} {siteName}
        </title>
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="/img/top/main_visual_bg.jpg" property="og:image" />
        <meta content={`${tit ? `${tit} | ` : ''}${siteName}`} property="og:title" />
        <meta content={url === '/' ? 'website' : 'article'} property="og:type" />
        <meta content={url} property="og:url" />
        <link href={url} rel="canonical" />
      </Head>
    </>
  );
};

export default Ogp;
