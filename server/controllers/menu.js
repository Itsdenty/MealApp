import transformer from '../utils/transformer';
import processor from '../processors/menu';

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
  static async createMenu(req, res) {
    try {
      const createMenu = await processor.createMenu(req.params.id);
      res.send(transformer.transformResponse(200, createMenu));
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
  static async getMenu(req, res) {
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
   * @returns {*} getMeals
   */
  static async deleteMenu(req, res) {
    try {
      const deleteMeal = await processor.deleteMeal(req.params.id);
      res.send(transformer.transformResponse(200, deleteMeal));
    } catch (error) {
      res.status(500).json(transformer.transformResponse(500, error.error));
    }
  }
}
export default mealController;
