//Slice: pedazo de la store
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

//Usario q se puede crear
export interface User {
    name: string,
    email: string,
    github: string
}

//Para poner la identificaciond el usuario
export interface UserPlusID extends User {
    id: string
}


const defaultState =[
    {
        name: "Peter Doe",
        email: "peterd@gmail.com",
        github: "petD",
        id: "1"
    },
    {
        name: "Juan Fin",
        email: "juan@gmail.com",
        github: "juan",
        id: "2"
    },
    {
        name: "Favian Dalli",
        email: "favian@gmail.com",
        github: "favianDalli",
        id: "3"
    }

]

//Nuestro initialState es un array de usuarios completos (UserPlusID) 
const initialState: UserPlusID[] = (()=>{
    const persistedState = localStorage.getItem("redux__State") //Leemos lo que hay en el LS

    if (persistedState) {  //Si hay info en el LS lo mostramos, sino mostramos el 'defaultState'
        return JSON.parse(persistedState).users;
    }
    return defaultState;//(Podriamos usar un ternario tmb)
})();




//Los 'slice' (partes de ...) necesitan que les pasemos por lo menos nombre , estado inicial y los reducers que usen.
//Infiere el tipo del initialState
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    //Aca hacemos las acciones
    reducers: {                      //evita tipar el objeto completo.
        deleteUserById: (state,action: PayloadAction<UserPlusID['id']>) => {
            //Obtenemos la ID
            const id = action.payload;
            //Devolvemos todo menos la ID obtenida
            return state.filter((user) => user.id !== id)
        },

        addNewUser: (state, action:PayloadAction<User>) => { 
            const id = crypto.randomUUID() //*1_Creamos la accion que va a modificar el estado en el reducer
            state.push({id, ...action.payload})

            //Con redux podemos 'MUTAR' los estados en vez de crear nuevos todo el tiempo como en el ejemplo de abajo.
            //return [...state, {id, ...action.payload}]
        }
    }
})

export default usersSlice.reducer;

export const {deleteUserById, addNewUser} = usersSlice.actions; //*2_ exportamos la accion. (la levantamos en userActions)