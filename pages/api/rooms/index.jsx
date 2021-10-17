import nc from "next-connect";

import { getAllRooms } from "../../../controllers/roomControllers";

const handler = nc();
handler.get(getAllRooms);

export default handler;
