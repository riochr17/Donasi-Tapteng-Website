import { Employee } from '../../model/table/Employee'
import { AttendanceMethod } from '../../model/enum/AttendanceMethod'

export interface Attendance {
  id: number;
  id_employee: number;
  otm_id_employee?: Employee;
  date?: Date;
  clock_in: Date;
  clock_out?: Date;
  method: AttendanceMethod;
  gps_lat?: number;
  gps_long?: number;
  location?: string;
  created_at: Date;
}