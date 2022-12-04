const { User } = require("../model/User");
const { lastSavedUserId } = require("../util");

require("../config/dynamoDBConnection");

/**
 * @summary Delete user by its primary key.
 *
 * For devs from MySQL/PGSQL community:
 * `delete()` is equivalent to
 *    delete from user where id(primary key) = 1
 *
 * @returns undefined whether item is deleted or not.
 */

(async function () {
  try {
    await User.delete(lastSavedUserId);
    console.info(`User deleted successfully with id ${lastSavedUserId}`);
  } catch (error) {
    console.error(`Failed to delete user with id ${userId}`, error);
  }
})();
