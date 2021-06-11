import React from 'react';
import baseURL from "../../EndPoints/Endpoint_env";
import URL from "../../EndPoints/EndpointAlone";

import { useSelector } from 'react-redux';

export const End = () => {
    const { allPokemons} = useSelector(state => state.EndPoints);
    const { results } = baseURL(`${allPokemons}`);
    
    

    
//{!!name && console.log(sprites.other['official-artwork'].front_default)}

    return (
        <div>
            hola
            {!!results && console.log(results[0].url)}
            {!!results && <End2 url={results[0].url}/>}
        </div>
    )
}




export const End2 = (props) => {

    const prueba = URL(props.url);
    return (
        <div>
            {console.log(prueba)}
        </div>
    )
}
