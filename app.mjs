import http from 'http';
import { Service } from './service.mjs';

const service = new Service();
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    service.getData(req, res);
  }
});

server.listen(3000);
