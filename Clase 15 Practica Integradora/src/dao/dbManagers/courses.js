import coursesModel from "../models/courses.js";

export default class Courses{
     constructor(){
        console.log("Estamos trabajando con bd mongo")
     }

     getAll =async()=>{
        let courses = await coursesModel.find().lean();
        return courses
     }

     saveCourses = async course=>{
        let result = await coursesModel.create(course)
        return result
     }
}