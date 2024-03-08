import express from 'express';
import shortid from 'shortid';
import  validUrl from 'valid-url';
import cors from 'cors';

import { config } from 'dotenv';


import { connectDB } from './config/db';
import { Url } from './models/urlModel';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4500;

console.log('host', host);

const app = express();
app.use(cors()); // Enable All CORS Requests
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
config();
connectDB();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.post('/shorten', async (req, res) => {
  const { fullUrl } = req.body;
  console.log(req.body)
  console.log(fullUrl);
  if (!validUrl.isUri(fullUrl)) {
    return res.status(401).send({ message: 'Invalid URL' });
  }

  const url = new Url({full: fullUrl});
  await url.save();
  res.send(url);
});

app.get("/:shortUrl", async (req, res) => {
   if (req.params.shortUrl === 'health') {
     return res.send({ message: 'API is healthy' });
   }
  const url = await Url.findOne({ short: req.params.shortUrl });

  if (url) {
    url.clicks++;
    url.save();
    res.redirect(url.full);
  } else {
    res.status(404).json('URL not found');
  }
});

app.get('/health', (req, res) => {
  console.log('health check passed');
  res.send({ message: 'API is healthy' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
