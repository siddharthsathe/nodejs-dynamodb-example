const { User } = require("../model/User");

require("../config/dynamoDBConnection");

/**
 * @summary Retrieve all items from a table.
 *
 * For devs from MySQL/PGSQL community:
 * `scan()` is equivalent to
 *    select * from user;
 *
 * @returns Array of items
 */

(async function () {
  try {
    const users = await User.scan().exec();
    console.log(users);
  } catch (error) {
    console.error(`Failed to retrieve all users, error: ${error}`);
  }
})();
