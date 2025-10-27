import { Employee } from '../../model/table/Employee'

export interface Overtime {
  id: number;
  id_employee: number;
  otm_id_employee?: Employee;
  date?: Date;
  start_time?: Date;
  end_time?: Date;
  hours?: number;
  purpose?: string;
  created_at: Date;
}