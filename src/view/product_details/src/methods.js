/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
export default {
    // 选择产品
    card_list_click(item, index) {
        this.active_index = index
        this.right_list_img = item.img;
        this.nmber = item.max_nmber;
        this.price = item.price;
        this.tite = item.name;
        this.stepping = 1
        this.min_nmber = item.max_nmber-1
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
    }
}
