import nc from "next-connect";

import { dbConnect } from "../../../config/dbConnect";
import {
  createNewReview,
  getAdminReviews,
} from "../../../controllers/roomControllers";
import { isAuthenticatedUser } from "../../../middlewares/auth";
import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).put(createNewReview);
handler.use(isAuthenticatedUser).get(getAdminReviews);

export default handler;
