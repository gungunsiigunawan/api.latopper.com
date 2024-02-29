/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints for user authentication
 * components:
 *   securitySchemes:
 *      cookieAuth:         # arbitrary name for the security scheme; will be used in the "security" key later
 *          type: apiKey
 *          in: cookie
 *          name: JSESSIONID  # cookie name
 *   security:
 *      cookieAuth: []
 *   schemas:
 *     SigninRequest:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *     SigninResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         token:
 *           type: string
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 * /api/auth/signin:
 *   post:
 *     summary: Authenticate user and return auth cookie
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       description: A JSON object containing the login and password.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SigninRequest'
 *       security: []
 *     responses:
 *       200:
 *         description: >
 *              Successful authentication
 *              The session ID is returned in a cookie named `JSESSIONID`. You need to include this cookie in subsequent requests.
 *         headers:
 *              set-cookie:
 *               schema: 
 *                  type: string
 *                  example: JSESSIONID=abcde12345; Path=/; HttpOnly
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SigninResponse'
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 * 
 */