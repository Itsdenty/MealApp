import transformer from '../utils/transformer';
import processor from '../processors/meal';

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
  static async createMeal(req, res) {
    const { meal } = req.body;
    meal.userId = req.decodedToken.id;

    // Todo move the params operations cleanups to sanitizers
    meal.isMenu = meal.isMenu || false;
    meal.type = meal.type ? meal.type : 'African';

    try {
      const createMeal = await processor.createMeal(meal);
      res.send(transformer.transformResponse(200, createMeal));
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
}
export default mealController;
