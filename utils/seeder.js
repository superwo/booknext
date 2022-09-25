const Room = require("../models/room");

const mongoose = require("mongoose");

const rooms = require("../data/rooms.json");

mongoose.connect("mongodb://localhost:27017/bookit", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   // useCreateIndex: true,
   // useFindAndModify: false,
});

const seedRooms = async () => {
   try {
      await Room.deleteMany();
      console.log("Rooms are deleted");

      await Room.insertMany(rooms);
      console.log("All rooms are added");

      process.exit();
   } catch (error) {
      console.log(error.message);
      process.exit();
   }
};

seedRooms();
