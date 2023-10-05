//Hacemos CustomsHooks para las acciones, asi no hay tanta logica en nuestros componentes y es mas reutilizable.
import { useAppDipatch } from "../store"
import { UserPlusID, addNewUser, deleteUserById, User } from "../store/users/slice";


export const userActions = () => {
    //recuperamos la forma de enviar la accion, es decir, esto envia la accion.
    const dispatch = useAppDipatch();

    //Aca definimos que tipo de accion enviamos
    const removeUser = (id:UserPlusID['id']) => {
        //Le decimos que ejecute la accion (dispatch) de nuestro reducer (deleteUserById) y le pasamos un parametro (id)
        dispatch(deleteUserById(id));
    };


    //*3_ Creando una nueva funcion ('addUser' en este caso) para decir que ejecute la accion del reducer de 'addNewUser'
    const addUser = (name:User['name'], email:User['email'], github:User['github']) => {
        dispatch(addNewUser({name, email, github})) 
        // (Esta accion la levantamos en el componente para poneral en el elemento que la vaya a ejecutar)
    }
return {removeUser , addUser}//*4_ la exportamos
}