import nc from "next-connect";
import { dbConnect } from "../../../config/dbConnect";

import { allAdminUsers } from "../../../controllers/authControllers";
import { isAuthenticatedUser, authorizeRoles } from "../../../middlewares/auth";
import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser, authorizeRoles("admin")).get(allAdminUsers);

export default handler;
