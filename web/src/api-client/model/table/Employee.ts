import { Unit } from '../../model/table/Unit'
import { Position } from '../../model/table/Position'
import { Gender } from '../../model/enum/Gender'
import { MaritalStatus } from '../../model/enum/MaritalStatus'

export interface Employee {
  id: number;
  id_supervisor?: number;
  otm_id_supervisor?: Employee;
  id_unit?: number;
  otm_id_unit?: Unit;
  id_position?: number;
  otm_id_position?: Position;
  sub_unit: string;
  employee_number: string;
  fullname: string;
  gender: Gender;
  birth_place?: string;
  birth_date?: Date;
  marital_status?: MaritalStatus;
  phone?: string;
  email: string;
  address?: string;
  hire_date?: Date;
  resign_date?: Date;
  password?: string;
  created_at: Date;
}