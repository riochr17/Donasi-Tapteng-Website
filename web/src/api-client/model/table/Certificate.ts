import { Employee } from '../../model/table/Employee'

export interface Certificate {
  id: number;
  id_employee: number;
  otm_id_employee?: Employee;
  certification_name: string;
  issuer?: string;
  issue_date?: Date;
  expiry_date?: Date;
  created_at: Date;
}