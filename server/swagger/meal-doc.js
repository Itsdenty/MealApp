/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * definition:
 *   MealObject:
 *     properties:
 *       id:
 *         type: number
 *       userId:
 *         type: number
 *       price:
 *         type: number
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       isMenu:
 *         type: boolean
 *       type:
 *         type: string
 *       orderedTimes:
 *         type: number
 *   Meal:
 *     properties:
 *       price:
 *         type: number
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       isMenu:
 *         type: boolean
 *       type:
 *         type: string
 *       promo:
 *         type: string
 *   MealModel:
 *     properties:
 *       meal:
 *         $ref: '#/definitions/Meal'
 *   MealResponse:
 *     properties:
 *       message:
 *         type: string
 *       id:
 *         type: number
 *   ResponseObjectSingleMeal:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *         $ref: '#/definitions/MealObject'
 *   ResponseObjectMeal:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *         type: array
 *         items:
 *           $ref: '#/definitions/MealObject'
 *   ManipulationObject:
 *     properties:
 *       message:
 *         type: string
 *       id:
 *         type: number
 *   UpdateObjectMeal:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *           $ref: '#/definitions/ManipulationObject'
 *   ErrorObject:
 *     properties:
 *       status:
 *         type: number
 *       error:
 *         type: string
 *   Token:
 *     properties:
 *       token:
 *        type: string
 */

/**
 * @swagger
 * /meal:
 *   post:
 *     tags:
 *       - Meal
 *     description: Creates a new meal
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: meal
 *         description: meal creation credentials
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/MealModel'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/MealResponse'
 *       500:
 *         description: Server error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       400:
 *         description: Validation error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       401:
 *         description: Authentication error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 *       403:
 *         description: Authourization error exists
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */
