import fs from 'fs';
import __dirname from '../../utils.js';

const path = __dirname+'/files/users.json'
export default class Users{
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
    saveUser = async(user) =>{
        try{
            user.courses = [];
            let users = await this.getAll();
            if(users.length===0){
                user.id=1;
                users.push(user)
                await fs.promises.writeFile(path,JSON.stringify(users,null,'\t'))
            }
            else{
                user.id = users[users.length-1].id+1;
                users.push(user);
                await fs.promises.writeFile(path,JSON.stringify(users,null,'\t'));
                return user;
            }
        }
        catch(error){
            console.log("No puede guardar el archivo: "+error)
            return null;
        }
    }
}