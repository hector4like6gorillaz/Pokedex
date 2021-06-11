import { useState, useEffect } from 'react';
import axios from "axios";

const Endpoints = (props) => {
    const [list, setList] = useState([]);

    const baseURL = props;
    useEffect(() => { 
        axios({
            url: baseURL,
        })
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [props]);


    return list;






}


export default Endpoints;

