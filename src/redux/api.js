import axios from 'axios'

// ApiKey de la API

const API_KEY = '464d1d8835b74a2491ca59d17c9e8585'

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
       const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=${API_KEY}`)

       const data = res.data.articles

       console.log(data)

       dispatch({
           type: GET_NEWS,
           payload: { news: data}
       })
    } catch (error) {
        alert(`ERROR: ${error}`)
    }
}