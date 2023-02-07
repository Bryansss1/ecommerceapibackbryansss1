const {Router}=require("express");
const { register,login } = require("../controllers/auth.controller");

const router=Router()
router.post("/register",register)
router.post("/login",login)

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: create a new user on ecommerce
 *     tags:
 *       - Auth
 *     requestBody:
 *       description:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schema/register"
 *     responses:
 *       200:
 *         description: User Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schema/register"
 *       400:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 * /api/v1/auth/login:
 *   post:
 *     summary: login user
 *     tags:
 *       - Auth
 *     requestBody:
 *       description:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schema/login"
 *     responses:
 *       200:
 *         description: Login success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schema/loginresponde"
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: error
 */


module.exports=router;