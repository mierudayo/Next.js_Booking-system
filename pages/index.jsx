import { Home } from "../components/Home";
import { Layout } from "../components/layouts/Layout";
import { getRooms } from "../redux/actions/roomActions";
import { wrapper } from "../redux/store";

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(
        getRooms(req, query.page, query.location, query.guests, query.category)
      );
    }
);
