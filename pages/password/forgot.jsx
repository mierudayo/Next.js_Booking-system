import React from "react";

import { Layout } from "../../components/layouts/Layout";
import { ForgotPassword } from "../../components/user/ForgotPassword";

export default function ForgotPasswordPage() {
  return (
    <Layout title="Forgot Password">
      <ForgotPassword />
    </Layout>
  );
}
