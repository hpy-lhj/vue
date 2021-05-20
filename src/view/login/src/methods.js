/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
export default {
    getCode() {
        this.veri_show = false
        this.timer = setInterval(() => {
            this.times--
            if (this.times === 0) {
                this.veri_show = true
                clearInterval(this.timer)
            }
        }, 1000)
    }
}
