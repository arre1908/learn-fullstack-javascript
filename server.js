import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express\n');
});

// no need for fs module. Automatically looks in ./public dir
server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, () => {
  console.info('Express listening on port ', console.port);
});