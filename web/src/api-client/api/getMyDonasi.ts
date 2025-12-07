
import { Donasi } from '../model/table/Donasi'

export interface T_getMyDonasi_headers {
  authorization: string
}

export type T_getMyDonasi = (request: {
  headers: T_getMyDonasi_headers
}, base_url?: string) => Promise<Donasi[]>;

export const method = 'get';
export const url_path = '/my-donasi';
export const alias = 'getMyDonasi';
