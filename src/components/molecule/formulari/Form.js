import React from 'react';
import { useState } from 'react';


export const Form = () => {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("")
const submitform = () =>{
    console.log(email, " ", pass);
}

    return (

        <form>
            <label htmlFor="correo">
                ingresa tu email please:
            </label>
            <input 
            type="email" 
            id="correo"
            value={email} 
            onChange={e => setemail(e.target.value)} 
            placeholder="email please" />
            <input 
            type="password" 
            value={pass} 
            onChange={e => setpass(e.target.value)} 
            placeholder="**********" />
              <div >
            <input 
            type="submit" 
            value="iniciar sesion prro"
            onClick={submitform}
             />
            </div>
        </form>
    )
}

