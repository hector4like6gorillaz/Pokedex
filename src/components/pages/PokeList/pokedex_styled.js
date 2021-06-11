import styled from "styled-components";

export const Centrar = styled.div`
display: flex;
flex-direction: column;
align-items:center;



`

export const Nav = styled.div`
border-right-style:solid;
border-left-style:solid;
width: 60%;
padding-left: 5%;
padding-right: 5%;
display:flex;
flex-direction:column;
position:relative;
`
export const H1 = styled.h1`

`
export const DivButtons = styled.div`

height: 50px;
display: flex;
justify-content: space-between;
align-items:center;
padding-bottom:50px;
padding-top:10px;
&:focus{
    background:gray;
}
`

export const DivScoope = styled.div`
border-style:${props => props.no &&"solid"};
height: 50px;
width:300px;
position:${props => props.non &&"absolute"};
border-top-left-radius:20px;
`

export const Scoope = styled.button`
width: 50px;
height: 50px;
border-style:hidden;
background:transparent;
cursor: pointer;
`

export const In = styled.input`
width: 300px;
height: 50px;
border-style:hidden;
background:transparent;
`
export const DivOptions = styled.div`
height: inherit;
display:${props => props.visible.option ==="contents" ? "flex" : props.visible.option};
align-items:center;
@media (max-width: 540px) {
    flex-direction:column;
  }

`
export const Buttons = styled.button`
width: 150px;
height: 40px;
display:flex;
justify-content:space-around;
align-items:center;
white-space:nowrap;
&:focus{
    background:#FFA897;
    
}
`

export const ListPoke = styled.div`


`

export const InfinityPoke = styled.div`

display:flex;
flex-wrap:wrap;
overflow-y:scroll;
height: ${props => props.size.option  };


`

export const DivPagi = styled.div`
height: 100px;
display:flex;
align-items:center;
justify-content:space-around;
`

export const DivSearch = styled.div`

display:flex;
justify-content:space-around;



`
export const DivFound = styled.button`
background: black;
color:white;
width:100%;
padding-top:2px;
padding-left: 10px;
font-size:20px;


&:hover{
    font-weight:bold;
    
    background:gray;
    cursor: pointer;
    
}

&:focus{
    background:gray;
}
&::selection{
    background:gray;
}
`

export const Ball = styled.img`
height: inherit ;
`