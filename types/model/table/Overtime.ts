import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Employee } from '../../model/table/Employee'

@Entity('Overtime')
export class Overtime extends BaseEntity {
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
    nullable: true,
  })
  start_time?: Date;
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  end_time?: Date;
  @Column({
    type: 'decimal',
    nullable: true,
    precision: 5,
    scale: 2,
  })
  hours?: number;
  @Column({
    type: 'text',
    nullable: true,
  })
  purpose?: string;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => "NOW()",
  })
  created_at!: Date;
}