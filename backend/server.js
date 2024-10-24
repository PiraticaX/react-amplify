const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();  // Ensure this is called at the top

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://darshanpiraticax:Takeit123@cluster0.tmqc5qz.mongodb.net/"; 

// Connect to MongoDB
mongoose.connect(uri, {
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

// Define routes and other app logic
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});