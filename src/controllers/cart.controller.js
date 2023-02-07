const cartsServices = require("../services/carts.service")


const postcart_Im_Order=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await cartsServices.postCart_in_order(id)
        res.json({message:"compra realizada que tenga un feliz dia :3"})
    } catch (error) {
        res.status(404).json({message:"error"})
    }
}


module.exports={
    postcart_Im_Order
}

