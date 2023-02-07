const {Router}=require("express")
const authMiddleware=require("../middlewares/auth.middleware")
const { DeleteUser, updatUser } = require("../controllers/users.controller")

const router=Router()

router.delete("/users/:id",authMiddleware,DeleteUser)
router.put("/users/:id",authMiddleware,updatUser)

/**
 * @openapi
 * /api/v1/users/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: delete user
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: user delete
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user delete
 *       400:
 *         description: Error 
 *         content:
 *           application/json:
 *             schema:
 *               type:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: update user
 *     tags: [users]
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
 *       description:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schema/register"
 *     responses:
 *       200:
 *         description: user update
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user update
 *       400:
 *         description: Error
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