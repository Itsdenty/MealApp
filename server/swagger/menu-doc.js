/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * definition:
 *   MenuResponse:
 *     properties:
 *       message:
 *         type: string
 *       id:
 *         type: number
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
 * /menu:
 *   get:
 *     tags:
 *       - Menu
 *     description: Returns the day's menu
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/
 *     parameters:
 *       - name: id
 *         description: Meal's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: caterer menu data
 *         schema:
 *           $ref: '#/definitions/MenuResponse'
 *       500:
 *         description: Server error exists
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
/**
 * @swagger
 * /menu/{id}:
 *   patch:
 *     tags:
 *       - Menu
 *     description: adds meal to the current menu
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Menu's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/MenuResponse'
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
/**
 * @swagger
 * /menu/{id}:
 *   delete:
 *     tags:
 *       - Menu
 *     description: Delete a single menu object
 *     security:
 *       - Bearer: []
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Menu's id
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Menu successfully deleted
 *         schema:
 *           $ref: '#/definitions/MenuResponse'
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
