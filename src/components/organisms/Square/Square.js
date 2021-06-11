import React from 'react';

import {
    Content,
} from "./square_styled";

import { SquareImg } from '../../molecule/SquareImg/SquareImg';


function pagen(val) {
    window.open(`/page2/${val}`, "nuevo", "width=400, height=1400");
}
// #id  Nombre  Vista_previa    Tipos   Habilidades
export const Square = () => {

    var poke = [];

    for (var i = 1; i <= 20; i++)poke.push(<SquareImg key={i} id={i} />, <br />);


    return (
        <Content>
            {poke.map((item, index) => {
                return (
                    poke[index]
                )
            })}

        </Content>
    )
}