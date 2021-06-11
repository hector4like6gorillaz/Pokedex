
//import { CajaDiv, TypesImg, Li, AbilitiesUl, PokemonImg, H3, Ul, PokeDiv, Content, Description } from "./rowimg_config";
import Button from "../../atoms/Button/Button";
import "./rowimg.css";
import { types_pokemon } from "./rowimg_config";





// #id  Nombre  Vista_previa    Tipos   Habilidades
export const RowImg = (props) => {
    return (
        <div className="contenedor">
            <div className='name_id' >
                <h3>{props.id}</h3>
                <h3>{props.name}</h3>
            </div>
            <div className='imag_cont' >  <img className="imag" alt="" src={props.img} /></div>

            <div className="tipos">
                {!!props.type && props.type.map((item, index) => {

                    return (
                        <img key={index} src={types_pokemon[item.type.name]} />

                    )
                })}
            </div>
            <ul className="habilidades">
                <li></li>
                {!!props.abilities && props.abilities.map((item, index) => {
                    return (
                        <li key={index} > {index + 1}.-{item.ability.name} </li>

                    )
                })}
                <li></li>
            </ul>
            <div className='button' > <Button text="Shiny" func={props.func}/> </div>
        </div>
    )
}


