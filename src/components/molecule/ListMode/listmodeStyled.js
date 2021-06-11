import styled from "styled-components";

export const DivInicial = styled.div`
height: 80px;
display: grid;
border-top-style:solid  ;
border-color:rgba(55, 0, 0, .5);
grid-template-columns : repeat(6,1fr);
grid-template-areas: 
"id name spr ty abi btn"
;
font-weight: ${props => props.bold && "bold"};
`

export const DivID = styled.div`
grid-area: id ;
height: inherit;
display:flex;
align-items:center;
justify-content:space-around ;
`
export const DivName = styled.div`
grid-area: name;

height: inherit;
display:flex;
align-items:center;
justify-content:space-around ;

`

export const DivSprite = styled.div`
grid-area: spr;
height: inherit;
display:flex;
align-items:center;
justify-content:space-around ;

`
export const DivTypes = styled.div`
grid-area: ty;
height: inherit;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around ;


`
export const DivAbilities = styled.div`
grid-area: abi;
height: inherit;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around ;
`

export const DivButton = styled.div`
grid-area: btn;
height: inherit;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around ;
`

export const H5 = styled.h2`

`

export const IMG = styled.img`
width:auto;
height: 95%;
`
export const ShinyB = styled.button`

`

export const PP = styled.li`
white-space:nowrap;
list-style:none;

`