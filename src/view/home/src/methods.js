/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import { get, post } from '../../../http/http'
export default {
    uap_clack(index) {
        if (this.Illustrated_list[index].length_nmber == 6) {
            this.Illustrated_list[index].length_nmber = 999
        } else {
            this.Illustrated_list[index].length_nmber = 6
        }
    },
    close_click() {
        this.Share_shows = false
    },
    slide() {
        this.$refs.slider.$emit('slidePre')
    },
    slideNext() {
        this.$refs.slider.$emit('slideNext')
    },
    get_data() {
        get(this.$api.Index.home).then(res => {
            this.user_recommend_obj = res.data.user_recommend
            this.user_id = res.data.user_id
        }).catch((error) => {
            console.log(error)
        })
    },
    // 盒子等级列表
    box_data() {
        let data = {
            page_size: 99999,
            type: 0,
            collection_id: 1983405070
        }
        get(this.$api.works.product, data, true).then(res => {
            let rated = []
            let a = []
            let b = []
            let c = []
            let d = []
            for (let item of res.data.list) {
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
            // console.log(a,b,c,d)
            if (a.length > 0) {
                rated.push({
                    tite_img: require("../../../assets/ssr.png"),
                    list: a
                })
            }
            if (b.length > 0) {
                rated.push({
                    tite_img: require("../../../assets/premiu.png"),
                    list: b
                })
            }
            if (c.length > 0) {
                rated.push({
                    tite_img: require("../../../assets/regula.png"),
                    list: c
                })
            }
            this.Illustrated_list = rated
            console.log(this.Illustrated_list)
        }).catch((error) => {
            console.log(error)
        })
    },
    // 获取作品列表
    get_work() {
        let data = {
            page_size: 99999,
            type: 1,
            collection_id: 1983405070
        }
        get(this.$api.works.product, data, true).then(res => {
            this.works_list = res.data.list
            let img_list = []
            for (var item of res.data.list) {
                img_list.push({
                    img: item.resources[0].address,
                    style: {
                        width: "100%",
                        height: "45%",
                        padding: "0 0 30px 0",
                    },
                })
            }
            this.someList = img_list
        }).catch((error) => {
            console.log(error)
        })
    },
    transfer() {
        let value = web3.utils.toWei('1', 'ether')
        var message = { from: this.fromAddress, to: this.toAddress, value: value };

        web3.eth.sendTransaction(message, (err, res) => {
            var output = "";
            if (!err) {
                output += res;
                this.txHash = res
            } else {
                output = "Error" + err;
            }

            console.log('转账:', output)
        })
    },
    purchase(item) {
        this.Share_show = true
        this.works_pur = item
        this.label = false
        this.types = true
    }
}
