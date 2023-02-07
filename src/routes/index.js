
const CartsRoutes=require("./carts.routes")
const OrderRoutes=require("./orders.routes")
const ProductsRoutes=require("./products.routes")
const AuthRoutes=require("./auth.routes")
const UsersRoutes=require("./user.routes")

const Routes=(app)=>{
    app.use("/api/v1",UsersRoutes)
    app.use("/api/v1",CartsRoutes)
    app.use("/api/v1",OrderRoutes)
    app.use("/api/v1",ProductsRoutes)
    app.use("/api/v1/auth",AuthRoutes)
}


module.exports=Routes