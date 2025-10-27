import { Employee } from '../../model/table/Employee'

export interface Training {
  id: number;
  id_employee: number;
  otm_id_employee?: Employee;
  training_name: string;
  provider?: string;
  start_date?: Date;
  end_date?: Date;
  created_at: Date;
}