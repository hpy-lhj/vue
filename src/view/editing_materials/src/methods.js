/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import { get, post, put } from '../../../http/http'
import axios from "axios"
export default {
    metadata() {
        let data = {
            name: "123",
            description: "123321",
            image: "https://gateway.pinata.cloud/ipfs/QmeRCLYNqHdApvCiXjkLsCYufXxY2cfYjgh9Loc4w9Bf1E"
        }
        post(this.$api.works.metadata, data).then(res => {

        }).catch((error) => {
            console.log(error)
        })
    },
    // async getWordData() {
    //     let url = "https://api.maya.fun/metadata/88055b5c7c8bd36b4507ec87fefb9eca.json"
    //     try {
    //         const { data } = await axios({ method: "get", url });
    //         console.log(data)
    //     } catch (error) {

    //     }
    // },
    edit_click(item, index) {
        this.active_index = index
    },
    preservation() {
        this.$refs.ruleForm.validate((valid) => {
            if (valid) {
                let data = new FormData
                data.append("nickname", this.ruleForm.name)
                data.append("introduction", this.ruleForm.textarea)
                data.append("file", this.ruleForm.works)
                put(this.$api.user_infor.user, data).then(res => {
                    // 修改成功
                    this.$loginData.userName = res.user.nickname,
                        this.$loginData.userMobile = res.user.avatar,
                        this.$loginData.inviteCode = res.user.introduction,
                        this.$router.go(-1)
                }).catch((error) => {
                    console.log(error)
                })
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    },
    on_success(data) {
        console.log(data)
        this.upd_img(data.raw)
        this.ruleForm.works = data.raw
        this.getBase64(data.raw).then(res => {
            this.tou_img = res
        });
    },
    // 上传图片
    upd_img(fill) {
        let data = new FormData
        data.append("pinataOptions", '{ "cidVersion": 0 }')
        data.append("pinataMetadata", '{ "name": "123" }')
        data.append("file", fill)
        // post("https://api.pinata.cloud/pinning/pinFileToIPFS", data).then(res => {
        //     console.log(res)
        // }).catch((error) => {
        //     console.log(error)
        // })
        this.$axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", data, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJlMTc1YzgzMy0xODBiLTQ1NGQtOTM3Ni04NTEzYzZjZTU4ZDIiLCJlbWFpbCI6InByaW5jZWN4QGxpdmUuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZX0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImMyZTFhZDg5Mzk4YjE3OGRlMWQ0Iiwic2NvcGVkS2V5U2VjcmV0IjoiYWY4NTMyMjk3OGMxMjcwMjY5NTQ4MDQyNzY4YTliZTRmMTQyZmExNTE4NjA0MzhlMDY1YmQyM2I5ZWQ2OTkyNSIsImlhdCI6MTYyNTYzMDI1N30._drYYe6O6Sfxh-8OSgi8a9lvV0bkjCpMbRrIPXlYiYw'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {

            })
    },
    getBase64(file) {
        return new Promise(function (resolve, reject) {
            let reader = new FileReader();
            let imgResult = "";
            reader.readAsDataURL(file);
            reader.onload = function () {
                imgResult = reader.result;
            };
            reader.onerror = function (error) {
                reject(error);
            };
            reader.onloadend = function () {
                resolve(imgResult);
            };
        });
    },
}
