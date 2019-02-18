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
    console.log(meal);
    try {
      const createdMeal = await database.Meal.create(meal),
        resp = {
          message: 'User created successfully',
          meal: createdMeal
        };
      return resp;
    } catch (e) {
      console.log(e);
      // create and throw 500 error
      const err = { error: 'and error occured' };
      throw err;
    }
  }
}

export default mealProcessor;
