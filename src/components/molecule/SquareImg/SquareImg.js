import URL from "../../EndPoints/EndpointAlone";


import pokeball from "../../../images/pokeballgif.gif";

import {
    SquareDiv,
    ImgPoke,
    DivDats,
    DivHabilities,
    DivTipes,
    Para,
    DivTipesButton,
    Para2,
    Div,
    Shyni,
    DivImg,
} from "./squareimg_styled";



function pagen(val) {
    window.open(`/page2/${val}`, "nuevo", "width=400, height=1400");
}
// #id  Nombre  Vista_previa    Tipos   Habilidades
export const SquareImg = (props) => {



    const { name, sprites, types, abilities, id } = URL(props.url);


    var img = pokeball;

    if (!!sprites) img = sprites.front_default;

    return (
        <SquareDiv>
            <DivImg><ImgPoke src={img} /></DivImg>
            <DivDats>
                <Div>{name}</Div>
                <DivHabilities>
                    {!!abilities && abilities.map((item, index) => {
                        return (
                            <Para key={index}>{abilities[index].ability.name}</Para>
                        )
                    })}
                </DivHabilities>
                <DivTipesButton>
                    <DivTipes>
                        {!!types && types.map((item, index) => {
                            return (
                                <Para2 key={index}>{types[index].type.name}</Para2>
                            )
                        })}
                    </DivTipes>
                    <Shyni>Shyni</Shyni>
                </DivTipesButton>
            </DivDats>
        </SquareDiv>
    )
}