import * as https from 'https';

const fetch = (url: string): Promise<string> => new Promise((resolve, reject): void => {
  let result = '';
  const req = https.get(url, (res) => {
    res.on('data', (chunk) => { result += chunk; });
    res.on('end', () => resolve(result));
  });
  req.on('error', err => reject(err));
});

export default fetch;
