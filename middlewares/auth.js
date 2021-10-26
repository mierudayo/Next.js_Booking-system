import { getSession } from "next-auth/client";

import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "./catchAsyncError";

export const isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) {
    return next(new ErrorHandler("Login first to access resource", 401));
  }

  req.user = session.user;
  next();
});
