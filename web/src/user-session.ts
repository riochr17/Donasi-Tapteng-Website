import { Admin } from "./api-client/model/table/Admin";
import { Donatur } from "./api-client/model/table/Donatur";

export namespace AdminSession {
  export function setAdmin(token: string, admin: Admin) {
    localStorage.setItem('admin-zs-token', token);
    localStorage.setItem('admin-zs-admin', JSON.stringify(admin));
  }

  export function getAdmin(): Admin {
    const admin = localStorage.getItem('admin-zs-admin');
    if (!admin) {
      return {
        id: '' as any,
        username: '' as any,
        password: '' as any,
        created_at: '' as any,
      };
    }

    return JSON.parse(admin);
  }

  export function getToken(): string {
    const token = localStorage.getItem('admin-zs-token');
    if (!token) {
      return '';
    }

    return `Bearer ${token}`;
  }

  export function hasLoggedIn(): boolean {
    return Boolean(localStorage.getItem('admin-zs-token'));
  }

  export function removeAdmin() {
    localStorage.removeItem('admin-zs-token');
    localStorage.removeItem('admin-zs-admin');
  }
}

export namespace UserSession {
  export function setUser(token: string, user: Donatur) {
    localStorage.setItem('zs-token', token);
    localStorage.setItem('zs-user', JSON.stringify(user));
  }

  export function getUser(): Donatur {
    const user = localStorage.getItem('zs-user');
    if (!user) {
      return {
        id: '' as any,
        email: '' as any,
        nama: '' as any,
        alamat: '' as any,
        google_user_id: '' as any,
      };
    }

    return JSON.parse(user);
  }

  export function getToken(): string {
    const token = localStorage.getItem('zs-token');
    if (!token) {
      return '';
    }

    return `Bearer ${token}`;
  }

  export function hasLoggedIn(): boolean {
    return Boolean(localStorage.getItem('zs-token'));
  }

  export function removeUser() {
    localStorage.removeItem('zs-token');
    localStorage.removeItem('zs-user');
  }
}
