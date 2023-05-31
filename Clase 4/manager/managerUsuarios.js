import  fs from 'fs'

const archivo='../archivoHL/Usr.json'

export default class ManagerUsuarios{
    consultarUsuarios=async()=>{
        if(fs.existsSync(archivo)){
            const datos =await fs.promises.readFile(archivo,'utf-8')
            console.log(datos)
            const usuarios = JSON.parse(datos)
            return usuarios
        }
        else{
            return[]
        }
    }

    crearUsuario= async (usuario)=>{
        const usuarios= await this.consultarUsuarios();
        if(usuarios.length ===0){
            usuario.id=1
        }else{
            usuario.id= usuarios[usuarios.length-1].id+1;
        }
        usuarios.push(usuario)
        await fs.promises.writeFile(archivo,JSON.stringify(usuarios,null,'\t'))
        return usuario
    }
}