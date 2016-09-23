/**
 * fetch and parse data
 */

import cheerio from 'cheerio-without-node-native';

export default async function fetchAndParse({ url, column, href, title, time }) {
  let text = await fetch(url).then(res => res.text()).catch(err => '');
  let $ = cheerio.load(text);
  let $col = $(column);

  return Array.from($col).slice(0, 10).map((item) => ({
    href: $(item).find(href).attr('href'),
    title: $(item).find(title).text()
  }));
};
