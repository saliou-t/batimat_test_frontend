import axios from 'axios'


export default () => {
    const axiosConf = axios.create({
        baseURL: `http://127.0.0.1:8000/api`,         // LOCAL

        // baseURL: `http://127.0.0.1:8000`,           // PROD
                     
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            // 'user': store.state.user
        }
    })

    axiosConf.defaults.headers.post['Content-Type'] = 'Application/json'
    // axiosConf.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
   
    return axiosConf
}