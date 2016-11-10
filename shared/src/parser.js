import fetch from 'isomorphic-fetch';

/**
 * Parse un flux RSS à l'URL spécifiée.
 */
export default function (url) {
  return new Promise((resolve, reject) => {
    console.info(`Fetching feeds for ${url}`);

    fetch(`http://localhost:3001/?url=${url}`)
      .then(r => r.json())
      .then((data) => {
        resolve(data);
      })
      .catch(reject);
  });
}
