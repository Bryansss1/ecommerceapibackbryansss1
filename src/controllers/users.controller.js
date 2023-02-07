const cartsServices = require("../services/carts.service")
const UsersServices = require("../services/users.service")
const models=require("../models/index")

const{product}=models

const DeleteUser=async(req,res)=>{
    try {
        const {id}=req.params
        const final=await cartsServices.DeleteCart(id)
        const destroyOb=await product.destroy({where:{user_id:id}})
        const result=await UsersServices.Deleteuser(id)
        res.json({message:"deleted user"})
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}

const updatUser=async(req,res)=>{
    try {
        const {id}=req.params
        const bodyy=req.body
        const result=await UsersServices.updateUser(bodyy,id)
        res.json(result)
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}

module.exports={
    DeleteUser,
    updatUser,
}