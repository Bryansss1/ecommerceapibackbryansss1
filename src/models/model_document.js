/**
 * @openapi
 * components:
 *   schema:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: bryan sanabria
 *         email:
 *           type: string
 *           example: bryanzzz@gmail.com
 *         password:
 *           type: string
 *           example: bryan12345
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: sring
 *           example: bryanzzz@gmail.com
 *         password:
 *           type: string
 *           example: bryan12345
 *     loginresponde:
 *       type: object
 *       properties:
 *         email:
 *           type: sring
 *           example: bryanzzz@gmail.com
 *         password:
 *           type: string
 *           example: hdqwjqwdjnqdnj
 *         toke:
 *           type: string
 *           example: dwqd1q21qdqds
 *     order:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: number
 *             example: 2
 *           user_id:
 *             type: number
 *             example: 3
 *           total_price:
 *             type: float
 *             example: 23,23
 *           status:
 *             type: boolean
 *             example: true
 *     products:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: number
 *             example: 2
 *           name:
 *             type: string
 *             example: mayonesa
 *           availableqty:
 *             type: number
 *             example: 200
 *           price:
 *             type: float
 *             example: 23,23
 *           user_id:
 *             type: number
 *             example: 2
 *           status:
 *             type: boolean
 *             example: true
 *     product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: mayonesa
 *         availableqty:
 *           type: number
 *           example: 200
 *         user_id:
 *           type: number
 *           example: 2
 *         price:
 *           type: float
 *           example: 23,23
 *         status:
 *           type: boolean
 *           example: true
 *     productup:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 2
 *         name:
 *           type: string
 *           example: mayonesa
 *         availableqty:
 *           type: number
 *           example: 200
 *         price:
 *           type: float
 *           example: 23,23
 *         status:
 *           type: boolean
 *           example: true
 *     product_in_cart:
 *       type: object
 *       properties:
 *         product_id:
 *           type: number
 *           example: 2
 *         quantity:
 *           type: number
 *           example: 5
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */