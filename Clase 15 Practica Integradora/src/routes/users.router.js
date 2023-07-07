import { Router } from "express";
import Users from "../dao/dbManagers/users.js";

const userManager= new Users;
const router=Router();

router.get('/',async(req,res)=>{
    let users= await userManager.getAll();
    if(!users) return res.status(500).send({status:"error", error:"No pudo obtener datos"})
    res.send({status:"success",payload:users})
})

router.post('/',async(req,res)=>{
    let {first_name,last_name,email,dni,birthDate,gender }=req.body;
    let result =await userManager.saveUser({
        first_name,
        last_name,
        email,
        dni,
        birthDate,
        gender
    })
    res.send({status:"success",payload:result})
})

export default router;

