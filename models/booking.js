import { models, model, Schema } from "mongoose";
import timeZone from "mongoose-timezone";

const bookingSchma = new Schema({
  room: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Room",
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  amountPaid: {
    type: Number,
    required: true,
  },
  daysOfStay: {
    type: Number,
    required: true,
  },
  paymentInfo: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  paidAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

bookingSchma.plugin(timeZone);

export default models.Booking || model("Booking", bookingSchma);
