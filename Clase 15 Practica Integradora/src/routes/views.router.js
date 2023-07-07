import { Router } from "express";
import Courses from "../dao/dbManagers/courses.js";
import Users from "../dao/dbManagers/users.js";

const courseManager= new Courses();
const userManager= new Users();

const router =Router();

router.get('/',async(req,res)=>{
    let users= await userManager.getAll();
    console.log(users)
    res.render('users',{users})
})

router.get('/courses',async(req,res)=>{
 let courses = await courseManager.getAll();
 console.log(courses)
 res.render('courses',{courses})
})

export default router;