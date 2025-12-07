
import { Donasi } from '../model/table/Donasi'

export interface T_getMyDonasiByID_headers {
  authorization: string
}
export interface T_getMyDonasiByID_path {
  id: number
}

export type T_getMyDonasiByID = (request: {
  headers: T_getMyDonasiByID_headers
  path: T_getMyDonasiByID_path
}, base_url?: string) => Promise<Donasi>;

export const method = 'get';
export const url_path = '/my-donasi/:id';
export const alias = 'getMyDonasiByID';
