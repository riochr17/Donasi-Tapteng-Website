import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity('Unit')
export class Unit extends BaseEntity {
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @ManyToOne(() => Unit, x => x.id, { nullable: true })
  @JoinColumn({ name: 'id_unit_parent' })
  otm_id_unit_parent?: Unit;
  @Column({
    name: 'id_unit_parent',
    type: 'bigint',
    nullable: true,
  })
  id_unit_parent?: number;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 500,
  })
  name!: string;
  @Column({
    type: 'varchar',
    nullable: true,
    length: 500,
  })
  location?: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => "NOW()",
  })
  created_at!: Date;
}