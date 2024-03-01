const mongoose = require("mongoose");
const url = "mongodb://localhost/Hospital_API_DB";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the DB Successfully ");
  })
  .catch((err) => {
    console.error(`Error connecting to the DB. ${err}`);
  });
