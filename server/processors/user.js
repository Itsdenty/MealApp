import database from '../database/models';
import createToken from '../utils/create-token';

const secretKey = process.env.JWT_SECRET;

/**
 * @description - Describes the Users of the app, their creation, their editing e.t.c.
 */
class userProcessor {
  /**
   * @description - Creates a new user in the app and assigns a token to them
   * @param{Object} user - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */
  static async createUser(user) {
    try {
      const createdUser = await database.User.create(user);
      // create the token after all the inputs are certified ok
      const {
          id, firstName, lastName, email
        } = createdUser,
        authToken = createToken.token({
          id, firstName, lastName, email
        }, secretKey),
        resp = {
          message: 'User created successfully',
          user: {
            id, firstName, lastName, email
          },
          token: authToken,
        };
      return resp;
    } catch (e) {
      // create and throw 500 error
      const err = { error: 'and error occured or user already exists' };
      throw err;
    }
  }


  /**
   * @description - Signs a user in by creating a session token
   * @param{Object} login - api request
   * @param{Object} res - route response
   * @return{json} the user's login status
   */
  static async loginUser(login) {
    try {
      const user = await database.User.findOne({ where: { email: login.email } });
      if (!user) {
        throw new Error('wrong login credentials!');
      } else if (!user.validPassword(login.validPassword)) {
        throw new Error('invalid password');
      } else {
        const authUser = user,
          {
            id, firstName, lastName, email
          } = authUser,

          authToken = createToken.token({
            id, firstName, lastName, email
          }, secretKey),
          resp = {
            message: 'User loggedin successfully',
            user: {
              id, firstName, lastName, email
            },
            token: authToken,
          };
        return resp;
      }
    } catch (e) {
      // create and throw 500 error
      const err = { error: 'and error occured while trying to log the user in' };
      throw err;
    }
  }
}

export default userProcessor;
