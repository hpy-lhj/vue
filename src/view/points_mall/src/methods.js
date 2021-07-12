/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
export default {
    nmber_bj(id) {
        if (id == 1) {
            this.nmber -= 1
        } else {
            this.nmber += 1
        }
    },
    counter(nmber) {
        let id = nmber == 1 ? "#productId" : nmber == 2 ? "#productIdss" : "#productIds"
        const returnEle = document.querySelector(id);  //productId是将要跳转区域的id
        if (!!returnEle) {
            returnEle.scrollIntoView(true);
            // true 是默认的
        }
        // document.querySelector("counter1").scrollIntoView(true); 
        //这里的counter1是将要返回地方的id
    }
}
