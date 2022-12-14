import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://181.215.134.184:5000'
});

api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
api.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
api.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
api.defaults.headers.common['Content'] = 'application/json'
api.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, PUT, GET, DELETE'
api.defaults.headers.common['ngrok-skip-browser-warning'] = 'any'

export default api