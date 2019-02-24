import database from '../database/models';

/**
 * @description - Describes the Users of the app, their creation, their editing e.t.c.
 */
class orderProcessor {
  /**
   * @description - Creates a new user in the app and assigns a token to them
   * @param{Object} order - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */
  static async createOrder(order) {
    try {
      try {
        const meal = await database.Meal.findOne({ where: { id: order.mealId } }),
          catererId = meal.userId;
        order.catererId = catererId;
        const orderedMeal = await database.Order.create(order),
          resp = {
            message: 'Order created successfully',
            id: orderedMeal.id
          };
        return resp;
      } catch (e) {
        // create and throw 500 error
        const err = { error: 'an error occured' };
        throw err;
      }
    } catch (e) {
      // create and throw 500 error
      const err = { error: 'an error occured' };
      throw err;
    }
  }

  /**
   * @description - Creates a new user in the app and assigns a token to them
   * @param{Object} userId - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */
  static async getMeals(userId) {
    try {
      const meals = await database.Meal.findAll({ where: { userId } }),
        resp = {
          meals
        };
      return resp;
    } catch (e) {
      // create and throw 500 error
      const err = { error: 'and error occured' };
      throw err;
    }
  }

  /**
   * @description - Creates a new user in the app and assigns a token to them
   * @param{*} userId - api request
   * @param{*} id - route response
   * @param{*} meal - route response
   * @return{json} the registered user's detail
   */
  static async updateMeal(userId, id, meal) {
    try {
      const updatedMeal = await database.Meal.update(meal, { where: { userId, id } }),
        resp = {
          message: 'Meal updated successfully',
          id: updatedMeal.id
        };
      return resp;
    } catch (e) {
      // create and throw 500 error
      const err = { error: 'and error occured' };
      throw err;
    }
  }
}
export default orderProcessor;
