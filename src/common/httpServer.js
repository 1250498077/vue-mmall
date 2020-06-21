import axios from 'axios';

// 创建axios实例
var instance = axios.create({  timeout: 1000 * 12});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


instance.interceptors.request.use(
    config => {
        return config;    
    },
    error => Promise.error(error)
)

// 响应拦截器
instance.interceptors.response.use(    
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),    
    // 请求失败
    error => {
        console.log(error)
    });

export default instance;

