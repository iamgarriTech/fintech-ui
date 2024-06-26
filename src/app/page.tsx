import HomePage from "@/components/Dashboard/HomePage";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PrivateRoute from "@/components/PrivateRoute";

export const metadata: Metadata = {
  title:
    " VANT X ASOTECH",
  description: "VANT X ASOTECH Dashboard ",
};

export default function Home() {
  return (
    <>

      <DefaultLayout>
        <PrivateRoute>
        <HomePage />
      </PrivateRoute>
      </DefaultLayout>

    </>
  );
}
