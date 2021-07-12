/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import { get, post } from '../../../http/http'
export default {
    counter() {
        const returnEle = document.querySelector("#productId");  //productId是将要跳转区域的id
        if (!!returnEle) {
            returnEle.scrollIntoView(true); // true 是默认的
        }
        // document.querySelector("counter1").scrollIntoView(true);
        //这里的counter1是将要返回地方的id
    },
    // 提交审核
    Submit_review() {
        this.$refs.ruleForm.validate((valid) => {
            let data = new FormData
            data.append("type", this.ruleForm.radio)
            data.append("email", this.ruleForm.emel)
            data.append("name", this.ruleForm.name)
            data.append("introduce", this.ruleForm.textarea)
            data.append("site_url", this.ruleForm.itw)
            data.append("file", this.ruleForm.works)
            if (valid) {
                post(this.$api.apply_creator.apply_creator, data,true).then(res => {
                    this.$router.push("/")
                }).catch((error) => {
                    this.$message.error('网络错误，请重新请求');
                })
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    on_success(data) {
        console.log(data)
        this.ruleForm.works = data.raw
        console.log(this.ruleForm.works)
    }
}
