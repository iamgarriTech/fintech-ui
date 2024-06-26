export type Package = {
  name: string;
  price: number;
  invoiceDate: string;
  status: string;
};

// export type TableItem = {
//   name: string;
//   price: number;
//   date: string;
//   status: string;
// };

// types/table.ts
export interface TableItem {
  id: number;
  name: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  email_verified_at: string | null;
  created_at: string ;
  updated_at: string | null;
  deleted_at: string | null;
  price: number;
  date: string;
  status: string;
}
// types/table.ts
export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  phone: string;
  date_of_birth: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
export interface LogItem {
  id: number;
  subject_type: string;
  subject_id: number;
  name: string;
  data: string;
  caused_by_id: number;
  caused_by_type: string;
  created_at: string;
  updated_at: string;
}
