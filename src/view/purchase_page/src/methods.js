/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import { get, post } from '../../../http/http'
export default {
    close_click() {
        this.share_show = false
    },
    // 获取额日记市场作品信息
    get_work() {
        get(this.$api.works.unit + this.$route.query.id,).then(res => {
            this.infor_data = res.data.unit
        }).catch((error) => {
            console.log(error)
        })
    },
    // 获取一级市场作品信息
    er_work() {
        get(this.$api.works.product + this.$route.query.id,).then(res => {
            let data = res.data
            data.product = {
                name: res.data.name,
                left: res.data.left,
                count: res.data.count,
                resources: [{ address: res.data.resources[0].address }]
            },
                data.owner = {
                    avatar: res.data.creator.avatar,
                    nickname: res.data.creator.nickname
                }
            this.infor_data = data
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
    },
}
