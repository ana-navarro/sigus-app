import axios from 'axios'

const api = axios.create({
    baseUrl: 'http://181.215.134.184:5000'
});

api.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
api.defaults.headers.common['Access-Control-Allow-Credentials'] = 'false'
api.defaults.headers.common['Access-Control-Allow-Headers'] = "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-auth-token"
api.defaults.headers.common['Content'] = 'application/json'
api.defaults.headers.common['Access-Control-Allow-Methods'] = "GET,OPTIONS,PATCH,DELETE,POST,PUT"
api.defaults.headers.common['ngrok-skip-browser-warning'] = 'any'

export default api