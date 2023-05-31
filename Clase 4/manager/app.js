import ManagerUsuarios from './managerUsuarios.js'
const manager =new ManagerUsuarios();

const lectura =async() =>{
    let consultaUsuarios= await manager.consultarUsuarios();
    console.log(consultaUsuarios)

    let usuario ={
        nombre:'Martin'
    }
    let resultado =await manager.crearUsuario(usuario)
    console.log(resultado)

    let segundaConsulta = await manager.consultarUsuarios();
    console.log("segunda consulta")
    console.log(segundaConsulta)
}
lectura();