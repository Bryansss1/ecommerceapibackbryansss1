const models=require("../models/index")

const {product,users,products_in_carts,cart}=models

class ProductsServices{

static async createPro(prod){
try {
    if(prod.availableqty==0){
        const result=await product.create({...prod,status:false})
        return result
    }else{
       const result=await product.create(prod)
       return result
    }
} catch (error) {
    throw error
}
}

static async deletePro(idd,product_id){
    try {
    const result=await product.destroy({where:{id:product_id,user_id:idd}})
    if(result){
       return result 
    }else{
        return {message:"error"}
    }
    
    } catch (error) {
        throw error
    }
}

static async getAllproductIncart(id){
    try {
        const result=await users.findByPk(id,{
            attributes:["id","username"],
            include:{
                model:cart,
                as:"carts",
                attributes:["id","total_price"],
                include:{
                    model:products_in_carts,
                    as:"products_in_carts",
                    attributes:["product_id","quantity","price","status"]
                }
            }
        })
        return result
    } catch (error) {
        throw error
    }
}

static async updPro(newpro,idd){
    try {
        const findPro=await product.findOne({where:{user_id:idd,id:newpro.id}})
       if(findPro){
        const updatee=await product.update(newpro,{where:{id:findPro.id}})
        const cartUser=await cart.findOne({where:{user_id:idd}})
        const findProdd=await product.findOne({where:{id:findPro.id}})
        const productIncart=await products_in_carts.findOne({where:{product_id:findPro.id,}})
        if(findProdd && cartUser && productIncart){
            if(findPro.availableqty >= productIncart.quantity){
                const priceSu=findProdd.price*productIncart.quantity
                const cart_inpro={
                    cart_id:cartUser.id,
                    product_id:findProdd.id,
                    quantity:productIncart.quantity,
                    price: priceSu
                }
                const restPa={total_price:cartUser.total_price - productIncart.price}
                const sumPa={total_price:cartUser.total_price + productIncart.price}
        
                const result=await products_in_carts.update(cart_inpro,{where:{product_id:findPro.id,cart_id:cartUser.id}})
                const updatePriceRest=await cart.update(restPa,{where:{user_id:idd}})
                const updatePriceSum=await cart.update(sumPa,{where:{user_id:idd}})
            }
        }
        return updatee
       } 
    } catch (error) {
        throw error
    }
}

static async deleteProductIncart(idprod,iduser){
    try {
        const cartUser=await cart.findOne({where:{user_id:iduser}})
        const productIncart=await products_in_carts.findOne({where:{product_id:idprod.product_id,}})
        if(productIncart){
            const cart_inpro={
                cart_id:cartUser.id,
                product_id:productIncart.product_id,
                quantity:productIncart.quantity,
                price: productIncart.price
            }
        const updatePrice=await cart.update({total_price:cartUser.total_price - cart_inpro.price},{where:{user_id:iduser}})
        const result=await products_in_carts.destroy({where:{product_id:idprod.product_id,cart_id:cartUser.id}})
        return result
        }
        
    } catch (error) {
        throw error
    }
}


static async addProductIncartt(id,quantityy,idUser){
    try {
        const cartUser=await cart.findOne({where:{user_id:idUser}})
        const findPro=await product.findByPk(id)
        const productIncart=await products_in_carts.findOne({where:{product_id:id,}})
        if(productIncart){
            const priceSu=findPro.price*quantityy
            if(findPro.availableqty >= quantityy){
                const cart_inpro={
                cart_id:cartUser.id,
                product_id:productIncart.product_id,
                quantity:quantityy,
                price: priceSu
                }
                const result=await products_in_carts.update(cart_inpro,{where:{product_id:findPro.id,cart_id:cartUser.id}})
                const updatePriceRest=await cart.update({total_price:cartUser.total_price - productIncart.price},{where:{user_id:idd}})
                const updatePriceSum=await cart.update({total_price:cartUser.total_price + cart_inpro.price},{where:{user_id:idd}})
                return result
            }
           
        }else{
            if(findPro && cartUser){
            if(findPro.availableqty >= quantityy){
                const priceSu=findPro.price*quantityy
                const cart_inpro={
                    cart_id:cartUser.id,
                    product_id:findPro.id,
                    quantity:quantityy,
                    price: priceSu
                }
                const updatePrice=await cart.update({total_price:cartUser.total_price + priceSu},{where:{user_id:idUser}})
                const result=await products_in_carts.create(cart_inpro)
                return result
            }
        }else{
            return {message:"error"}
        }
        }
        
    } catch (error) {
        throw error
    }
}

static async allProducts(){
    try {
        const result=await product.findAll()
        return result
    } catch (error) {
        throw error
    }
}

static async getAllproductbyuser(id){
    try {
        const result=await product.findAll({where:{user_id:id}})
        return result
    } catch (error) {
        throw error
    }
}

}


module.exports=ProductsServices