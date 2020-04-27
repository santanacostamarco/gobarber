import { Router } from 'express';

const routes = Router();

routes.get('/hello', (request, response) => {
  return response.json({ message: 'hello, world!' });
});

export default routes;
