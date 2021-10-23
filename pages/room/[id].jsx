import { Layout } from "../../components/layouts/Layout";
import { RoomDetails } from "../../components/room/RoomDetails";
import { getRoomDetails } from "../../redux/actions/roomActions";
import { wrapper } from "../../redux/store";

export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails title="Room Details" />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(getRoomDetails(req, params.id));
    }
);
