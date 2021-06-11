import React, { useEffect, useState } from 'react';
import { API } from '../../EndPoints/Endpoint_v2';
import { TableHBH } from '../../organisms/Table/Table';

import {
    Divinit,
    DivSprites,
    DivContent,
    DivNameType,
    DivType,
    Pdescription,
    Hname,
    DivNT,
    Span,
    DivAbilities,
    DivMoves,
    TR,
    TD,

} from "./vistStyled";

export const Vist = (props) => {

    const [loading, setloading] = useState(false);

    //datos
    const [abilities, setAbilities] = useState([]);
    const [abilitiesDescriptions, setAbilitiesDescriptions] = useState([]);
    const [abilitiesDates, setabilitiesDates] = useState([]);
    const [namePokemon, setNamePokemon] = useState("");
    const [type, setType] = useState([]);

    const [PokemonUrlDescriptions, setPokemonUrlDescriptions] = useState([]);
    const [description, setdescription] = useState([]);

    const [sprites, setSprites] = useState([]);

    const [moves, setMoves] = useState([]);
    const [movesDates, setmovesDates] = useState([]);




    //datos
    const mayus = (word) => word[0].toUpperCase() + word.slice(1);

    var yolo = "https://pokeapi.co/api/v2/pokemon/1/";

    const response = async page => API(page);

    useEffect(() => {
        setloading(true);
        var list = [], power = [], presition = [], tyype = [];
        async function loadapi() {
            //galeria de sprites
            // -nombre tipo descripcion del pokemon-
            // habilidades descripcion de las mismas
            //movimientos nombre, poder, precision y tipo

            const { data } = await response(yolo);
            setAbilities(data.abilities);
            for (var i = 0; i < data.abilities.length; i++) {
                const xd = await response(data.abilities[i].ability.url);
                list.push(xd.data);
            }
            setabilitiesDates(list);

            setNamePokemon(data.name);
            setType(data.types);
            setMoves(data.moves);
/*
            for (var i = 0; i < data.moves.length; i++) {
                const xd = await response(data.moves[i].move.url);



                var dat = { descriptions: `${mayus(xd.data.name)} ${xd.data.power} ${xd.data.accuracy} ${xd.data.type.name}` };
                setmovesDates(prev => [...prev, dat]);

            }

*/
            const inf = await response(data.species.url);
            //console.log(inf.data.flavor_text_entries);
            setPokemonUrlDescriptions(inf.data.flavor_text_entries);
            setSprites(data.sprites);

        }
        loadapi();
        setloading(false);
    }, [])

    useEffect(() => {
        var ist = [];
        PokemonUrlDescriptions.map((item, index) => {
            (item.language.name === "es") && ist.push(item.flavor_text);
        });
        setdescription(ist);
    }, [PokemonUrlDescriptions]);

    useEffect(() => {
        var ist = [];
        abilitiesDates.map((item, index) => {
            var ist2 = [];
            item.flavor_text_entries.map((item, index) => {
                (item.language.name === "es") && ist2.push(item.flavor_text);
            })
            ist.push(ist2[index]);
        })
        setAbilitiesDescriptions(ist);
    }, [abilitiesDates]);

    


    return (
        <Divinit>
            <DivSprites>

            </DivSprites>
            <DivContent>
                <DivNameType>
                    <DivNT>
                        <Hname>{namePokemon}</Hname>
                        <DivType>
                            {type.map((item, index) => {
                                return (
                                    <Span key={`${item}+${index}`}>{mayus(item.type.name)}</Span>
                                )
                            })}
                        </DivType>
                    </DivNT>
                    <Pdescription>{description[3]}</Pdescription>
                </DivNameType>
                <DivAbilities>
                    <Hname>Habilidades</Hname>
                    {abilitiesDescriptions.map((item, index) => {
                        return (
                            <p key={`${item}+${index}`}>{`${mayus(abilities[index].ability.name)}:`} {item}</p>
                        )
                    })}
                </DivAbilities>
            </DivContent>
            <DivMoves>
                <Hname>Movimientos</Hname>
                
            </DivMoves>

        </Divinit >
    )
}


/*  {!loading && <TableHBH moves={movesDates} />}
{console.log(abilities)}
                {console.log(namePokemon)}
                {console.log(type)}
                {console.log(moves)}
                {console.log(PokemonUrlDescription)}
                {console.log(sprites)}
*/
