const {Router}=require("express")
const { createProducts, deleteProducts, addProductIncart,updateProduct, deleteProductIncartt,getAllproductIncartt, getAllproduct, allproductsbyUser} = require("../controllers/products.controller")
const authMiddleware=require("../middlewares/auth.middleware")
const router=Router()

router.get("/products",authMiddleware,getAllproduct,)

router.post("/user/:id/products",authMiddleware,createProducts)
router.get("/user/:id/products",authMiddleware,allproductsbyUser)
router.delete("/user/:id/products",authMiddleware,deleteProducts)
router.put("/user/:id/products",authMiddleware,updateProduct)

router.post("/products_in_cart/user/:id",authMiddleware,addProductIncart)
router.get("/products_in_cart/user/:id",authMiddleware,getAllproductIncartt)
router.delete("/products_in_cart/user/:id",authMiddleware,deleteProductIncartt)

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: get all
 *     tags: [products]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schema/products"
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
 * /api/v1/user/{id}/products:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: delete product by user
 *     tags: [product/user]
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
 *       description:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: number
 *                 example: 2
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
 *                   example: product delete
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
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: post product by user
 *     tags: [product/user]
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
 *       description:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schema/product"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schema/product"
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
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: update products by user
 *     tags: [product/user]
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
 *       description:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schema/productup"
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
 *                   example: product update
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
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: all products by user
 *     tags: [product/user]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schema/products"
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
 * /api/v1/products_in_cart/user/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: post product in cart by user
 *     tags: [product_in_cart/user]
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
 *       description:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schema/product_in_cart"
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
 *                   example: post product :)
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
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: get product in cart by user
 *     tags: [product_in_cart/user]
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
 *                   example: all product 
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
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: delete product in cart by user
 *     tags: [product_in_cart/user]
 *     parameters:
 *       - in: path
 *         name: id
 *     requestBody:
 *       description:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: number
 *                 example: 2
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
 *                   example: delete product :)
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