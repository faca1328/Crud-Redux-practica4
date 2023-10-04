//Aca vamos a guardar todos nuestros Estados.

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        users: usersReducer,
}
})

//Definimos un rootState que debe contener todos los estados tipados de nuestros 'slices' >>> PARA USAR useSelector
//En este caso estamos definiendo solo una slice (users) y *el tipo tiene que ser igual al* de usersSlice.reducer*
export type RootState = ReturnType<typeof store.getState>;
                                //función proporcionada por Redux que devuelve el estado actual de tu aplicación Redux.
//store hace referencia a esta 'store' y ".getState" es una funcion que viene de Redux


//Lo mismo para cuando querramos usar la accion Dispatch pero no inferimos el tipo con ReturnType
export type AppDispatch = typeof store.dispatch; 
                                //tipar las acciones que vas a despachar en tu aplicación
                 


//Aca le cambiamos el nombre al useSelector y al useDispatch (y de paso los tipamos) para que no tener que importar desde *from "@reduxjs/toolkit";* en todos nuestros componentes y que se cuelvan dependientes.                       
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDipatch: () => AppDispatch = useDispatch;
//Entonces si hay que modificar esta linea de codigo > from "@reduxjs/toolkit"; < con modificarlo desde aca una vez alcanza para modificar todo.