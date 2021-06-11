import React, { useState, useEffect } from 'react';
import { API } from '../../EndPoints/Endpoint_v2';
import ditto from "../ListMode/Ditto.png";

import {
    DivAbilities,
    DivFirts,
    DivIMG,
    DivTyB,
    IMG,
    PP,
    DivTypes,
    DivAbi,
    ShinyB,
    DivName,

} from "./squaremodeStyled";

export const SquareMode = (props) => {

    const [loading, setloading] = useState(false);
    const [id, setid] = useState("");
    const [name, setname] = useState("");
    //const [sprites, setsprites] = useState([]);
    const [types, settypes] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const [image, setimage] = useState(ditto);



    const mayus = (word) => word[0].toUpperCase() + word.slice(1);
    const response = async page => API(page);

    useEffect(() => {
        async function loadapi() {
            setloading(true);
            const response2 = await response(props.url);
            const dat = response2.data;
            //setpokemon(dat);
            setname(mayus(dat.name));
            setid(dat.id);
            settypes(dat.types);
            setAbilities(dat.abilities);
            //setsprites(dat.sprites);
            (dat.sprites.front_default != null) ? setimage(dat.sprites.front_default) : setimage(dat.sprites.other["official-artwork"].front_default);
            setloading(false);
        }
        loadapi();
    }, [])
    return (
        <>
            {!loading ?
                < DivFirts >
                    <DivIMG><IMG alt="" src={image} /></DivIMG>
                    <DivName>{name}</DivName>
                    <DivAbilities>
                        {abilities.map((item, index) => {
                            return (
                                <DivAbi key={`${index}${item}`}> <PP  >{mayus(item.ability.name)}</PP></DivAbi>
                            )
                        })}
                    </DivAbilities>
                    <DivTyB>
                        <DivTypes>
                            {types.map((item, index) => {
                                return (
                                    <PP key={`${index}${item}`} >{mayus(item.type.name)}</PP>
                                )
                            })}
                        </DivTypes>
                        <ShinyB>Shiny</ShinyB>
                    </DivTyB>

                </DivFirts>
                :
                < DivFirts >
                    <p>Cargando</p>

                </DivFirts>
            }
        </>
    )
}
