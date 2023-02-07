const db=require("../utils/database")
const {DataTypes}=require("sequelize")
const bcrypt=require("bcrypt")


const Users=db.define("users",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    username:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(30),
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    is_confirmed:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
},{
    hooks:{
        beforeCreate:(user,options)=>{
            const {password}=user;
            const hash=bcrypt.hashSync(password,10)
            user.password=hash;
        }
    },
})

module.exports=Users;