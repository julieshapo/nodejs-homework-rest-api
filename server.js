const app = require("./app");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://julieshapo:FA6YyVZ1ql5qqu1K@cluster0.4sk9ipa.mongodb.net/contacts_book";

mongoose
  .connect(DB_HOST)
  .then(
    app.listen(3001, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
