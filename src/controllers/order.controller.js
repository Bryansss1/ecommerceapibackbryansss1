const OrderServices = require("../services/orders.service")


const getAllorderbyuser=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await OrderServices.orderAllbyuser(id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}

const deleteOr=async(req,res)=>{
    try {
        const {id}=req.body
        const result=await OrderServices.deleteOrder(id)
        res.json(result)
    } catch (error) {
        res.status(400).json({message:"error"})
    }
}
module.exports={
    getAllorderbyuser,
    deleteOr
}