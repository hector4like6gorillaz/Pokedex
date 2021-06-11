import React from 'react';
import { useParams } from 'react-router';

export const Vist_shiny = () => {

     const {id} = useParams();

    return (
        <div>
            <h1>Hola prro soy la lista de shiny: {id}</h1>
        </div>
    )
}
