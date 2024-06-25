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
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
  price: number;
  date: string;
  status: string;
}
