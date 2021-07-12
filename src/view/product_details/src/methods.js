/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import { get, post } from '../../../http/http'
export default {
    // 选择产品
    card_list_click(item, index) {
        this.active_index = index
        this.right_list_img = item.img;
        this.nmber = item.max_nmber;
        this.price = item.price;
        this.tite = item.name;
        this.stepping = 1
        this.min_nmber = item.max_nmber - 1
    },
    // 步进器减
    stepping_click_jian() {
        console.log(1)
        if (this.stepping != 1) {
            this.stepping -= 1
        }
    },
    // 步进器加
    stepping_click_jia() {
        console.log(2)
        if (this.stepping != this.nmber) {
            this.stepping += 1
        }
    },
    // 获取额一级市场作品信息
    get_work() {
        get(this.$api.works.unit + this.$route.query.id,{}).then(res => {
            this.infor_data = res.data.unit
            this.box_data(res.data.unit.product_id)
        }).catch((error) => {
            console.log(error)
        })
    },
    // 获取一级市场作品信息
    er_work() {
        get(this.$api.works.product + this.$route.query.id,{}).then(res => {
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
            this.box_data(res.data.id)
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
    },
    // 盒子类作品信息
    box_data(id) {
        get(this.$api.works.box + id,).then(res => {
            let rated = []
            let a = []
            let b = []
            let c = []
            let d = []
            for (let item of res.data) {
                if (item.level == 0) {
                    a.push(item)
                }
                if (item.level == 1) {
                    b.push(item)
                }
                if (item.level == 2) {
                    c.push(item)
                }
                if (item.level == 3) {
                    d.push(item)
                }
            }
            if (a.length > 0) {
                rated.push({
                    name: "普通卡概率",
                    nmber: "50%",
                    img_list: a
                })
            }
            if (b.length > 0) {
                rated.push({
                    name: "高级卡概率",
                    nmber: "30%",
                    img_list: b
                })
            }
            if (c.length > 0) {
                rated.push({
                    name: "SSR卡概率",
                    nmber: "20%",
                    img_list: c
                })
            }
            this.card_list = rated
            console.log(rated)
        }).catch((error) => {
            console.log(error)
        })
    }
}
