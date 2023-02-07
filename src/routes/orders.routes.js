const {Router}=require("express")
const { getAllorderbyuser, deleteOr } = require("../controllers/order.controller")
const authMiddleware=require("../middlewares/auth.middleware")
const router=Router()

router.get("/user/:id/orders",authMiddleware,getAllorderbyuser)
router.delete("/user/orders",authMiddleware,deleteOr)

/**
 * @openapi
 * /api/v1/user/{id}/orders:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: get orders by user
 *     tags: [order/user]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schema/order"
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schema/order"
 * /api/v1/user/orders:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: delete one order for user
 *     tags: [order/user]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: order delete
 *       400:
 *         description: ERROR
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error
 */

module.exports=router