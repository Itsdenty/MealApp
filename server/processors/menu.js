import database from '../database/models';

/**
 * @description - Describes the Users of the app, their creation, their editing e.t.c.
 */
class mealProcessor {
  /**
   * @description - Creates a new user in the app and assigns a token to them
   * @param{Object} id - api request
   * @param{Object} res - route response
   * @return{json} the registered user's detail
   */
  static async createMenu(id) {
    try {
      const createdMenu = await database.Meal.update({ isMenu: true }, { where: { id } });
      if (createdMenu[0] === 0) {
        // create and throw 500 error
        const err = { error: 'and error occured' };
        throw err;
      }
      const resp = {
        message: 'Meal created successfully',
        menu: createdMenu
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
  static async getMenu(userId) {
    try {
      const menu = await database.Meal.findAll({ where: { userId, isMenu: true } }),
        resp = {
          menu
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
  static async deleteMenu(id) {
    try {
      const menu = await database.Meal.update({ isMenu: false }, { where: { id } });
      if (menu[0] === 0) {
        // create and throw 500 error
        const err = { error: 'and error occured' };
        throw err;
      }
      const resp = {
        message: 'Meal deleted successfully',
        menu
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
