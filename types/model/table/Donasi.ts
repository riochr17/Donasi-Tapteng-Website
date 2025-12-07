import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { Donatur } from '../../model/table/Donatur'

@Entity('Donasi')
export class Donasi extends BaseEntity {
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @ManyToOne(() => Donatur, x => x.id, { nullable: false })
  @JoinColumn({ name: 'id_donatur' })
  otm_id_donatur?: Donatur;
  @Column({
    name: 'id_donatur',
    type: 'bigint',
    nullable: false,
  })
  id_donatur!: number;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 1024,
  })
  nama_donatur!: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 1024,
  })
  nama_bank!: string;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 1024,
  })
  nomor_rekening!: string;
  @Column({
    type: 'varchar',
    nullable: true,
    length: 1024,
  })
  receipt_url?: string;
  @Column({
    type: 'text',
    nullable: true,
  })
  notes?: string;
  @Column({
    type: 'bigint',
    nullable: false,
  })
  nominal!: number;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => "NOW()",
  })
  created_at!: Date;
  @Column({
    type: 'timestamp',
    nullable: true,
  })
  verified_at?: Date;
}