import express from 'express';
import validUrl from 'valid-url';
import cors from 'cors';
import qrcode from 'qrcode';

import { config } from 'dotenv';

import { connectDB } from './config/db';
import { Url } from './models/urlModel';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4500;

console.log('host ', host);

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
  console.log(req.body);
  console.log(fullUrl);
  if (!validUrl.isUri(fullUrl)) {
    return res.status(401).send({ message: 'Invalid URL' });
  }

  const qrText = `http://${host}:${port}/${fullUrl}`;
  const qrImageUrl = await qrcode.toDataURL(qrText);

  const url = new Url({ full: fullUrl});
  await url.save();
  res.send({ url , qrImageUrl});
});

app.get('/url/:shortUrl', async (req, res) => {
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

app.get('/all', async (req, res) => {
  const urls = await Url.find({});
  res.send(urls);
});


//Never call this endpoint in production
app.get('/deleteall', async (req, res) => {
  // Delete all documents
  try {
    await Url.deleteMany({});
    res.send({ message: 'All documents deleted' });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting documents' });
  }
});

app.delete('/delete/:shortUrl', async (req, res) => {
  // Delete one document
  try {
    const url = await Url.findOneAndDelete({ short: req.params.shortUrl });
    if (url) {
      res.send({ message: 'Document deleted' });
    } else {
      res.status(404).send({ message: 'Document not found' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error deleting document' });
  }
});

app.get('/health', (req, res) => {
  console.log('health check passed');
  res.send({ message: 'API is healthy' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
