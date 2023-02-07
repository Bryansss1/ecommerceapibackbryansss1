const ProductsServices = require("../services/products.service")
const jwt=require("jsonwebtoken")
const cartsServices = require("../services/carts.service")


const createProducts=async(req,res)=>{
    try {
        const token=req.headers.authorizate
        const {id}=req.params
        const product=req.body
        product.user_id=id
        const result=await ProductsServices.createPro(product)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}

const deleteProducts=async(req,res)=>{
    try {
        const {id}=req.params
        const {product_id}=req.body
        const result=await ProductsServices.deletePro(id,product_id)
        res.json({messsage:"producto eliminado"})
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}


const addProductIncart=async(req,res)=>{
    try {
        const idUser=req.params.id
        const {product_id,quantity}=req.body
        const result=await ProductsServices.addProductIncartt(product_id,quantity,idUser)
        res.json({message:"finish"})
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}

const updateProduct=async(req,res)=>{
    try {
        const {id}=req.params
        const newpro=req.body
        const result=await ProductsServices.updPro(newpro,id)
        res.json(result)
    } catch (error) {
        res.status(200).json({message:"se actualizo el producto"})
    }
}

const deleteProductIncartt=async(req,res)=>{
    try {
        const {id}=req.params
        const idProd=req.body
        const result=await ProductsServices.deleteProductIncart(idProd,id)
        res.json({message:"producto eliminado del carrito"})
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}

const allproductsbyUser=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await ProductsServices.getAllproductbyuser(id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}

const getAllproductIncartt=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await ProductsServices.getAllproductIncart(id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}

const getAllproduct=async(req,res)=>{
    try {
        const result=await ProductsServices.allProducts()
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}




module.exports={
    createProducts,
    deleteProducts,
    addProductIncart,
    updateProduct,
    deleteProductIncartt,
    getAllproductIncartt,
    getAllproduct,
    allproductsbyUser
}