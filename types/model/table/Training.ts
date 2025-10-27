import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Employee } from '../../model/table/Employee'

@Entity('Training')
export class Training extends BaseEntity {
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
    type: 'varchar',
    nullable: false,
    length: 500,
  })
  training_name!: string;
  @Column({
    type: 'varchar',
    nullable: true,
    length: 500,
  })
  provider?: string;
  @Column({
    type: 'date',
    nullable: true,
  })
  start_date?: Date;
  @Column({
    type: 'date',
    nullable: true,
  })
  end_date?: Date;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => "NOW()",
  })
  created_at!: Date;
}