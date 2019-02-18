import database from '../database/models';

/**
 * @description - Describes the Users of the app, their creation, their editing e.t.c.
 */
class mealProcessor {
  /**
   * @description - Creates a new user in the app and assigns a token to them
   * @param{Object} meal - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */
  static async createMeal(meal) {
    try {
      const createdMeal = await database.Meal.create(meal),
        resp = {
          message: 'Meal created successfully',
          id: createdMeal.id
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

  /**
   * @description - Creates a new user in the app and assigns a token to them
   * @param{Object} id - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */
  static async deleteMeal(id) {
    try {
      const meal = await database.Meal.destroy({ where: { id } }),
        resp = {
          message: 'Meal deleted successfully',
          meal
        };
      return resp;
    } catch (e) {
      // create and throw 500 error
      const err = { error: 'and error occured' };
      throw err;
    }
  }
}
export default mealProcessor;
