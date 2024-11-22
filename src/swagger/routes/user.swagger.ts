/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 * /user:
 *   get:
 *     summary: Get all users.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *               example:
 *                 - id: "1"
 *                   name: "John Doe"
 *                   email: "john@teste.com"
 *                   createdAt: "2024-01-01T10:00:00Z"
 *                   updatedAt: "2024-01-01T10:00:00Z"
 *       '401':
 *         description: Unauthorized.
 *       '500':
 *         description: Internal Server Error.
 *       '403':
 *         description: Forbidden.
 *
 *   post:
 *     summary: Create a new user.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: "John Doe"
 *             email: "john@teste.com"
 *     responses:
 *       '201':
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '400':
 *         description: Bad Request.
 *       '401':
 *         description: Unauthorized.
 *       '500':
 *         description: Internal Server Error.
 *       '403':
 *         description: Forbidden.
 *
 * /user/{id}:
 *   get:
 *     summary: Get a user by ID.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to retrieve.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/User'
 *             example:
 *               id: "1"
 *               name: "John Doe"
 *               email: "john@teste.com"
 *               createdAt: "2024-01-01T10:00:00Z"
 *               updatedAt: "2024-01-01T10:00:00Z"
 *       '404':
 *         description: User not found.
 *       '401':
 *         description: Unauthorized.
 *       '500':
 *         description: Internal Server Error.
 *       '403':
 *         description: Forbidden.
 *
 *   put:
 *     summary: Update an existing user.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: "John Doe"
 *             email: "john.doe@teste.com"
 *     responses:
 *       '200':
 *         description: User updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '400':
 *         description: Bad Request.
 *       '401':
 *         description: Unauthorized.
 *       '404':
 *         description: User not found.
 *       '500':
 *         description: Internal Server Error.
 *       '403':
 *         description: Forbidden.
 *
 *   delete:
 *     summary: Delete a user.
 *     tags:
 *       - User
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to delete.
 *     responses:
 *       '204':
 *         description: User deleted successfully.
 *       '404':
 *         description: User not found.
 *       '401':
 *         description: Unauthorized.
 *       '500':
 *         description: Internal Server Error.
 *       '403':
 *         description: Forbidden.
 */
