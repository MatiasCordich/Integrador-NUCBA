import axios from 'axios'

// ApiKey de la API

const API_KEY = 'ZBfbj0kgYNPSu7l9a3mClxkRYRxNzUNFUZu_kpj4Y_cTMcXD'

// Valores iniciales

const defaultValue = {
    news: []
}

// Acciones

const GET_NEWS = 'GET_NEWS'

export default function newsReducer( state = defaultValue, {type, payload}) {
    switch (type) {
        case GET_NEWS: return {...state, news: payload}
        default: return defaultValue           
    }
}

export const getNews = () => async (dispatch) => {
    try {
       const res = await axios.get(`https://api.currentsapi.services/v1/latest-news?country=ar&language=es&apiKey=${API_KEY}`)

       const data = res.data.news

       console.log(data)

       dispatch({
           type: GET_NEWS,
           payload: { news: data}
       })
    } catch (error) {
        alert(`ERROR: ${error}`)
    }
}