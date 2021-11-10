import nc from "next-connect";

import { dbConnect } from "../../../../config/dbConnect";
import onError from "../../../../middlewares/error";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "../../../../middlewares/auth";
import {
  deleteUser,
  getUserDetails,
  updateUser,
} from "../../../../controllers/authControllers";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(getUserDetails);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).put(updateUser);
handler.use(isAuthenticatedUser, authorizeRoles("admin")).delete(deleteUser);

export default handler;
