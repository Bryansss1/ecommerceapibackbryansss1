const models=require("../models/index")
const product = require("../models/product")

const {cart,users,products_in_carts,product_in_order,order}=models

class cartsServices{

static async createCart(id){
    try {
        const carts={
            user_id:id,
            total_price:0
        }
        const createcart=await cart.create(carts)
       return createcart 
    } catch (error) {
        throw error
    }
}

static async DeleteCart(id){
    try {
        const result=await cart.destroy({where:{user_id:id}})
        return result
    } catch (error) {
        throw error
    }
}



static async postCart_in_order(id){
    try {
const carttt_id=await cart.findOne({where:{user_id:id}})
const orderNew=await order.create({user_id:id,total_price:carttt_id.total_price,status:true})
const cartinpro=await products_in_carts.findAll({where:{cart_id:carttt_id.id}})
    if(cartinpro){
        cartinpro.forEach(async product=>{ 
            const pro=product.dataValues
            const result=await product_in_order.create({product_id:pro.product_id,order_id:orderNew.id,quantity:pro.quantity,price:pro.price,status:true})
            const pricenormal=await cart.update({total_price:0},{where:{user_id:id}})
            const deletecart_in_prod=await products_in_carts.destroy({where:{product_id:pro.product_id}})
            return result
        })
    }
    } catch (error) {
        throw error
    }
}

static getAllorderuser(id){
    
}
static async deleteOrder(id){
    try {
        const rest=await order.destroy({where:{id}})
        return rest
    } catch (error) {
        throw error
    }
}

}

module.exports=cartsServices