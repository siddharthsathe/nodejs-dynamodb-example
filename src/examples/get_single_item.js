const { User } = require("../model/User");
const { lastSavedUserId } = require("../util");

require("../config/dynamoDBConnection");

/**
 * @summary Retrieve a single item from table. This operation is
 * performed on primary attribute only.
 *
 * For devs from MySQL/PGSQL community:
 * `get(1)` is equivalent to
 *    select * from user where id(primary key) = 1
 *
 * @returns Object of matching record or undefined.
 */

(async function () {
  try {
    const user = await User.get(lastSavedUserId);
    console.log(user);
  } catch (error) {
    console.error(`Failed to find user, error: ${error}`);
  }
})();
