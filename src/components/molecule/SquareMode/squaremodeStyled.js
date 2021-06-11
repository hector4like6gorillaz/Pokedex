import styled from "styled-components";

export const DivFirts = styled.div`
background:#FFF7A2;
display: grid;
margin-right:15px;
margin-bottom:15px;
//border-style:solid;
border-top-style:solid;
border-left-style:solid;
box-shadow: 10px 10px 10px black;
border-radius: 10px;
grid-template-rows : 55% 15% 20% 10%;
grid-gap:2px;
grid-template-areas: 
"img"
"name"
"abi"
"ty"
;
width:20%;
height: 200px;
padding:10px;
@media (max-width: 1455px) {
    width:27%;
  }
  @media (max-width: 1074px) {
    width:40%;
  }
  @media (max-width: 710px) {
    width:85%;
  }

  

  
`
export const DivIMG = styled.div`
grid-area:img;

height: 100%;

display:flex;
align-items:center;
justify-content:space-around;
flex-direction:column;
align-self:center;
justify-self:center;
width:90%;
`

export const DivAbilities = styled.div`
grid-area:abi;
display:flex;
justify-content:space-between;

@media (max-width: 710px) {
    font-size:12px;
  }
`
export const DivAbi = styled.div`

`
export const DivName = styled.div`
grid-area:name;
font-size:25px;
font-weight:bold;
display:flex;
flex-direction:column;
`
export const DivTyB = styled.div`
grid-area:ty;
display: flex;

justify-content: space-between;
width:1fr;
`

export const IMG = styled.img`
background:#FFCDFF;
border-radius: 50%;
height: 100%;
width:auto;

`
export const PP = styled.li`
list-style:none;
padding-right:15px;
`
export const DivTypes = styled.div`
display:flex;
`

export const ShinyB = styled.button`

`

