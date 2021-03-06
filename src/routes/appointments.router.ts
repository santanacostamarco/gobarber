import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const router = Router();

const appointmentsRepository = new AppointmentsRepository();

router.get('/', (request, response) => {
  return response.json(appointmentsRepository.all());
});

router.post('/', (request, response) => {
  const { provider, date } = request.body;

  try {
    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );
    const appointment = createAppointment.execute({
      provider,
      date: parsedDate,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default router;
