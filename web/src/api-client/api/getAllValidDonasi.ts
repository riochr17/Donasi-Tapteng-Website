import { PublicDonasi } from '../schema/PublicDonasi'



export type T_getAllValidDonasi = (request: {

}, base_url?: string) => Promise<PublicDonasi[]>;

export const method = 'get';
export const url_path = '/donasi';
export const alias = 'getAllValidDonasi';
