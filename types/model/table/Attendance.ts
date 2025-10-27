import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Employee } from '../../model/table/Employee'
import { AttendanceMethod } from '../../model/enum/AttendanceMethod'

@Entity('Attendance')
export class Attendance extends BaseEntity {
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @ManyToOne(() => Employee, x => x.id, { nullable: false })
  @JoinColumn({ name: 'id_employee' })
  otm_id_employee?: Employee;
  @Column({
    name: 'id_employee',
    type: 'bigint',
    nullable: false,
  })
  id_employee!: number;
  @Column({
    type: 'date',
    nullable: true,
  })
  date?: Date;
  @Column({
    type: 'timestamp',
    nullable: false,
  })
  clock_in!: Date;
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  clock_out?: Date;
  @Column({
    type: 'enum',
    enum: AttendanceMethod,
    nullable: false,
    default: 'manual',
  })
  method!: AttendanceMethod;
  @Column({
    type: 'decimal',
    nullable: true,
    precision: 10,
    scale: 8,
  })
  gps_lat?: number;
  @Column({
    type: 'decimal',
    nullable: true,
    precision: 10,
    scale: 8,
  })
  gps_long?: number;
  @Column({
    type: 'varchar',
    nullable: true,
    length: 500,
  })
  location?: string;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => "NOW()",
  })
  created_at!: Date;
}