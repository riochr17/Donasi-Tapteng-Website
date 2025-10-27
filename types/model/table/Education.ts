import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Employee } from '../../model/table/Employee'

@Entity('Education')
export class Education extends BaseEntity {
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
  school_name!: string;
  @Column({
    type: 'varchar',
    nullable: true,
    length: 500,
  })
  field?: string;
  @Column({
    type: 'int',
    nullable: true,
  })
  year?: number;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => "NOW()",
  })
  created_at!: Date;
}