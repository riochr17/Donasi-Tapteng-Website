
import { FormDataDonasi } from '../schema/FormDataDonasi'
import { Donasi } from '../model/table/Donasi'

export interface T_buatDonasi_headers {
  authorization: string
}
export interface T_buatDonasi_body {
  data: FormDataDonasi
}

export type T_buatDonasi = (request: {
  headers: T_buatDonasi_headers
  body: T_buatDonasi_body
}, base_url?: string) => Promise<Donasi>;

export const method = 'post';
export const url_path = '/my-donasi';
export const alias = 'buatDonasi';
