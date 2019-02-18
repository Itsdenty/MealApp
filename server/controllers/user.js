import transformer from '../utils/transformer';
import processor from '../processors/user';

/**
 *
 *
 * @class userController
 */
class userController {
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof userController
   * @returns {*} createUser
   */
  static async createUser(req, res) {
    const { user } = req.body;

    try {
      const createUser = await processor.createUser(user);
      res.send(transformer.transformResponse(200, createUser));
    } catch (error) {
      res.status(500).json(transformer.transformResponse(500, error.error));
    }
  }

  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns {Object} loginUser
   * @memberof userController
   */
  static async loginUser(req, res) {
    try {
      const loginUser = await processor.loginUser(req.body.login);
      res.send(transformer.transformResponse(200, loginUser));
    } catch (error) {
      res.status(500).json(transformer.transformResponse(500, error.error));
    }
  }
}

export default userController;
