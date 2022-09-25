import Room from "../models/room";

const allRooms = async (req, res) => {
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

// Create new room => /api/rooms/new
const newRoom = async (req, res) => {
   try {
      const room = await Room.create(req.body);

      res.status(201).json({
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

export { allRooms, newRoom };