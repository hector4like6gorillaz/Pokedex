import styled from "styled-components";

export const SquareDiv = styled.div`
margin:5px;
width: 23%;
height: 25%;
border-style:solid;
border-radius: 30px;
display: grid;
grid-template-columns: repeat(6,25%);
grid-template-rows: repeat(10,10%);
grid-template-areas: 
"img img img img"
"img img img img"
"img img img img"
"img img img img"
"img img img img"
"img img img img"
"datos datos datos datos"
"datos datos datos datos"
"datos datos datos datos"
"datos datos datos datos"
;
`
export const DivDats = styled.div`


grid-area: datos;
display:grid;
grid-template-rows: 33% 33% 34%;
grid-template-areas:
"H"
"habi"
"button"
;

`
export const ImgPoke = styled.img`
width: 75%;
height: 95%;

`
export const H1 = styled.h1`


`
export const Div = styled.div`
grid-area: H;

display:flex;
justify-content:center;
align-items:center;
font-size: 35px;
font-family: sans-serif;
`

export const DivHabilities = styled.div`
grid-area: habi;
display:flex;
justify-content:space-around;
align-items: center;
`

export const DivTipes = styled.div`
display:flex;
width: 55%;
justify-content: space-between;
`

export const Para = styled.div`
border-style:solid;
font-size: 20px;
border-radius:50px;
padding:4px;
white-space:nowrap;
`

export const DivTipesButton = styled.div`
grid-area: button;

display:flex;
justify-content: space-between;
padding: 5px;
align-items: center;
`
export const Para2 = styled.div`
border-style:solid;
font-size: 25px;
border-radius:50px;
padding:5px;
`

export const Shyni = styled.button`
border-radius: 50px;
font-size: 20px;
width: 30%;
`

export const DivImg = styled.div`
grid-area:img;
display:flex;
flex-direction:column;
align-items:center;

`