import PageTitle from "@/components/PageTitles/PageTitle";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";
import { TableItem } from "@/types/table";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Next.js Tables | VANT X ASOTECH - Next.js",
  description:
    "This is Next.js Tables page for VANT X ASOTECH - Next.js Tailwind CSS Admin Dashboard Template",
};

const TablesPage = () => {
  const tableData: TableItem[] = [
    {
      name: "John Doe",
      price: 1200.00,
      date: "June 24, 2024",
      status: "Active",
    },
    {
      name: "Jane Doe",
      price: 1500.00,
      date: "June 25, 2024",
      status: "Pending",
    },
    {
      name: "Sam Smith",
      price: 900.00,
      date: "June 26, 2024",
      status: "Inactive",
    }
  ];
  return (
    <DefaultLayout>
      <PageTitle pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree data={tableData} />
        </div>
    </DefaultLayout>
  );
};

export default TablesPage;
