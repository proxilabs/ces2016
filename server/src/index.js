import express from 'express';
import FeedParser from 'feedparser';
import fs from 'fs';
import path from 'path';
import request from 'request';
import cors from 'cors';

const cacheFolder = './cache';

try {
  fs.mkdirSync(cacheFolder);
} catch (e) {
  console.info(e.message);
}

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  if (!req.query.url) {
    res.status(400).end();
  } else {
    const cachePath = path.join(cacheFolder, encodeURIComponent(req.query.url));
    console.info('Looking for', cachePath);

    // On commence par vérifier si le flux demandé existe dans le cache
    if (fs.existsSync(cachePath)) {
      console.info('Cache found!');
      fs.readFile(cachePath, (err, data) => res.json(JSON.parse(data)));
    } else {
      console.info('Cache not found, requesting...');
      const r = request(req.query.url);
      const items = [];
      const feedparser = new FeedParser();

      r.on('error', () => res.status(500).end());
      r.on('response', o => o.pipe(feedparser));

      feedparser.on('error', () => res.status(400).end());
      feedparser.on('readable', function onReadable() {
        let item = this.read();

        while (item) {
          items.push(item);
          item = this.read();
        }
      });
      feedparser.on('end', () => {
        console.info('Writing', cachePath);
        // On met dans le cache le résultat
        fs.writeFile(cachePath, JSON.stringify(items), () => res.json(items));
      });
    }
  }
});

app.listen(3001, '192.168.1.90', () => console.info('Listening on port 3001'));
