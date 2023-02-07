const {Router}=require("express")
const { postcart_Im_Order } = require("../controllers/cart.controller")
const authMiddleware=require("../middlewares/auth.middleware")

const router=Router()


router.post("/cart_in_order/user/:id",authMiddleware,postcart_Im_Order)

/**
 * @openapi
 * /api/v1/cart_in_order/user/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: buy cart
 *     tags: [cart/user]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: Buy finish
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: cart buy
 *       400:
 *         description: Error not exist products in cart
 *         content:
 *           application/json:
 *             schema:
 *               type:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error
 */


module.exports=router