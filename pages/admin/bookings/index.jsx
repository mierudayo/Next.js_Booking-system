import React from "react";
import { getSession } from "next-auth/client";

import { Layout } from "../../../components/layouts/Layout";
import { AllBookings } from "../../../components/admin/AllBookings";

export default function AllBookingsPage() {
  return (
    <Layout title="All Bookings">
      <AllBookings />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return { props: {} };
};
