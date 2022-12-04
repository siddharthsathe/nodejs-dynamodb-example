const { lastSavedUserId } = require("../util/index");
const { User } = require("../model/User");

require("../config/dynamoDBConnection");

// static data
const registerUser = {
  id: lastSavedUserId,
  firstName: "sid",
  lastName: "sathe",
  email: "sid@yahoo.com",
  country: "India",
};
const createUser = new User(registerUser);

/**
 * @summary Insert an item in table.
 *
 * For devs from MySQL/PGSQL community:
 * `get(1)` is equivalent to
 *    insert into user(name, email) values ('sid', 'sid@yahoo.com')
 *
 * @returns Saved item or error if any.
 */

(async function () {
  try {
    const user = await createUser.save();
    console.log("User created successfully", user);
  } catch (error) {
    console.error(`Failed to create user, error: ${error}`);
  }
})();
