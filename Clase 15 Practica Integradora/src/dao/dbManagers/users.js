import { userModel } from "../models/users.js";

export default class Users{
    constructor(){
        console.log("Trabajando con Mongo")
    }
    getAll=async()=>{
    //    let users =await userModel.find();
    //    return users.map(user=>users.toObject())

        let users =await userModel.find().lean();
        return users
    }

    saveUser=async(user)=>{
        let result =await userModel.create(user);
        return result;
    }
}