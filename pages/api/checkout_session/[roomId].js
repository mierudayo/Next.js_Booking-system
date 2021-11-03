import nc from "next-connect";

import { dbConnect } from "../../../config/dbConnect";
import { stripeCheckoutSession } from "../../../controllers/paymentControllers";
import { isAuthenticatedUser } from "../../../middlewares/auth";
import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.use(isAuthenticatedUser).get(stripeCheckoutSession);

export default handler;
