const models=require("../models/index")

const {users}=models

class UsersServices{

static async Deleteuser(id){
try {
    const result=await users.destroy({where:{id}})
    return result
} catch (error) {
    throw error
}
}

static async updateUser(up,id){
    try {
        const res=await users.findByPk(id)
        if(up.email){
            if(res.email==up.email){
            const result=await users.update(up,{where:{id}})
            return result
            }else{return "el correo no se puede cambiar"}
        }else{
            const result=await users.update(up,{where:{id}})
            return result
        }
        
    } catch (error) {
        throw error
    }
}


}


module.exports=UsersServices