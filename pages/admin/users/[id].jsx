import React from "react";
import { getSession } from "next-auth/client";

import { UpdateUsers } from "../../../components/admin/UpdateUser";
import { Layout } from "../../../components/layouts/Layout";

const UpdateUser = () => {
  return (
    <Layout title="Update Users">
      <UpdateUsers />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default UpdateUser;
