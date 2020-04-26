import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send("Hello, typescript!");
})

app.listen(3333);