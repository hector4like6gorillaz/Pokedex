import React, { useEffect, useState } from 'react';
import { envAPI, API } from "../../EndPoints/Endpoint_v2";
import Pagination from '@material-ui/lab/Pagination';

import { ListMode } from '../../molecule/ListMode/ListMode';
import { SquareMode } from '../../molecule/SquareMode/SquareMode';

//
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
//

import {
    Centrar,
    Nav,
    H1,
    DivButtons,
    DivScoope,
    In,
    Scoope,
    Buttons,
    DivOptions,
    ListPoke,
    InfinityPoke,
    DivPagi,
    DivSearch,
    DivFound,
    Ball,
} from "./pokedex_styled";

import {
    DivInicial,
    DivID,
    DivName,
    DivSprite,
    DivTypes,
    DivAbilities,
    DivButton,

} from "../../molecule/ListMode/listmodeStyled";





export const Pokedex = () => {
    const [pokemons, setpokemons] = useState([]);
    const [next, setNext] = useState("");
    const [prev, setPrev] = useState("");
    const [loading, setloading] = useState(false);
    const [pagina, setpagina] = useState(1);
    const [mode, setMode] = useState(0);

    const [search, setsearch] = useState("");
    const [searching, setSearching] = useState([]);
    const [state, setstate] = useState(false);
    const [directionWeb, setDirectionWeb] = useState("");
    //const [flowoptions, setflowoptions] = useState([]);

    const [visible, setVisible] = useState({ option: "none" }); //contents none

    var ball = "https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-1.png";



    const mayus = (word) => word[0].toUpperCase() + word.slice(1);
    const minus = (word) => word[0].toLowerCase() + word.slice(1);

    const url = (page) => `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`;

    const response = async page => envAPI(page);

    useEffect(() => {
        async function loadapi() {
            setloading(true);
            const resp = await response("pokemon/");
            setpokemons(resp.data.results);
            setNext(resp.data.next);
            setPrev(resp.data.previous);
            setloading(false);
        }
        loadapi();

    }, [])

    useEffect(() => {
        async function loadapi() {
            const resp = await response2("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118");
            setSearching(resp.data.results);
        }
        loadapi();

    }, [])




    const response2 = async page => API(page);

    const more = async () => {
        //setloading(true);
        const more = await response2(next);
        const dat = more.data.results;
        setpokemons(prev => [...prev, ...dat]);
        setNext(more.data.next);
        setPrev(more.data.previous);
        //setloading(false);
    }

    const listMode = async (direction) => {
        setloading(true);
        const more = await response2(direction);
        const dat = more.data.results;
        setNext(more.data.next);
        setpokemons(dat);
        setloading(false);
    }

    const handleScroll = event => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (Math.round(scrollHeight) - Math.round(scrollTop) <= clientHeight) more();
    }
    const searchFunction = async (e) => {
        e.persist();
        await setsearch(e.target.value);

    }

    var vari = 0;
    const [size, setSize] = useState({ option: "200px" });
    window.addEventListener("DOMContentLoaded", function (event) {
        if (event.currentTarget.screen.availWidth <= 700) setMode(1);
        else setVisible({ option: "contents" });
        var s = event.currentTarget.screen.availHeight - document.getElementById(`yolo`).clientHeight - 71;
        console.log(s);
        setSize({ option: `${s}px` });
    })

    useEffect(() => {
        console.log(size);
    }, [size])

    window.addEventListener("keydown", function (event) {


        if (event.ctrlKey && String.fromCharCode(event.key) == 'c') alert("alt+c pressed!");

        if (event.ctrlKey && String.fromCharCode(event.keyCode) == 'B') document.getElementById("searchPokemon").focus();
        if (event.ctrlKey && String.fromCharCode(event.keyCode) == 'L') document.getElementById("yolo").focus();
        if (event.ctrlKey && String.fromCharCode(event.keyCode) == 'C') document.getElementById("yolo2").focus();

    }, false);

    useEffect(() => {

        (!!search) ? setstate(true) : setstate(false);
        (!!search) ? searching.map((item) => {
            item.name === (search.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) && setDirectionWeb(item.url);
        }) : setDirectionWeb("");
        setloading(false);
    }, [search])


    return (
        <>


            <Centrar >
                <Nav>
                    <div id="yolo">
                        <H1>Pokédex</H1>
                        <DivButtons>

                            <Autocomplete
                                value={search}
                                onChange={(event, newValue) => {
                                    setsearch(newValue);
                                    setloading(true);
                                }}
                                style={{ width: 300 }}
                                id="searchPokemon"
                                freeSolo
                                options={searching.map((option) => `${mayus(option.name)}`)}
                                renderInput={(params) => (
                                    <TextField {...params} label="Buscar Pokémon" margin="normal" variant="outlined" />
                                )}
                            />


                            <DivOptions visible={visible}>
                                <Buttons id="yolo" onClick={() => {
                                    setMode(mode + (mode * -1));
                                    listMode(url(0));
                                    setpagina(1);
                                }}>{mode == 0 && <Ball src={ball} />}Lista</Buttons>
                                <Buttons id="yolo2" onClick={() => {
                                    setMode(mode + 1 + (mode * -1));
                                    listMode(url(0));
                                    setpagina(1);
                                }}>{mode == 1 && <Ball src={ball} />}Cuadricula</Buttons>
                            </DivOptions>
                        </DivButtons>
                    </div>
                    <ListPoke>

                        {mode === 0 && !state ?
                            <>
                                <DivInicial bold>
                                    <DivID>#</DivID>
                                    <DivName>Name</DivName>
                                    <DivSprite>Vista Previa</DivSprite>
                                    <DivTypes>Tipos</DivTypes>
                                    <DivAbilities>Habilidades</DivAbilities>
                                    <DivButton>{""}</DivButton>
                                </DivInicial>
                                {!loading && pokemons.map((item, index) => {
                                    return (
                                        <ListMode key={`${index}${item}`} url={item.url} />
                                    )
                                })}
                                <DivPagi>
                                    <Pagination
                                        count={56}
                                        page={pagina}
                                        variant="outlined"
                                        color="secondary"
                                        onChange={(e, value) => { setpagina(value); listMode(url((value - 1) * 20)); }}
                                        showLastButton
                                        showFirstButton
                                        hideNextButton={true}
                                        hidePrevButton={true}
                                    />
                                </DivPagi>
                            </>
                            :
                            <>
                                {!loading && !!directionWeb && mode === 0 ?
                                    <>
                                        <DivInicial bold>
                                            <DivID>#</DivID>
                                            <DivName>Name</DivName>
                                            <DivSprite>Vista Previa</DivSprite>
                                            <DivTypes>Tipos</DivTypes>
                                            <DivAbilities>Habilidades</DivAbilities>
                                            <DivButton>{""}</DivButton>
                                        </DivInicial>

                                        <ListMode url={directionWeb} />
                                    </>
                                    :
                                    mode === 0 && <p>Sin Resultados</p>
                                }
                            </>
                        }
                        {mode === 1 && !state ?
                            < InfinityPoke size={size} onScroll={handleScroll}>
                                {!loading && pokemons.map((item, index) => {
                                    return (
                                        <SquareMode key={`${index}+${item}`} url={item.url} />
                                    )
                                })}
                            </InfinityPoke>
                            :
                            (!!directionWeb) && !loading && mode === 1 ?
                                <DivSearch> <SquareMode url={directionWeb} /> </DivSearch>
                                : mode === 1 && <p>Sin Resultados</p>
                        }
                    </ListPoke>
                </Nav>
            </Centrar>
        </>
    )
}



