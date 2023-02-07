const AuthServices = require("../services/auth.service")
const cartsServices = require("../services/carts.service")
const transporter=require("../utils/mailer")

const register=async(req,res)=>{
    try {
    const user=req.body
    const result=await AuthServices.register(user)
if(result){
    const {id}=result
    const cart=await cartsServices.createCart(id)
    res.status(201).json({message:"user created"})
    await transporter.sendMail({
        to:result.email,
        from:"bryandavidaaa@gmail.com",
        subject:"email confirmado",
        html:"<h1>bienvenido a la mejor app del chat creada por mi bryan</h1> <p>tienes que confirmar tu email dando click en</p> <a href=youtube.com>aqui :3</a>"
    })
}else{res.status(400).json({message:"somethign wrong"})}
    } catch (error) {
        res.status(400).json({message:error})
    }
}

const login=async(req,res)=>{
try {
const {email,password}=req.body;
!email || !password ? res.status(400).json({error:"missing data",message:"not email o password"}):""
const result=await AuthServices.login({email,password})
if(result.isValid){
    const {username,id,email}=result.findUser
    const userData={username,id,email}
    const token= AuthServices.getToken(userData);
    const user=result.findUser
    res.json({user,token:token});
}else{res.status(404).json({message:"user not found"})}
} catch (error) {
    res.status(400).json({error})
}
}

module.exports={
    register,
    login
}