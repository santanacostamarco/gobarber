import express from 'express';

const app = express();

app.get('/', (request, response) => 
  response.send('Hello, typescript!'));

app.listen(3333);
