/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import { get, post, del } from '../../../http/http'
export default {
    purchase(item) {
        this.Share_show = true
        this.types = true
        this.works = item
    },
    // 获取作品列表
    get_work() {
        let data = {
            collection_id: this.collection_id,
            order_type: this.order_type,
            asc: this.asc,
            type: this.type,
            status: 2
        }
        get(this.$api.works.unit, data, true).then(res => {
            this.works_list = res.data.list

        }).catch((error) => {
            console.log(error)
        })
    },
    // 选择卡类型
    active_click(data) {
        this.type = data
        this.get_work()
    },
    // 选择系列
    xl_change(data) {
        if (data == 0) {
            this.collection_id = ""
            this.get_work()
        } else {
            this.collection_id = data
            this.get_work()
        }
    },
    // 选择正序倒叙
    price_change(data) {
        if (data == 0) {
            this.asc = "0"
            this.order_type = ""
        }
        if (data == 1) {
            this.asc = "1"
            this.order_type = ""
        }
        if (data == 2) {
            this.asc = "1"
            this.order_type = "price"
        }
        if (data == 3) {
            this.asc = "0"
            this.order_type = "price"
        }
        this.get_work()
    },
    Collection(item) {
        if (item.favorite) {
            this.q_zan(item)
        } else {
            this.d_zan(item)
        }
    },
    d_zan(item) {
        post(this.$api.works.favorite + item.id,).then(res => {
            this.get_work()
        }).catch((error) => {
            console.log(error)
        })
    },
    q_zan(item) {
        del(this.$api.works.favorite + item.id,).then(res => {
            this.get_work()
        }).catch((error) => {
            console.log(error)
        })
    },

}
