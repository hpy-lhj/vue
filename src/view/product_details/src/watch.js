/*属性值监控
1、不能用()=>{}  箭头函数定义
ps: https://cn.vuejs.org/v2/api/#watch
*/
export default {
    stepping(value) {
        this.min_nmber = this.nmber - value
    }
};
