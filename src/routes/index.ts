import { Router } from 'express';
import appointmentsRouter from './appointments.router';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

routes.get('/hello', (request, response) => {
  return response.json({ message: 'hello, world!' });
});

export default routes;
