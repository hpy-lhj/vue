/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import { get, post } from '../../../http/http'
export default {
    counter(nmber) {
        this.active = nmber
        this.box_show = nmber == 3 ? true : false
        let id = nmber == 1 ? "#productId" : nmber == 2 ? "#productIds" : "#productIdss"
        const returnEle = document.querySelector(id);  //productId是将要跳转区域的id
        if (!!returnEle) {
            returnEle.scrollIntoView(true);
            // true 是默认的
        }
        // document.querySelector("counter1").scrollIntoView(true); 
        //这里的counter1是将要返回地方的id
    },
    // 盒子类作品信息
    box_data(id) {
        get(this.$api.works.box + id).then(res => {

        }).catch((error) => {
            console.log(error)
        })
    }
}
