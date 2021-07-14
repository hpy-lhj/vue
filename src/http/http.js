//   http.js   用户所有请求的方式
// import axios from 'axios';

// import VueAxios from 'vue-axios'
// export default {
//     /**
//      * get 请求
//      * @param url 接口路由
//      * @param auth 是否需要带登录信息
//      * @returns {AxiosPromise}
//      * （Your back-end user authenticates information ）
//      * 			↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
//      * 	后端用户验证信息比如（token）		
//      */
//     get(url, data, auth = false) {
//         if (auth) {
//             return axios.get(url, data, { headers: { Authorization: 'Your back-end user authenticates information' } });
//         } else {
//             return axios.get(url, data);
//         }
//     },

//     /**
//      * post 请求
//      *
//      * @param url 接口路由
//      * @param data 接口参数
//      * @param auth 是否需要带登录信息
//      * @returns {AxiosPromise}
//      * 
//      */
//     post(url, data, auth = false) {
//         if (auth) {
//             return axios.post(url, data, { headers: { Authorization: 'Your back-end user authenticates information' } });
//         } else {
//             return axios.post(url, data);
//         }
//     },

//     /**
//      * put请求
//      * @param url 接口路由
//      * @param data 接口参数
//      * @param auth 是否需要带登录信息
//      * @returns {AxiosPromise}
//      */
//     put(url, data, auth = false) {
//         if (auth) {
//             return axios.put(url, data, { headers: { Authorization: 'Your back-end user authenticates information' } });
//         } else {
//             return axios.put(url, data);
//         }
//     },

//     /**
//      * 删除
//      * @param url 接口路由
//      * @param auth 是否需要带登录信息
//      * @returns {AxiosPromise}
//      */
//     del(url, auth = false) {
//         if (auth) {
//             return axios.delete(url, { headers: { Authorization: 'Your back-end user authenticates information' } });
//         } else {
//             return axios.delete(url);
//         }
//     },

//     /**
//      * 上传文件
//      * @param url 接口路由
//      * @param file 接口文件
//      * @param auth 是否需要带登录信息
//      */
//     uploader(url, file, auth = false) {
//         let param = new FormData();
//         param.append('file', file)
//         if (auth) {
//             return axios.post(url, param, { headers: { Authorization: 'Your back-end user authenticates information' } })
//         } else {
//             return axios.post(url, param)
//         }
//     },
// }




import axios from 'axios'
import login_data from "../libs/loginData";
import { showFullScreenLoading, tryHideFullScreenLoading } from '../libs/loading'
import { Message } from "element-ui";
import router from "../router";

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// // 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = login_data.Auth_Token
        token && (config.headers.token = token)
        config.headers.lang = "zh-cn"
        config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlMTc1YzgzMy0xODBiLTQ1NGQtOTM3Ni04NTEzYzZjZTU4ZDIiLCJlbWFpbCI6InByaW5jZWN4QGxpdmUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZX0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImMyZTFhZDg5Mzk4YjE3OGRlMWQ0Iiwic2NvcGVkS2V5U2VjcmV0IjoiYWY4NTMyMjk3OGMxMjcwMjY5NTQ4MDQyNzY4YTliZTRmMTQyZmExNTE4NjA0MzhlMDY1YmQyM2I5ZWQ2OTkyNSIsImlhdCI6MTYyNTYzMDI1N30._drYYe6O6Sfxh-8OSgi8a9lvV0bkjCpMbRrIPXlYiYw"
        return config
    },
    error => {
        return Promise.error(error)
    })

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            console.log(response)
            if (response.data.code != 200) {
                Message.error(response.data.msg);
                
            }
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是200的情况
    error => {
        console.log(error)
        tryHideFullScreenLoading()
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    console.log(401)
                    Message.error("请登录");
                    login_data.out();
                    router.replace({
                        path: '/login',
                    })
                    break
                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    Message.error("token失效,请重新登录");
                    router.replace({
                        path: '/login',
                    })
                    // 清除token
                    break
                // 404请求不存在
                case 404:
                    Message.error("404,网络请求不存在");
                    break
                // 其他错误，直接抛出错误提示
                default:
                    Message.error(error.response.data.message);
            }
            return Promise.reject(error.response)
        }
    }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params, loding) {
    return new Promise((resolve, reject) => {
        if (loding) {
            showFullScreenLoading()
        }
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
            tryHideFullScreenLoading()
        }).catch(err => {
            reject(err.data)
        })
    })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params, loding) {
    return new Promise((resolve, reject) => {
        if (loding) {
            showFullScreenLoading()
        }
        axios.post(url, params)
            .then(res => {
                if (url == "https://api.pinata.cloud/pinning/pinFileToIPFS") {
                    resolve(res)
                } else {
                    resolve(res.data)
                }

                tryHideFullScreenLoading()
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
/**
 * 添加
 * @param url 接口路由
 * @returns {AxiosPromise}
 */
export function put(url, params, loding) {
    return new Promise((resolve, reject) => {
        if (loding) {
            showFullScreenLoading()
        }
        axios.put(url, params)
            .then(res => {
                resolve(res.data)
                tryHideFullScreenLoading()
            })
            .catch(err => {
                reject(err.data)
                tryHideFullScreenLoading()
            })
    })
}

/**
 * 删除
 * @param url 接口路由
 * @returns {AxiosPromise}
 */
export function del(url, params, loding) {
    return new Promise((resolve, reject) => {
        if (loding) {
            showFullScreenLoading()
        }
        axios.delete(url, params)
            .then(res => {
                resolve(res.data)
                tryHideFullScreenLoading()
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
