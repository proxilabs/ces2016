import express from 'express';
import FeedMe from 'feedme';
import fetch from 'isomorphic-fetch';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  if (!req.query.url) {
    res.status(400).end();
  } else {
    const parser = new FeedMe(true);

    fetch(req.query.url)
      .then(r => r.text())
      .then((data) => {
        parser.write(data);

        res.json(parser.done());
      })
      .catch(() => res.status(500).end());
  }
});

app.listen(3001, () => console.info('Listening on port 3001'));