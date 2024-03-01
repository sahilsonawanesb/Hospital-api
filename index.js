require("dotenv").config();
const db = require("./config/mongoose");
const cors = require("cors");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 27017;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Hospital_API_DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});

app.use(cors());

///------------- Body Parser for req.body ----------------///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


///--------- USING ROUTES --------------///
app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running on Port :: ${port}`);
    return;
  }

  console.log(`Server is Running on Port :: ${port}`);
});
