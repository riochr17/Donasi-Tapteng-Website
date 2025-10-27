import { LeaveRequest } from '../../model/table/LeaveRequest'
import { LeaveRequestStatus } from '../../model/enum/LeaveRequestStatus'

export interface LeaveRequestHistory {
  id: number;
  id_leave_request: number;
  otm_id_leave_request?: LeaveRequest;
  status: LeaveRequestStatus;
  notes?: string;
  created_at: Date;
}