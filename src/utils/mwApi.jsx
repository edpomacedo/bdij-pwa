// mwApi.jsx
import jsonp from 'jsonp';

export const fetchMediaWikiStats = (callback) => {
  jsonp(
    'https://web.bdij.com.br/w/api.php?action=query&meta=siteinfo&siprop=statistics&format=json',
    { name: 'handleResponse' },
    (error, response) => {
      callback(error, response?.query?.statistics);
    }
  );
};