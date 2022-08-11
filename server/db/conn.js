const mongoose = require("mongoose");

const DB =
  "mongodb+srv://lichih1234:1234lichih@cluster0.jk9iryx.mongodb.net/mernstack?retryWrites=true&w=majority";

// mongoose.connect = (DB,
// {
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("connection start"))
//   .catch((error) => console.log(error.message));

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
