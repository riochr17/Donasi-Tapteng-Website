import { PenggunaanDana } from '../../model/table/PenggunaanDana'

export interface FotoPenggunaanDana {
  id: number;
  id_pengunaan_dana: number;
  otm_id_pengunaan_dana?: PenggunaanDana;
  url_foto: string;
  caption: string;
  created_at: Date;
}