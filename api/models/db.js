const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/EmployeesDb",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDb connected");
    } else {
      console.log("error in Db connection :" + err);
    }
  }
);

require('./employee.model')