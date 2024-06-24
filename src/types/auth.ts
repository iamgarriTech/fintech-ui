// types.ts

export interface Admin {
  id: number;
  name: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface LoginResponse {
  message: string;
  admin: Admin;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
