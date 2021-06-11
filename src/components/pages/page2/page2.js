import React from 'react';

import Button from '../../atoms/Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import { decremento, incremento } from '../../../redux/Slices/begin_slice';
//import {useLocalStorage} from '../../CustomHooks/useLocalStorage';
import { useParams } from 'react-router';

export const Page2 = () => {
    const {id} = useParams();
    const { valorsin, valors_dos } = useSelector(state => state.Variables);
    const dispatch = useDispatch();
    
    //const [idd, setidd] = useLocalStorage("id",0);
    return (
        <div>
            <h1>Soy pagina 2</h1>
            <p>El valor del asdasdcontador 1 es: <span>{valorsin}</span></p>
            <p>El valoasdasdr del contador dos 2 es: <span>{valors_dos}</span></p>
            <Button func={() => dispatch(incremento())} text={"aumentar"} />
            <Button func={() => dispatch(decremento())} text={"Decrementar"} />
            <p>{id}</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}/>
            <h1>numero que viene por url: {id}</h1>
        </div>
    )
}
