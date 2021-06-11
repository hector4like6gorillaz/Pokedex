import React from 'react';
import { RowImg } from './molecule/RowImg/RowImg';

import URL from "./EndPoints/EndpointAlone";


import pokeball from "../images/pokeballgif.gif";

import "./produccion.css";


function pagen(val){
    window.open(`/page2/${val}`, "nuevo", "width=400, height=1400");
}
// #id  Nombre  Vista_previa    Tipos   Habilidades
export const Produccion = (props) => {
    
    
   



    const { name, sprites, types, abilities, weight, id } = URL(props.url);
    

    var img = pokeball;
    var descrip = "Cargando";
    


    //(!!sprites && sprites.front_default )? img = sprites.front_default : img = sprites.other["official-artwork"].front_default ;
    if(!!sprites ) if(sprites.front_default !=null) img = sprites.front_default; else img = sprites.other["official-artwork"].front_default ;

    



    return (
        <div  className="voto">


            < RowImg name={name}  img={img} id={id>2000 ? id-9102: id} func={()=>pagen(id)} type={types} abilities={abilities} weight={weight} />

        </div>
    )
}

