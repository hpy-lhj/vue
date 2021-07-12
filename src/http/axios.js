//	axios.js
import axios from 'axios';

// 请求拦截
axios.interceptors.request.use(config => {
    // 1. 这个位置是请求前最后的配置
    // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
    // 	config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    console.log(12312)
    return config
}, error => {
    console.log("12312")
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    // 请求成功
    // 1. 根据自己项目需求定制自己的拦截
    // 2. 然后返回数据
    console.log(12312)
    return response;
}, error => {
    console.log(12312)
    // 请求失败
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                // 对400错误您的处理\
                console.log(400123)
                break
            case 401:
                // 对 401 错误进行处理
                break
            default:
                // 如果以上都不是的处理
                console.log(12312)
                return Promise.reject(error);

        }
    }
})