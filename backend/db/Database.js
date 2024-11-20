const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL  || 'mongodb+srv://<username>:<password>@cluster0.yioitk3.mongodb.net/E-Shop?retryWrites=true&w=majority' , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`mongod connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
