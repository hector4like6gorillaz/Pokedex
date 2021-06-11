import styled from "styled-components";


export const Body = styled.div`
display: flex;
width:100%;
justify-content:center;
`

export const ListDiv = styled.div`

background: #CECB9F;
width: 80%;

`

export const Barra2btn = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
`
export const Divbarra = styled.div`
display: flex;
align-items: center;
border-style:solid ;
width: fit-content;
border-bottom-right-radius: 25px;
border-top-right-radius: 25px;
border-radius: 25px;
padding: 8px;

`
export const Scoope = styled.button`
background: none;
width:50px;
height: 50px;
border-style:none;
font-size: 40px;
border-radius: 25px;
color: gray;

&:hover{
    background: red;
}
`

export const Input = styled.input`
width: 400px;
height: 50px;
border: none;
border-bottom-right-radius: 25px;
border-top-right-radius: 25px;
font-size: 30px;
background: none;

&:hover{
    cursor:pointer ;
}

&:active{
    border: none;
}

&:focus{
    border-radius: 12px;
}
`

export const Divbuttons = styled.div`
display: flex;
align-items:center;
`

export const Lista = styled.button`
width: 150px;
height: 35px;
border-radius: 12px;
background:#27315C;
color:white;
font-size: 20px;
`

export const Cuadricula = styled.button`
width: 150px;
height: 35px;
border-radius: 12px;
background:white;
color:#27315C;
font-size: 20px;
`

export const H1 = styled.h1`

`
export const DivList = styled.div`
width: 100%;

padding: 10px;
`

export const Infobox = styled.div`
display:flex;
align-items:center;
justify-content: space-around;
font-size: 25px;
padding-bottom:15px;
`

export const Pokelist = styled.div`

`

export const Squ = styled.div`
display:flex;
flex-wrap:wrap;

`