import { Loading } from 'element-ui'

let needLoadingRequestCount = 0
let loading

function startLoading() {
    loading = Loading.service({
        // target: document.querySelector('.content-loading'),
        lock: true,
        // text: '拼命加载中...',
        background: 'rgba(0, 0, 0, 0.8)',
        // spinner: 'el-icon-loading'
    })
}

function endLoading() {
    // 指定target后，每次返回的都是单独的实例，所以要在调用新的loading之前检测是否有实例存在，如果有择用close方法
    loading && loading.close()
}

export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}

