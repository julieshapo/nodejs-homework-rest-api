const app = require("./app");

const mongoose = require("mongoose");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(
    app.listen(3000, () => {
      console.log(
        "Database connection successful. Server is listening on port 3000"
      );
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
