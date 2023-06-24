import Head from 'next/head';
import { useEffect, useState } from 'react';

interface Props {
  tit?: string;
}

const Ogp = ({ tit }: Props) => {
  const description =
      '群馬県でWebクリエイターとして活動している、「後藤 駿太」のポートフォリオサイトです。私はクライアント様の想いを汲み取って、「あなただけのWebサイト」を真心込めて制作しております。お気軽にお問い合わせください。',
    siteName = 'GOTO SHUNTA PORTFOLIO';

  const [pathname, setPathname] = useState(''),
    [url, setUrl] = useState('');

  useEffect(() => {
    setPathname(location.pathname);
    setUrl(location.href);
  }, [pathname, url]);

  return (
    <>
      <Head>
        <title>
          {tit ? `${tit} |` : ''} {siteName}
        </title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/img/top/main_visual_bg.jpg" />
        <meta property="og:title" content={`${tit ? `${tit} | ` : ''}${siteName}`} />
        <meta property="og:type" content={pathname === '/' ? 'website' : 'article'} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
      </Head>
    </>
  );
};

export default Ogp;
