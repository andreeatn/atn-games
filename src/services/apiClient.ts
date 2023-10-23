import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '61fb87b3af4c4cb1a221ffe2ad2cbb3d'
    }
})

export default apiClient;