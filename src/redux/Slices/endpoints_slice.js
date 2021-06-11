import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "Enpoints",
    initialState: {
        pokemon: "pokemon/",
        evol_chain: "evolution-chain/",
        description: "pokemon-species/",
        oficial_sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/",
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/",
        allPokemons: "pokemon/?offset=0&limit=1118",
    },
    reducers: {

    }
});

//export const {  } = counterSlice.actions;

export default counterSlice.reducer;