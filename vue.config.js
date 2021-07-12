const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 192
})
// 后端请求地址 注意 [ 他会根据你环境的不同从而获取的 env 文件不同 ]
const target = process.env.APP_API_URL;
module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [postcss]
            }
        },
    },
    configureWebpack: {
        resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }
            ]
        }
    }
    // devServer: {
    //     // 所有的接口请求代理
    //     proxy: {
    //         /*
    //         * @param target  要访问的接口域名
    //         * @param changeOrigin 
    //         * 	开启代理：在本地会创建一个虚拟服务端，
    //         * 	然后发送请求的数据，并同时接收请求的数据，
    //         * 	这样服务端和服务端进行数据的交互就不会有跨域问题
    //         * @param ws	是否启用 websockets
    //         * @param pathRewrite 
    //         * 	这里理解成用'/api'代替 target 里面的地址,
    //         * 	比如要调用'http://40.00.100.100:3002/user/add'，
    //         * 	直接写'/api/user/add'即可
    //         * 
    //         */
    //         '/api': {
    //             target: target,
    //             changeOrigin: true,
    //             ws: true,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // }
};