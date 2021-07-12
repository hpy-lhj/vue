/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import { get, post } from '../../../http/http'
export default {
    // 获取邮件验证码
    getCode() {
        let zz = /^\w{1,64}@[a-z0-9\-]{1,256}(\.[a-z]{2,6}){1,2}$/i
        if (this.ruleForm.e_mail && zz.test(this.ruleForm.e_mail)) {
            let data = {
                email: this.ruleForm.e_mail
            }
            post(this.$api.user_infor.email, data).then(res => {
                this.veri_show = false
                this.timer = setInterval(() => {
                    this.times--
                    if (this.times === 0) {
                        this.veri_show = true
                        this.timer = 60
                        clearInterval(this.timer)
                    }
                }, 1000)
            }).catch((error) => {
                this.$message.error('错了哦，这是一条错误消息');
            })
        } else {
            this.$message.error('请输入正确的邮箱格式');
        }

    },
    // 登录注册按钮
    login_click() {
        this.$refs.ruleForm.validate((valid) => {
            if (valid) {
                this.$qs.stringify()
                let data = this.activeName ? {
                    email: this.ruleForm.e_mail,
                    password: this.ruleForm.powsword
                } : {
                    email: this.ruleForm.e_mail,
                    password: this.ruleForm.powsword,
                    verification_code: this.ruleForm.verification
                }
                this.get_login(data)
            } else {
                console.log('error submit!!');
                return false;
            }
        });

    },
    // 登录注册接口
    get_login(data) {
        console.log(123)
        post(this.activeName ? this.$api.user_infor.auth : this.$api.user_infor.register, data).then(res => {
            // if (res.code == 201) {
            if (this.activeName) {
                // 登录成功
                this.$loginData.in({
                    authToken: res.token,
                    id: res.user.id,
                    user_name: res.user.nickname,
                    user_mobile: res.user.avatar,
                    mobile: res.user.avatar,
                    node_type: res.user.avatar,
                    invitation_code: res.user.introduction,
                });
                this.$router.replace("/")
            } else {
                // 注册成功
                this.$message.success("注册成功，前往登录")
                this.activeName = true
                this.ruleForm.e_mail = ""
                this.ruleForm.powsword = ""
                this.ruleForm.verification = ""
            }
            // } else {
            //     this.$message.error(res.msg);
            // }


        }).catch((error) => {
            this.$message.error('错了哦，这是一条错误消息');
        })
    }
}
