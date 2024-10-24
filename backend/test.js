require('dotenv').config();
const mongoose = require('mongoose');

const uri = "mongodb+srv://darshanpiraticax:Takeit123@cluster0.tmqc5qz.mongodb.net/"; // Change to MONGO_URI

mongoose.connect(uri)
    .then(() => {
        console.log('MongoDB connected!'); // Log success message
        // Optionally, close the connection after testing
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Could not connect to MongoDB...', err); // Log error message
    });

console.log('MongoDB URI:', uri);