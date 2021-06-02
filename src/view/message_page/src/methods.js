/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
export default {
    edit_click(item, index) {
        this.active_index = index
    },
    send_out_click() {
        if (!this.shuru_inont) {
            this.shuru_inont_show = true
        } else {
            this.cont_info_list.push({
                name: this.shuru_inont,
                type: false
            })
            this.shuru_inont = ''
            var ele = document.getElementById('cont_txt');
            console.log( ele.scrollTop,ele.scrollHeight)
            ele.scrollTop = ele.scrollHeight;
        }
    }
}
