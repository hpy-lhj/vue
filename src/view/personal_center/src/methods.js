/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
export default {
    // 选择菜单
    choice_click(item, index) {
        if (index != 5 && index != 6) {
            this.active_index = index
        } else {
            this.centerDialogVisible_show = true
            this.centerDialogVisible_nmber = index
        }

    },
    // 关闭
    handleCloseBindWarnStandard() {
        this.centerDialogVisible_show = false
    },
    close_click(){
        this.Share_show = false
    }
}
