import { useState } from "react";


export const Input = (props) => {
  const [datos, setDatos] = useState(props.dato);

    return (
      <input 
      className={props.cname}
      name={props.name}
      type={props.tipe || "text"}
      value={datos}
      placeholder={props.place}
      onChange={e => setDatos(e.target.value)}
       />
    )
}
