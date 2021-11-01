import React from "react";
import { getSession } from "next-auth/client";

import { MyBookings } from "../../components/bookings/MyBookings";
import { Layout } from "../../components/layouts/Layout";
import { wrapper } from "../../redux/store";
import { myBookings } from "../../redux/actions/bookingActions";

export default function MyBookingsPage() {
  return (
    <Layout title="My Bookings">
      <MyBookings />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const session = await getSession({ req });

      if (!session) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }

      await store.dispatch(myBookings(req.headers.cookie, req));
    }
);
