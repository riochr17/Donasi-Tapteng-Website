import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Unit } from '../../model/table/Unit'
import { Position } from '../../model/table/Position'
import { Gender } from '../../model/enum/Gender'
import { MaritalStatus } from '../../model/enum/MaritalStatus'

@Entity('Employee')
export class Employee extends BaseEntity {
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @ManyToOne(() => Employee, x => x.id, { nullable: true })
  @JoinColumn({ name: 'id_supervisor' })
  otm_id_supervisor?: Employee;
  @Column({
    name: 'id_supervisor',
    type: 'bigint',
    nullable: true,
  })
  id_supervisor?: number;
  @ManyToOne(() => Unit, x => x.id, { nullable: true })
  @JoinColumn({ name: 'id_unit' })
  otm_id_unit?: Unit;
  @Column({
    name: 'id_unit',
    type: 'bigint',
    nullable: true,
  })
  id_unit?: number;
  @ManyToOne(() => Position, x => x.id, { nullable: true })
  @JoinColumn({ name: 'id_position' })
  otm_id_position?: Position;
  @Column({
    name: 'id_position',
    type: 'bigint',
    nullable: true,
  })
  id_position?: number;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 500,
  })
  sub_unit!: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 500,
  })
  employee_number!: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 500,
  })
  fullname!: string;
  @Column({
    type: 'enum',
    enum: Gender,
    nullable: false,
  })
  gender!: Gender;
  @Column({
    type: 'varchar',
    nullable: true,
    length: 500,
  })
  birth_place?: string;
  @Column({
    type: 'date',
    nullable: true,
  })
  birth_date?: Date;
  @Column({
    type: 'enum',
    enum: MaritalStatus,
    nullable: true,
  })
  marital_status?: MaritalStatus;
  @Column({
    type: 'varchar',
    nullable: true,
    length: 50,
  })
  phone?: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 500,
  })
  email!: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  address?: string;
  @Column({
    type: 'date',
    nullable: true,
  })
  hire_date?: Date;
  @Column({
    type: 'date',
    nullable: true,
  })
  resign_date?: Date;
  @Column({
    type: 'varchar',
    nullable: true,
    length: 500,
  })
  password?: string;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => "NOW()",
  })
  created_at!: Date;
}