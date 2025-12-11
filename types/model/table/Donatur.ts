import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity('Donatur')
export class Donatur extends BaseEntity {
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 1024,
  })
  nama!: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  alamat?: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 100,
    default: 'Indonesia',
  })
  kewarganegaraan!: string;
  @Column({
    type: 'varchar',
    nullable: true,
    length: 200,
  })
  google_user_id?: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 500,
  })
  email!: string;
}