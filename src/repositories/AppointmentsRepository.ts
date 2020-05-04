import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentInterface {
  provider: string;

  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public create({ provider, date }: CreateAppointmentInterface): Appointment {
    const appointment = new Appointment({ provider, date });
    this.appointments.push(appointment);

    return appointment;
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    return (
      this.appointments.find(appointment => isEqual(date, appointment.date)) ||
      null
    );
  }
}

export default AppointmentsRepository;
