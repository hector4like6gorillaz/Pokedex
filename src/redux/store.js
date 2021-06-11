import { configureStore } from "@reduxjs/toolkit";


import variables from "./Slices/begin_slice";
import endpoints from "./Slices/endpoints_slice";
import Styled from "./Slices/styled_slice";



const store = configureStore({
    reducer: {
        EndPoints: endpoints,
        Variables: variables,
        Styled: variables,
        
    },

});

export default store;