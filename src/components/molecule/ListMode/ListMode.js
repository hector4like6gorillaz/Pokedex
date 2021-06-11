import React, { useState, useEffect } from 'react';
import { API } from "../../EndPoints/Endpoint_v2";
import ditto from "./Ditto.png";
import {
    DivInicial,
    DivID,
    DivName,
    DivSprite,
    DivTypes,
    DivAbilities,
    DivButton,
    H5,
    IMG,
    ShinyB,
    PP,

} from "./listmodeStyled";


// #id  Nombre  Vista_previa    Tipos   Habilidades
//const { name, sprites, types, abilities, weight, id } = URL(props.url);
export const ListMode = (props) => {

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
                <>

                    <DivInicial>

                        <DivID><H5>{id > 2000 ? id - 9102 : id}</H5></DivID>
                        <DivName>{name}</DivName>
                        <DivSprite><IMG alt="" src={image} /></DivSprite>
                        <DivTypes>{types.map((item, index) => {
                            return (
                                <PP key={`${index}${item}`} >{mayus(item.type.name)}</PP>
                            )
                        })}
                        </DivTypes>
                        <DivAbilities>
                            {abilities.map((item, index) => {
                                return (
                                    <PP key={`${index}${item}`} >{mayus(item.ability.name)}</PP>
                                )
                            })}
                        </DivAbilities>
                        <DivButton><ShinyB>Shiny</ShinyB></DivButton>
                    </DivInicial>
                </>
                :
                <DivInicial>
                    <p>Cargando</p>
                </DivInicial>
            }
        </>
    )
}
