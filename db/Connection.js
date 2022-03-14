const mongoose = require("mongoose");
const { mongodb } = require("../src/keys");

const connectDB = async () => {
  await mongoose
    .connect(mongodb.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("Connected with MongoDB"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
