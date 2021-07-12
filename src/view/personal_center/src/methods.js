/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import { get, post } from '../../../http/http'
export default {
    // 选择菜单
    choice_click(item, index) {
        if (index != 5 && index != 6) {
            this.active_index = index
        } else {
            this.centerDialogVisible_show = true
            this.centerDialogVisible_nmber = index
        }
        if (index == 0) {
            this.status = "1"
            this.get_work()
        }
        if (index == 1) {
            this.status = "2"
            this.get_work()
        }
        if (index == 3) {
            this.love_work()
        }
        if (index == 2) {
            this.establish_work();
        }
    },
    // 关闭
    handleCloseBindWarnStandard() {
        this.centerDialogVisible_show = false
    },
    close_click() {
        this.Share_show = false
    },
    purchase(item) {

        if (this.active_index == 1 || this.active_index == 3) {
            this.works = item
            this.pur_show = true
            if (this.active_index == 1) {
                this.types = false
            } else {
                this.types = true
            }

        }
        if (this.active_index == 2) {
            this.workss = item
            this.pur_shows = true
            this.types = false
        }
    },
    // 获取各作品数量
    center_work() {
        let data = {
            user_id: this.$loginData.userId,
            count_type: "all"
        }
        get(this.$api.works.counter, data, true).then(res => {
            this.choice_list[0].nmber = res.data.sale
            this.choice_list[1].nmber = res.data.own
            this.choice_list[2].nmber = res.data.created
            this.choice_list[3].nmber = res.data.favorite
        }).catch((error) => {
            console.log(error)
        })
    },
    // 获取喜欢的作品
    love_work() {
        let data = {
            pageSize: 99999,
            page: 1,
            collection_id: this.collection_id,
            order_type: this.order_type,
            asc: this.asc,
            type: this.type,
            // status: this.status,
            user_id: this.$loginData.userId
        }
        get(this.$api.works.favorite, data, true).then(res => {
            res.data.list ? this.works_list = res.data.list : this.works_list = []
            console.log(this.works_list)
        }).catch((error) => {
            console.log(error)
        })
    },
    // 获取作品列表
    get_work() {
        let data = {
            collection_id: this.collection_id,
            order_type: this.order_type,
            asc: this.asc,
            type: this.type,
            status: this.status,
            owner_id: this.$loginData.userId,
        }
        get(this.$api.works.unit, data, true).then(res => {
            this.works_list = res.data.list
            console.log(this.works_list)
        }).catch((error) => {
            console.log(error)
        })
    },
    // 获取已创建作品
    establish_work() {
        let data = {
            page_size: 99999,
            collection_id: this.collection_id,
            creator_id: this.$loginData.userId,
            type: this.type,
            order_type: this.order_type,
            asc: this.asc,
        }
        get(this.$api.works.product, data, true).then(res => {
            let worklis = res.data.list
            for (let item of worklis) {
                item.product = {}
                item.product.creator = {}
                item.product.resources = [{ address: "" }]
                item.product.creator.nickname = item.creator.nickname
                item.product.creator.avatar = item.creator.avatar
                item.product.resources[0].address = item.resources[0].address
                item.product.name = item.name
            }

            this.works_list = worklis
        }).catch((error) => {
            console.log(error)
        })
    },
    // 选择卡类型
    active_click(data) {
        this.type = data
        if (this.active_index == 2) {
            this.establish_work()
            return
        }
        if (this.active_index == 3) {
            this.love_work()
            return
        }
        this.get_work()
    },
    // 选择系列
    xl_change(data) {
        if (data == 0) {
            this.collection_id = ""
            if (this.active_index == 2) {
                this.establish_work()
                return
            }
            if (this.active_index == 3) {
                this.love_work()
                return
            }
            this.get_work()
        } else {
            this.collection_id = data
            if (this.active_index == 2) {
                this.establish_work()
                return
            }
            if (this.active_index == 3) {
                this.love_work()
                return
            }
            this.get_work()
        }
    },
    // 选择正序倒叙
    price_change(data) {
        if (data == 0) {
            this.asc = "0"
            this.order_type = "created_at"
        }
        if (data == 1) {
            this.asc = "1"
            this.order_type = "created_at"
        }
        if (data == 2) {
            this.asc = "1"
            this.order_type = "price"
        }
        if (data == 3) {
            this.asc = "0"
            this.order_type = "price"
        }
        if (this.active_index == 2) {
            this.establish_work()
            return
        }
        if (this.active_index == 3) {
            this.love_work()
            return
        }
        this.get_work()
    }
}
