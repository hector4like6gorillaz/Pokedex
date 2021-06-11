import axios from "axios";


const URLpoke = `${process.env.REACT_APP_POKEDEX_BAE_URL}`;
export async function envAPI(props) {
    try {
        const response = await axios({
            url: `${URLpoke}${props}`,
            method: `GET`
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}


export async function API(props) {
    try {
        const response = await axios({
            url: `${props}`,
            method: `GET`
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

