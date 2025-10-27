import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { LeaveRequest } from '../../model/table/LeaveRequest'
import { LeaveRequestStatus } from '../../model/enum/LeaveRequestStatus'

@Entity('LeaveRequestHistory')
export class LeaveRequestHistory extends BaseEntity {
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @ManyToOne(() => LeaveRequest, x => x.id, { nullable: false })
  @JoinColumn({ name: 'id_leave_request' })
  otm_id_leave_request?: LeaveRequest;
  @Column({
    name: 'id_leave_request',
    type: 'bigint',
    nullable: false,
  })
  id_leave_request!: number;
  @Column({
    type: 'enum',
    enum: LeaveRequestStatus,
    nullable: false,
    default: 'pending',
  })
  status!: LeaveRequestStatus;
  @Column({
    type: 'text',
    nullable: true,
  })
  notes?: string;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => "NOW()",
  })
  created_at!: Date;
}