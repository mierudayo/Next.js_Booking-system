import nc from "next-connect";

import { dbConnect } from "../../../config/dbConnect";
import { checkBookedDates } from "../../../controllers/bookingControllers";
import onError from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.get(checkBookedDates);

export default handler;
