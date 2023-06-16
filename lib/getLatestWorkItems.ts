import config from 'config';

const getLatestWorkItems = async () => {
  const res = await fetch(`${config.WP}wp/v2/work?per_page=3`);
  const json = await res.json();

  const data = json.map((d: any) => {
    const src = d.acf.img || '',
      tit = d.title.rendered || '',
      url = d.acf.url || '';

    return {
      src: src,
      tit: tit,
      url: url
    };
  });

  return data;
};

export default getLatestWorkItems;
