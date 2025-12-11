import { Donatur } from '../../model/table/Donatur'

export interface Donasi {
  id: number;
  id_donatur: number;
  otm_id_donatur?: Donatur;
  nama_donatur: string;
  nama_bank: string;
  nomor_rekening: string;
  receipt_url?: string;
  mata_uang: string;
  nilai_konversi_idr?: number;
  notes?: string;
  nominal: number;
  created_at: Date;
  verified_at?: Date;
}