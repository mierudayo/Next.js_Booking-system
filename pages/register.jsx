import { getSession } from "next-auth/client";

import { Register } from "../components/auth/Register";
import { Layout } from "../components/layouts/Layout";

export default function RegisterPage() {
  return (
    <Layout>
      <Register />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};
