import React, { useState } from "react";

const Input = (props) => {
const [label, setlabel] = useState(props.value);
    return (
        <input
          className={props.name}
          type={props.type}
          id={props.id}
          aria-label="Set increment amount"
          value={label}
          onChange={e => setlabel(e.target.value)}
        />
    )
}
 export default Input;