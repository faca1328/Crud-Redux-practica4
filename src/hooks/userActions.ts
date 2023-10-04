//Hacemos CustomsHooks para las acciones, asi no hay tanta logica en nuestros componentes y es mas reutilizable.
import { useAppDipatch } from "../store"
import { UserPlusID, deleteUserById } from "../store/users/slice";


export const userActions = () => {
    //recuperamos la forma de enviar la accion, es decir, esto envia la accion.
    const dispatch = useAppDipatch();

    //Aca definimos que tipo de accion enviamos
    const removeUser = (id:UserPlusID['id']) => {
        //Le decimos que ejecute la accion (dispatch) de nuestro reducer (deleteUserById) y le pasamos un parametro (id)
        dispatch(deleteUserById(id));
}
return {removeUser}
}