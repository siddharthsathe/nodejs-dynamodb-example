const dynamoose = require("dynamoose");
const User = dynamoose.model(
  "User",
  new dynamoose.Schema(
    {
      id: String, // first field of schema is hash (primary) key
      firstName: String,
      lastName: String,
      email: String,
      country: String,
    },
    {
      timestamps: true,
    }
  )
);

module.exports.User = User;
