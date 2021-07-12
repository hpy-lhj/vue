/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
export default {
    i_click(index) {
        if (index == this.active) {
            this.active = 1000000000
        } else {
            this.active = index
        }
    }
}
