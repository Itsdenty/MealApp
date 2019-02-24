import transformer from '../utils/transformer';
import processor from '../processors/order';

/**
 *
 *
 * @class userController
 */
class mealController {
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof mealController
   * @returns {*} createMeal
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
   * @memberof mealController
   * @returns {*} getMeals
   */
  static async getMeals(req, res) {
    try {
      const userId = req.decodedToken.id;
      const getMeals = await processor.getMeals(userId);
      res.send(transformer.transformResponse(200, getMeals));
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
   * @memberof mealController
   * @returns {*} createMeal
   */
  static async updateMeal(req, res) {
    const { meal } = req.body,
      userId = req.decodedToken.id;
    try {
      const updateMeal = await processor.updateMeal(userId, req.params.id, meal);
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
   * @memberof mealController
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
export default mealController;
