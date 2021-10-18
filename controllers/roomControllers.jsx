import Room from "../models/room";

// Get All Rooms => (GET) /api/rooms/
export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Create New Room => (POST) /api/rooms/
export const createNewRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Get Room Details => (GET) /api/rooms/:id
export const getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(400).json({
        success: false,
        error: "Room not found with this ID",
      });
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Update Room => (PUT) /api/rooms/:id
export const updateRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(400).json({
        success: false,
        error: "Room not found with this ID",
      });
    }
    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Delete Room => (DELETE) /api/rooms/:id
export const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(400).json({
        success: false,
        error: "Room not found with this ID",
      });
    }
    await room.remove();

    res.status(200).json({
      success: true,
      message: "Room is deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
