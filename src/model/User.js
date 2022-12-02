const dynamoose = require("dynamoose");
const User = dynamoose.model(
  "User",
  new dynamoose.Schema({
    id: String, // first field of schema is hash key
    firstName: String,
    lastName: String,
    email: String,
    country: String,
  })
);

module.exports.User = User;
