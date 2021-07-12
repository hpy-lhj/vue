/*常规方法定义
注意事项
1、不能用()=>{}  箭头函数定义
2、大量计算方法建议放computed

ps: https://cn.vuejs.org/v2/api/#methods
*/
import { get, post } from '../../../http/http'
export default {
    edit_click(index) {
        this.active_index = index
        if (index == 0) {
            this.comment_data()
        }
        if (index == 1) {
            this.thumb_data()
        }
        if (index == 2) {
            this.notice_data()
        }
        if (index == 3) {
            this.friends_data()
        }
    },
    // 获取评论列表
    comment_data() {
        let data = {
        };
        get(this.$api.news.comment, { data })
            .then((res) => {
                this.comment_list = res.data.list
                for (var i = 0; i < this.comment_list.length; i++) {
                    this.comment_list[i].show = false;
                    this.comment_list[i].excoment = "";
                    this.comment_list[i].shuru_inont_show = false;
                    this.comment_list[i].data_time = this.getTimeAge(this.comment_list[i].comment_time)
                }
                console.log(this.comment_list)
            })
            .catch((error) => {
                console.log(error);
            });
    },
    reply(index) {
        // this.comment_list[index].show = !this.comment_list[index].show
        this.$set(this.comment_list[index], "show", !this.comment_list[index].show);
        console.log(this.comment_list)
        this.$forceUpdate();
    },
    change(e) {
        this.$forceUpdate()
    },
    // 回复评论
    send_out(item, index) {
        if (item.excoment) {
            let data = this.$qs.stringify({
                collect_id: item.collect_id,
                pid: item.pid,
                uid_to: item.uid_from,
                message: item.excoment,
            })
            post(this.$api.news.comment, data)
                .then((res) => {
                    item.excoment = ""
                    item.show = false
                    this.comment_data()
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            this.$set(this.comment_list[index], "shuru_inont_show", true);
            this.$forceUpdate();
            console.log(this.comment_list)
        }

    },
    // 收到的赞
    thumb_data() {
        let data = {
        };
        get(this.$api.news.thumb, { data },true)
            .then((res) => {
                this.thumb_list = res.data.list
                for (var i = 0; i < this.thumb_list.length; i++) {
                    this.thumb_list[i].data_time = this.getTimeAge(this.thumb_list[i].thumb_time)
                }
                console.log(this.thumb_list)
            })
            .catch((error) => {
                console.log(error);
            });
    },
    // 系统通知列表
    notice_data() {
        let data = {
        };
        get(this.$api.news.notice, { data },true)
            .then((res) => {
                this.notice_list = res.data.list
                for (var i = 0; i < this.notice_list.length; i++) {
                    this.notice_list[i].data_time = this.getTimeAge(this.notice_list[i].created_at)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
    // 私信列表
    friends_data() {
        let data = {
        };
        get(this.$api.news.friends, { data })
            .then((res) => {
                this.friends_list = res.data.list
                for (var i = 0; i < this.friends_list.length; i++) {
                    this.friends_list[i].data_time = this.getTimeAge(this.friends_list[i].last_msg_time)
                }
                if (this.friends_list.length > 0) {
                    this.sx_data = this.friends_list[0]
                    this.friends_get(this.friends_list[0].uid_from)
                }
                console.log(this.friends_list)
            })
            .catch((error) => {
                console.log(error);
            });
    },
    message_click(item, index) {
        this.xx_index = index
        this.friends_get(item.uid_from)
        this.shuru_inont = ""
        this.sx_data = item
    },
    // 获取私信内容
    friends_get(item) {
        let data = {
            lang: "zh-cn",
        };
        get(this.$api.news.im + item, { data },true)
            .then((res) => {
                this.friends_list_im = res.data.list
                for (var i = 0; i < this.friends_list_im.length; i++) {
                    this.friends_list_im[i].data_time = this.getTimeAge(this.friends_list_im[i].created_at)
                    if (this.friends_list_im[i].is_me == 0) {
                        this.sx_data.uid_to = this.friends_list_im[i].uid_to
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
    // 回复私信内容
    send_out_click() {
        if (!this.shuru_inont) {
            this.shuru_inont_show = true
        } else {
            let data = this.$qs.stringify({
                // lang: "zh-cn",
                uid_to: this.sx_data.uid_from,
                message: this.shuru_inont
            });
            post(this.$api.news.im, data,true)
                .then((res) => {
                    this.shuru_inont = ''
                    this.friends_get(this.sx_data.uid_from)
                })
                .catch((error) => {
                    console.log(error);
                });
            // var ele = document.getElementById('cont_txt');
            // console.log(ele.scrollTop, ele.scrollHeight)
            // ele.scrollTop = ele.scrollHeight;
        }
    },
    getTimeAge(time) {
        console.log(time)
        var now = new Date().getTime()
        console.log(now)
        var d = new Date(time);
        var tims = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        var strtime = new Date(tims.replace(/-/g, '/'));
        // 返回值
        var result
        // 一分钟 1000 毫秒 乘以 60
        var minute = 1000 * 60
        var hour = minute * 60
        var day = hour * 24
        var week = day * 7
        var month = day * 30
        var year = day * 365
        // 现在时间 减去 传入时间 得到差距时间
        var diffValue = now - strtime.getTime()
        // 小于 0 直接返回
        if (diffValue < 0) {
            return
        }
        var yearC = diffValue / year
        var monthC = diffValue / month
        var weekC = diffValue / week
        var dayC = diffValue / day
        var hourC = diffValue / hour
        var minC = diffValue / minute
        switch (true) {
            case yearC >= 1:
                // 如果大于一年就显示具体日期
                result = '一年以前'
                break
            case monthC >= 1:
                result = '' + parseInt(monthC) + '月前'
                break
            case weekC >= 1:
                result = '' + parseInt(weekC) + '周前'
                break
            case dayC >= 1:
                result = '' + parseInt(dayC) + '天前'
                break
            case hourC >= 1:
                result = '' + parseInt(hourC) + '小时前'
                break
            case minC >= 0:
                result = '' + parseInt(hourC) + '分钟前'
                break
            default:
                console.log('其他')
        }
        return result
    },
    message_page(data) {
        console.log(data)
        this.active_index =
            data == 1
                ? 2
                : data == 2
                    ? 3
                    : data == 3
                        ? 0
                        : data == 4
                            ? 1
                            : 0;
        this.edit_click(this.active_index);
    }
}
