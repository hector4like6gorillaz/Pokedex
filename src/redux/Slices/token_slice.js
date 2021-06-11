import { compose, createSlice } from "@reduxjs/toolkit";
import {prueba} from "../../components/CustomHooks/prueba";


const token = prueba;




const counterSlice = createSlice({
    name: "Token",
    initialState: {
        Token: token,


    },
    reducers: {
        borrar: (state) => { state.Token = "vacio"; },
        agregar: (state) => { state.Token += " dos"; },
        
    }
});

export const { borrar, agregar } = counterSlice.actions;

export default counterSlice.reducer;

