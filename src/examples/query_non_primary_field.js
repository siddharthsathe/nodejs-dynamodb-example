const Dynamoose = require("dynamoose");
const { User } = require("../model/User");

require("../config/dynamoDBConnection");

/**
 * @summary Query on a non primary field for eg, email of a user.
 *
 * For devs from MySQL/PGSQL community:
 * `scan()` is equivalent to
 *    select * from user where email(non primary key) = 'sid@yahoo.com'
 *
 * @returns Array of 1 or more matching records
 */

(async function () {
  try {
    const userByEmail = await User.scan(
      new Dynamoose.Condition("email").eq("sid@yahoo.com")
    ).exec();
    console.info(`User: ${JSON.stringify(userByEmail)}`);
  } catch (error) {
    console.error("Failed to retrieve users with non primary field", error);
  }
})();
