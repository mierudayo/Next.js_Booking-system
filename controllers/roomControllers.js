import cloudinary from "cloudinary";

import Room from "../models/room";
import Booking from "../models/booking";
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from "../middlewares/catchAsyncError";
import APIFeatures from "../utils/apiFeatures";

// Get All Rooms => (GET) /api/rooms/
export const getAllRooms = catchAsyncError(async (req, res) => {
  const resPerPage = 4;
  const roomsCount = await Room.countDocuments();

  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();

  let rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;

  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms,
  });
});

// Create New Room => (POST) /api/rooms
export const createNewRoom = catchAsyncError(async (req, res) => {
  const images = req.body.images;

  let imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "bookit/rooms",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.image = imagesLinks;
  req.body.user = req.user._id;

  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});

// Get Room Details => (GET) /api/rooms/:id
export const getSingleRoom = catchAsyncError(async (req, res) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});

// Update Room => (PUT) /api/rooms/:id
export const updateRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 400));
  }
  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    room,
  });
});

// Delete Room => (DELETE) /api/rooms/:id
export const deleteRoom = catchAsyncError(async (req, res) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 400));
  }
  await room.remove();

  res.status(200).json({
    success: true,
    message: "Room is deleted",
  });
});

// Create new review => (POST) /api/review/
export const createNewReview = catchAsyncError(async (req, res) => {
  const { rating, comment, roomId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const room = await Room.findById(roomId);

  const isReviewed = room.reviews.find(
    (r) => r.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    room.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    room.reviews.push(review);
    room.numOfReviews = room.reviews.length;
  }

  room.ratings =
    room.reviews.reduce((acc, item) => item.rating + acc, 0) /
    room.reviews.length;

  await room.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Check Review Availability   =>  (GET) /api/reviews/check_review_availability
export const checkReviewAvailability = catchAsyncError(async (req, res) => {
  const { roomId } = req.query;

  const bookings = await Booking.find({ user: req.user._id, room: roomId });

  let isReviewAvailable = false;
  if (bookings.length > 0) isReviewAvailable = true;

  res.status(200).json({
    success: true,
    isReviewAvailable,
  });
});

// Get all rooms - Admin   =>  (GET) /api/admin/rooms
export const allAdminRooms = catchAsyncError(async (req, res) => {
  const rooms = await Room.find();

  res.status(200).json({
    success: true,
    rooms,
  });
});
