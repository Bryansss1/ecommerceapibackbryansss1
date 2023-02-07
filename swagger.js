const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config()


const options={
    apis:["./src/routes/auth.routes.js","./src/models/model_document.js","./src/routes/carts.routes.js","./src/routes/orders.routes.js","./src/routes/products.routes.js","./src/routes/user.routes.js"],
    definition:{
        openapi:"3.0.0",
        info:{
      title:"Ecommerce bryan",
      version:"0.0.9",
      description:"api para ecommerce basico by bryansss1"
        }
    }
}

const swaggerSpec=swaggerJSDoc(options)

const swaggerDocs=(app,port)=>{

app.use("/api/v1/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
app.get("/api/v1/docs.json",(req,res)=>{
    res.setHeader("Content-Type","application/json")
    res.send(swaggerSpec)
})

console.log(`La documentacion esta disponible ${process.env.URL}:${port}/api/v1/docs`)
}

module.exports=swaggerDocs