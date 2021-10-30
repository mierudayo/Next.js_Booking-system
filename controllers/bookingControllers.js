import absoluteUrl from "next-absolute-url";

import Booking from "../models/booking";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "../middlewares/catchAsyncError";

// Create new booking => (POST) /api/bookings
export const newBooking = catchAsyncError(async (req, res) => {
  const {
    room,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
  } = req.body;

  const booking = await Booking.create({
    room,
    user: req.user._id,
    checkInDate,
    checkOutDate,
    daysOfStay,
    amountPaid,
    paymentInfo,
  });

  res.status(200).json({
    success: true,
    booking,
  });
});
