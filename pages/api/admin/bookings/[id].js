import nc from "next-connect";

import { dbConnect } from "../../../../config/dbConnect";

import onError from "../../../../middlewares/error";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "../../../../middlewares/auth";
import { deleteAdminBookings } from "../../../../controllers/bookingControllers";

const handler = nc({ onError });

dbConnect();

handler
  .use(isAuthenticatedUser, authorizeRoles("admin"))
  .delete(deleteAdminBookings);

export default handler;
