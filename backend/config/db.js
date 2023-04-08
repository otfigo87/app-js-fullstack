const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(
          "mongodb+srv://aaotmane:aaotmane1987@cluster0.xxbcdqg.mongodb.net/test",
          () => console.log("Mongo connected")
        );
    } catch(err) {
        console.log(err);
        process.exit()
    }
}

module.exports = connectDB