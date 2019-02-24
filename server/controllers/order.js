import transformer from '../utils/transformer';
import processor from '../processors/order';
import PermissionList from '../config/permissions';

/**
 *
 *
 * @class userController
 */
class orderController {
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof orderController
   * @returns {*} createOrder
   */
  static async createOrder(req, res) {
    const { order } = req.body;
    order.userId = req.decodedToken.id;

    // Todo move the params operations cleanups to sanitizers
    order.isCancelled = false;
    order.isDelivered = false;
    try {
      const createOrder = await processor.createOrder(order);
      res.send(transformer.transformResponse(200, createOrder));
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
   * @memberof orderController
   * @returns {*} getOrders
   */
  static async getOrders(req, res) {
    try {
      const userId = req.decodedToken.id,
        isAdmin = req.decodedToken.permissions.includes(PermissionList.WRITE_MEAL) || false;
      const getOrders = await processor.getOrders(userId, isAdmin);
      res.send(transformer.transformResponse(200, getOrders));
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
   * @memberof orderController
   * @returns {*} updateOrder
   */
  static async updateOrder(req, res) {
    const { order } = req.body,
      userId = req.decodedToken.id;
    try {
      const updateMeal = await processor.updateOrder(userId, req.params.id, order);
      res.send(transformer.transformResponse(200, updateMeal));
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
   * @memberof orderController
   * @returns {*} getMeals
   */
  static async deleteMeal(req, res) {
    try {
      const deleteMeal = await processor.deleteMeal(req.params.id);
      res.send(transformer.transformResponse(200, deleteMeal));
    } catch (error) {
      res.status(500).json(transformer.transformResponse(500, error.error));
    }
  }
}
export default orderController;
