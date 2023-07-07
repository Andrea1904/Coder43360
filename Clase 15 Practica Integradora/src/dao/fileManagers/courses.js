import fs from 'fs';
import __dirname from '../../utils.js';

const path = __dirname+'/files/courses.json'
export default class Courses{
    constructor(){
        console.log(`Trabando en el archivos ${path}`)
    }
    getAll = async() =>{
        if(fs.existsSync(path)){
            try{
                let data = await fs.promises.readFile(path,'utf8');
                return JSON.parse(data);
            }
            catch(error){
                console.log("No puede guardar el archivo:"+error)
                return null;
            }
        }
        else{
            return [];
        }
    }
    saveCourse = async(course) =>{
        try{
            course.students = [];
            let courses = await this.getAll();
            if(courses.length===0){
                course.id=1;
                courses.push(course)
                await fs.promises.writeFile(path,JSON.stringify(courses,null,'\t'))
            }
            else{
                course.id = courses[courses.length-1].id+1;
                courses.push(course);
                await fs.promises.writeFile(path,JSON.stringify(courses,null,'\t'));
                return course;
            }
        }
        catch(error){
            console.log("No puede guardar el archivo: "+error)
            return null;
        }
    }
}