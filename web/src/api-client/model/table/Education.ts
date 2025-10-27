import { Employee } from '../../model/table/Employee'

export interface Education {
  id: number;
  id_employee: number;
  otm_id_employee?: Employee;
  school_name: string;
  field?: string;
  year?: number;
  created_at: Date;
}