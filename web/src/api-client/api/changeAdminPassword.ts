

export interface T_changeAdminPassword_body {
  old_password: string
  new_password: string
}

export type T_changeAdminPassword = (request: {
  body: T_changeAdminPassword_body
}, base_url?: string) => Promise<boolean>;

export const method = 'post';
export const url_path = '/admin/change-password';
export const alias = 'changeAdminPassword';
