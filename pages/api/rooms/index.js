import nc from "next-connect";
import { dbConnect } from "../../../config/dbConnect";

import {
  createNewRoom,
  getAllRooms,
} from "../../../controllers/roomControllers";
import { isAuthenticatedUser, authorizeRoles } from "../../../middlewares/auth";
import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.get(getAllRooms);

handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(createNewRoom);

export default handler;
