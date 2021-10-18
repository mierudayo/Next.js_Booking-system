import nc from "next-connect";
import { dbConnect } from "../../../config/dbConnect";

import {
  createNewRoom,
  getAllRooms,
} from "../../../controllers/roomControllers";
import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.get(getAllRooms);
handler.post(createNewRoom);

export default handler;
