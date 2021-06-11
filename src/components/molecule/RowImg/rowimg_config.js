import styled from "styled-components";

import bug from "../../../images/types/bug.png";
import dark from "../../../images/types/dark.png";
import dragon from "../../../images/types/dragon.png";
import electric from "../../../images/types/electric.png";
import fairy from "../../../images/types/fairy.png";
import fighting from "../../../images/types/fighting.png";
import fire from "../../../images/types/fire.png";
import flying from "../../../images/types/flying.png";
import ghost from "../../../images/types/ghost.png";
import grass from "../../../images/types/grass.png";
import ground from "../../../images/types/ground.png";
import ice from "../../../images/types/ice.png";
import normal from "../../../images/types/normal.png";
import poison from "../../../images/types/poison.png";
import psychic from "../../../images/types/psychic.png";
import rock from "../../../images/types/steel.png";
import steel from "../../../images/types/bug.png";
import water from "../../../images/types/water.png";

export const types_pokemon = {
    bug: bug,
    dark: dark,
    dragon: dragon,
    electric: electric,
    fairy: fairy,
    fighting: fighting,
    fire: fire,
    flying: flying,
    ghost: ghost,
    grass: grass,
    ground: ground,
    ice: ice,
    normal: normal,
    poison: poison,
    psychic: psychic,
    rock: rock,
    steel: steel,
    water: water
}

//aqui estan los css para rowimg de manera styled

export const CajaDiv = styled.div`
    
    background: palegreen;
    width: 100%;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    justify-content: space-around;
    border-radius: 100px;
    align-items: center;
    `;

export const TypesImg = styled.img`
width: 100%;
height: auto;    
    `;
export const PokemonImg = styled.img`
width: 100%;
height: 100%;
    `;
export const Li = styled.li`
    list-style:none;
    width: 100%;
height: 100%;
    
    `;

export const H3 = styled.h3`
    
    `;
export const Ul = styled.ul`
    display:flex;
    
    
    `;
export const AbilitiesUl = styled.ul`


    `;

export const PokeDiv = styled.div`
    width: 30%;
    height:30%;
    background: cyan;
    border-radius: 50%;
    `;

export const Content = styled.div`
    display:flex;
    width:20%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    `
export const Description = styled.div`
    display:flex;
    width:40%;
    align-items:center;
    
    `