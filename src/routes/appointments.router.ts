import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const router = Router();

const appointmentsRepository = new AppointmentsRepository();

router.get('/', (request, response) => {
  return response.json(appointmentsRepository.all());
});

router.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  if (appointmentsRepository.findByDate(parsedDate)) {
    return response
      .status(400)
      .json({ message: 'This date is already booked.' });
  }

  const appointment = appointmentsRepository.create({
    provider,
    date: parsedDate,
  });

  return response.json(appointment);
});

export default router;
