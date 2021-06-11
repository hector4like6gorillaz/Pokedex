import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name: "styled componentes",
    initialState: {
        PokelistState: 1,
        
    },
    reducers: {
        none: (state) => { state.PokelistState = 0; },
        inline: (state) => { state.valorsin = 1; },
        
    }
});

export const {none, inline} = counterSlice.actions;

export default counterSlice.reducer;


