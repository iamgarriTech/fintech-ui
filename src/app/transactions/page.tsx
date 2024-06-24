import PageTitle from "@/components/PageTitles/PageTitle";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";
import { TableItem } from "@/types/table";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "VANT X ASOTECH",
  description:
    "",
};

const Transactions = () => {
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
      <PageTitle pageName="Transactions" />

      <div className="flex flex-col gap-10">

        <TableThree data={tableData} />
        </div>
    </DefaultLayout>
  );
};

export default Transactions;
