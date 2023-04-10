const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.Mongo_URI, console.log("MogoDB running")
        );
    } catch(err) {
        console.log(err);
        process.exit()
    }
}

module.exports = connectDB