import nc from "next-connect";

import { dbConnect } from "../../../../config/dbConnect";
import onError from "../../../../middlewares/error";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "../../../../middlewares/auth";
import {
  getUserDetails,
  updateUser,
} from "../../../../controllers/authControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(getUserDetails);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateUser);

export default handler;
