const models=require("../models/index")

const {order,product_in_order}=models

class OrderServices {

static async orderAllbyuser(id){
    try {
        const result=await order.findAll({
            where:{user_id:id},
            include:{
                model:product_in_order,
                as:"product_in_orders",
                attributes:["product_id","quantity","price","status"]
            }
        })
        return result
    } catch (error) {
        throw error
    }
}

static async deleteOrder(id){
try {
    const findor=await order.findByPk(id)
    const relete=await product_in_order.destroy({where:{order_id:id}})
    const result=await order.destroy({where:{id}})
    return result
} catch (error) {
    throw error
}
}

}

module.exports=OrderServices