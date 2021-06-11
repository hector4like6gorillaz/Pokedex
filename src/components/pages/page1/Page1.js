import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';

//import { useSelector, useDispatch } from 'react-redux';
//import { decremento, incremento } from '../../../redux/Slices/begin_slice';
import { deleteAllLocalStorage} from '../../CustomHooks/useLocalStorage';
import { Produccion } from '../../produccion';
//import { Page2 } from '../page2/page2';

function pagen(val){
    window.open(`/page2/${val}`, "nuevo", "width=400, height=1400");
}

function Page1(){
    //const { valorsin, valors_dos } = useSelector(state => state.Variables);
    //window.open("/page2", "nuevo", "width=400, height=400");
    //const dispatch = useDispatch();
    //const [cont1, setcont1] = useLocalStorage("valorsin", valorsin);
    var id = [];
    for(var i = 1; i<=15; i++)id.push(<Produccion key={i} id={i} />);
    const [idd, setidd] = useState(1);

  //        <Button func={()=>setcont1(cont1 +1)} text={"aumentar"} />
    return (
        <div>
            
            {id.map((item, index) => {
                return (
                    id[index]
                )
            })}
            
            <Button text="testowe" func={()=> pagen(idd)}/>
            <Button text="aumentar" func={()=>setidd(idd+1)}/>
            <Button text="disminuir" func={()=>setidd(idd-1)}/>
            <Button text="khe¡ 150" func={()=>setidd(idd = 150)}/>

            <p>{idd}</p>
            <Button text="borrar" func={deleteAllLocalStorage}/>
            
            
            
            
        </div>
    )
}

export default Page1;