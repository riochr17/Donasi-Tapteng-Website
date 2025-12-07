
import { FormDataBuktiDonasi } from '../schema/FormDataBuktiDonasi'
import { Donasi } from '../model/table/Donasi'

export interface T_uploadBuktiDonasi_headers {
  authorization: string
}
export interface T_uploadBuktiDonasi_path {
  id: number
}
export interface T_uploadBuktiDonasi_body {
  data: FormDataBuktiDonasi
}

export type T_uploadBuktiDonasi = (request: {
  headers: T_uploadBuktiDonasi_headers
  path: T_uploadBuktiDonasi_path
  body: T_uploadBuktiDonasi_body
}, base_url?: string) => Promise<Donasi>;

export const method = 'post';
export const url_path = '/my-donasi/:id/upload-bukti';
export const alias = 'uploadBuktiDonasi';
