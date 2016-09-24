/**
 * fetch and parse data
 */

import cheerio from 'cheerio-without-node-native';
import URL from 'url-parse';

const getAbsURL = (url, base) => {
  let _url = new URL(url, base);
  return _url.href || url;
};

export default async function fetchAndParse({ url, column, href, title, time }) {
  let text = await fetch(url).then(res => res.text()).catch(err => '');
  let $ = cheerio.load(text);
  let $col = $(column);

  return Array.from($col).slice(0, 10).map((item) => ({
    href: getAbsURL($(item).find(href).attr('href'), url),
    title: $(item).find(title).text().replace(/【/g, '[').replace(/】/g, '] ')
  }));
};
