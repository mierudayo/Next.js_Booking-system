import React from "react";
import { getSession } from "next-auth/client";

import { Layout } from "../../../components/layouts/Layout";
import { NewRoom } from "../../../components/admin/NewRoom";

export default function NewRoomsPage() {
  return (
    <Layout title="New Room">
      <NewRoom />
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
