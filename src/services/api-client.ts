import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9a6a75d844634be1956501d3fe601bd2'
    }
})