import { getSession } from "next-auth/client";
import React from "react";

import { Layout } from "../../components/layouts/Layout";
import { Profile } from "../../components/user/Profile";

export default function UpdateProfilePage() {
  return (
    <Layout title="Update Profile">
      <Profile />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return { props: { session } };
};
