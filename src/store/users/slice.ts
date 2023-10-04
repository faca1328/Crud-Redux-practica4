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

//Nuestro initialState es un array de usuarios completos (UserPlusID) 
const initialState: UserPlusID[] = [
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
        }
    }
})

export default usersSlice.reducer;

export const {deleteUserById} = usersSlice.actions; //exportamos la accion.