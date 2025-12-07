import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn, BaseEntity } from "typeorm";
import { PenggunaanDana } from '../../model/table/PenggunaanDana'

@Entity('FotoPenggunaanDana')
export class FotoPenggunaanDana extends BaseEntity {
  @Column({
    type: 'bigint',
    nullable: false,
  })
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @ManyToOne(() => PenggunaanDana, x => x.id, { nullable: false })
  @JoinColumn({ name: 'id_pengunaan_dana' })
  otm_id_pengunaan_dana?: PenggunaanDana;
  @Column({
    name: 'id_pengunaan_dana',
    type: 'bigint',
    nullable: false,
  })
  id_pengunaan_dana!: number;
  @Column({
    type: 'varchar',
    nullable: false,
    length: 1024,
  })
  url_foto!: string;
  @Column({
    type: 'text',
    nullable: false,
  })
  caption!: string;
  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => "NOW()",
  })
  created_at!: Date;
}