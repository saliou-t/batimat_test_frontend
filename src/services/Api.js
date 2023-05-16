import axios from 'axios'


export default () => {
    let token = localStorage.getItem('user_token')
    
    const axiosConf = axios.create({
        baseURL: `http://127.0.0.1:8000/api`,         // LOCAL

        // baseURL: `http://127.0.0.1:8000`,           // PROD
                     
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`,
            // 'user': store.state.user
        }
    })

    axiosConf.defaults.headers.post['Content-Type'] = 'Application/json'
    // axiosConf.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
   
    return axiosConf
}