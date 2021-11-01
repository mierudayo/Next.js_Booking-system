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
    paidAt: Date.now(),
  });

  res.status(200).json({
    success: true,
    booking,
  });
});

// Check room booking => (GET) /api/bookings/check
export const checkRoomBookingAvailability = catchAsyncError(
  async (req, res) => {
    let { roomId, checkInDate, checkOutDate } = req.query;

    checkInDate = new Date(checkInDate);
    checkOutDate = new Date(checkOutDate);

    const bookings = await Booking.find({
      room: roomId,
      $and: [
        {
          checkInDate: {
            $lte: checkInDate,
          },
        },
        {
          checkOutDate: {
            $gte: checkOutDate,
          },
        },
      ],
    });

    // check if there's any booking available
    let isAvailable;

    if (bookings && bookings.length === 0) {
      isAvailable = true;
    } else {
      isAvailable = false;
    }

    res.status(200).json({
      success: true,
      isAvailable,
    });
  }
);

// Check booked dates => (GET) /api/bookings/check_booked_dates
export const checkBookedDates = catchAsyncError(async (req, res) => {
  let { roomId } = req.query;

  const bookings = await Booking.find({ room: roomId });

  let bookedDates = [];

  const timeDifference = moment().utcOffset() / 60;

  bookings.forEach((booking) => {
    const checkInDate = moment(booking.checkInDate).add(
      timeDifference,
      "hours"
    );
    const checkOutDate = moment(booking.checkOutDate).add(
      timeDifference,
      "hours"
    );

    const range = moment.range(moment(checkInDate), moment(checkOutDate));

    const dates = Array.from(range.by("day"));
    bookedDates = bookedDates.concat(dates);
  });

  res.status(200).json({
    success: true,
    isAvailable,
  });
});

// Get all bookings of user => (GET) /api/bookings/me
export const myBookings = catchAsyncError(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id })
    .populate({
      path: "room",
      select: "name pricePerNight images",
    })
    .populate({
      path: "user",
      select: "name email",
    });

  res.status(200).json({
    success: true,
    bookings,
  });
});
