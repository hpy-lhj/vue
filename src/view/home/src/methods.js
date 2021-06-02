/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
export default {
    uap_clack(index) {
        if (this.Illustrated_list[index].length_nmber == 6) {
            this.Illustrated_list[index].length_nmber = 999
        } else {
            this.Illustrated_list[index].length_nmber = 6
        }
    },
    close_click() {
        this.Share_show = false
    },
    slide() {
        this.$refs.slider.$emit('slidePre')
    },
    slideNext() {
        this.$refs.slider.$emit('slideNext')
    }

}
