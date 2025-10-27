import { Employee } from '../../model/table/Employee'
import { LeaveRequestStatus } from '../../model/enum/LeaveRequestStatus'

export interface LeaveRequest {
  id: number;
  id_employee: number;
  otm_id_employee?: Employee;
  type: string;
  reason?: string;
  start_date?: Date;
  end_date?: Date;
  latest_status: LeaveRequestStatus;
  created_at: Date;
}