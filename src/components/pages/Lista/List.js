import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import baseURL from "../../EndPoints/Endpoint_env";

import { useSelector } from 'react-redux';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./list.css";

import {
    Body,
    ListDiv,
    H1,
    Barra2btn,
    Divbarra,
    Scoope,
    Input,
    Divbuttons,
    Lista,
    Cuadricula,
    DivList,
    Infobox,
    Pokelist,
    Squ,
} from "./List_styled_componets";
import { Produccion } from '../../produccion';
import { SquareImg } from '../../molecule/SquareImg/SquareImg';



function busqueda(datos, search) {
    var results = {};
    datos.map((item, index) => {

        if (datos[index].name === search) {
            results.name = datos[index].name;
            results.url = datos[index].url;
        }

    })

    return results;
}

function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    console.log(coor);
}


function myFunction2(e) {
    var x = 0;
    x += 1;
    var coor = "Coordinates: (" + x + "," + 0 + ")";
    console.log(coor);
}

export const List = () => {
    const [search, setsearch] = useState("");
    var state = "inline";
    const [state2, setstate2] = useState(1);
    const { allPokemons } = useSelector(state => state.EndPoints);
    const { results } = baseURL(`${allPokemons}`);
    const [poke, setPoke] = useState("");
    var resul = [];
    
    var id = [];
    var id2 = [];
    var limit = 12;

    if (!!results) for (var i = 1; i <= limit; i++)id.push(<Produccion key={i} url={results[i - 1].url} />, <br />);
    if (!!results) for (var i = 1; i <= limit; i++)id2.push(<SquareImg key={i} url={results[i - 1].url} />, <br />);

    const scrol = () => { if (window.scrollY >= 1000) console.log("1000k") }
    const scrol2 = () => {
        var y = window.scrollY;
        console.log(y);
    }

    var ventana = `${window.innerHeight} ${window.innerWidth}`;
    console.log(ventana);

    const cosa = ()=>{
        var panel = document.getElementById("yolo");
        var panel2 = document.getElementById("pruebas");
        console.log(`${panel.clientHeight}  ${panel2.clientHeight}`);
    }

const scroly = () => {
    //console.log(window.scrollY);
    if(window.scrollY > 139 && window.scrollY < 150) console.log("mayor");
}
window.addEventListener("scroll", scroly);
    return (
        <Body id="yolo" >

            <ListDiv >
                <div id='pruebas' >  
                <H1 id="yolo2">POKEDEX</H1>
                <Barra2btn>
                    <Divbarra>
                        <Scoope onClick={() => { setstate2(state2 - 10); setPoke(search) }} ><FontAwesomeIcon icon={faSearch} /></Scoope>
                        <Input placeholder="Buscar pokemon" value={search} onChange={e => setsearch(e.target.value)} ></Input>
                    </Divbarra>

                    <Divbuttons>
                        <button onClick={() => {

                            cosa();
                            for (var i = limit+1; i <= limit+20; i++)id.push(<Produccion key={i} url={results[i - 1].url} />, <br />);


                        }}>Pruebas</button>
                        <Lista onClick={() => { setstate2(state2 + (-1) * state2 + 1); setsearch(""); }}>Lista</Lista>
                        <Cuadricula onClick={() => { setstate2(state2 + (-1) * state2 + 2) }}>Cuadricula</Cuadricula>
                    </Divbuttons>
                </Barra2btn>
                </div>
                <DivList>

                    <br />
                    {state2 === 1 ?
                        <>
                            <Infobox>

                                <div className="contenedor">
                                    <div className='name_id' >
                                        <h3>#</h3>
                                        <h3>Nombre</h3>
                                    </div>
                                    <div className='imag_cont' >  Vista Previa</div>

                                    <div className="tipos">Tipos   </div>
                                    <ul className="habilidades">
                                        Habilidades
                                    </ul>
                                    <div className='button' >  </div>
                                </div>

                            </Infobox>
                            <Pokelist >
                                {id.map((item, index) => {
                                    return (
                                        id[index]
                                    )
                                })}
                            </Pokelist>
                            <button onClick={() => scroll.scrollToTop()}>Inicio</button>
                            <div className="cosa">elemento</div>
                            
                        </>
                        :
                        state2 === 2 ?
                            <Squ >
                                {
                                    id2.map((item, index) => {
                                        return (
                                            id2[index]
                                        )
                                    })
                                }
                            </Squ>
                            :
                            <Pokelist>
                                {
                                    console.log(busqueda(results, search))

                                }
                                {
                                    <Produccion url={busqueda(results, search).url} />
                                }
                            </Pokelist>

                    }
                </DivList>
            </ListDiv>

        </Body >
    )
}
