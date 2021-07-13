<template>
  <div class="reply">
    <p class="tite">{{ reply_list.length }}条评论</p>
    <div class="replys">
      <div class="top_hf">
        <img src="../../../../assets/pl_tou.png" alt="" />
        <input
          v-model="reply"
          placeholder="您可以发布您想说的..."
          type="text"
        />
        <button @click="send_out(reply, user_id, pid, 1)">发送</button>
      </div>
      <div class="repl_list" v-for="(item, index) in reply_list" :key="index">
        <div class="repl_list_cont">
          <img class="tou_img" :src="item.avatar" alt="" />
          <div class="list_right">
            <p class="one">
              <span class="key">{{ item.user_name }}</span>
              <span class="value">{{ item.data_time }}</span>
            </p>
            <p class="cont">
              {{ item.message }}
            </p>
            <div class="set">
              <div class="zan">
                <img
                  v-if="item.is_num_up == 1"
                  src="../../../../assets/zan.png"
                  alt=""
                />
                <img v-else src="../../../../assets/thumbs-up.png" alt="" />
                <span>{{ item.num_up }}</span>
              </div>
              <img
                v-if="item.is_num_down == 1"
                class="cai cai_co"
                src="../../../../assets/thumbs-up.png"
                alt=""
              />
              <img v-else class="cai" src="../../../../assets/cai.png" alt="" />
              <span>{{ item.num_down }}</span>
              <span @click="replys(item, index, 1)" class="reps_span"
                >回复</span
              >
            </div>
            <div class="huifu" v-if="active_index == index">
              <img src="../../../../assets/pl_tou.png" alt="" />
              <input
                v-model="one_reply"
                placeholder="添加公开回复..."
                type="text"
              />
              <span
                class="reps"
                @click="send_out(one_reply, item.uid_from, item.pid, 2)"
                >发送</span
              >
            </div>
            <div
              @click="see(item, index)"
              class="bottom_show"
              v-if="item.num_reply > 0"
            >
              <img
                :class="{
                  arrowTransform: active_index_ej == index,
                  arrowTransformReturn: active_index_ej != index,
                }"
                src="../../../../assets/rdbx.png"
                alt=""
              />
              <span
                >{{ active_index_ej == index ? "隐藏" : "查看"
                }}{{ item.num_reply }}条评论</span
              >
            </div>
          </div>
        </div>
        <!-- 第二层评论 -->
        <div v-if="active_index_ej == index">
          <div
            v-for="(er, inx) in reply_list_rj"
            :key="inx"
            class="repl_list_cont repl_list_cont_rj"
          >
            <img class="tou_img" :src="er.avatar" alt="" />
            <div class="list_right">
              <p class="one">
                <span class="key">{{ er.user_name }}</span>
                <span class="value">{{ er.data_time }}</span>
              </p>
              <p class="cont">
                {{ er.message }}
              </p>
              <div class="set">
                <div class="zan">
                  <img src="../../../../assets/zan.png" alt="" />
                  <span>{{ er.num_up }}</span>
                </div>
                <img class="cai" src="../../../../assets/cai.png" alt="" />
                <span>{{ er.num_down }}</span>
                <span @click="replys(er, inx, 2)" class="reps_span">回复</span>
              </div>
              <div class="huifu" v-if="active == inx">
                <img src="../../../../assets/pl_tou.png" alt="" />
                <input
                  v-model="erw_reply"
                  placeholder="添加公开回复..."
                  type="text"
                />
                <span
                  class="reps"
                  @click="send_out(erw_reply, er.uid_from, er.pid, 3)"
                  >发送</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="more" v-if="reply_list_thri.length > 3" @click="more">
        查看更多
      </p>
    </div>
  </div>
</template>
<script>
import { get, post } from "../../../../http/http";
export default {
  props: {
    user_id: "",
    news_show: Boolean,
  },
  data: function () {
    return {
      pid: "",
      reply_list: [],
      reply_list_rj: [],
      active_index: 9999999999,
      active: 9999999,
      active_index_ej: 99999999,
      reply: "",
      one_reply: "",
      erw_reply: "",
      reply_list_thri: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    more() {
      this.reply_list = this.reply_list_thri;
      this.reply_list_thri = [];
    },
    // 获取评论列表
    comment_data(id) {
      let data = {
        collect_id: "2813327742",
        pid: id,
      };
      get(this.$api.news.collect_comment, data, true)
        .then((res) => {
          if (!id) {
            this.reply_list = res.data.list;
            for (var i = 0; i < this.reply_list.length; i++) {
              this.reply_list[i].data_time = this.getTimeAge(
                this.reply_list[i].comment_time
              );
            }
            this.reply_list_thri = this.reply_list;
            this.reply_list = this.reply_list.slice(0, 3);
          } else {
            this.reply_list_rj = res.data.list;
            for (var i = 0; i < this.reply_list_rj.length; i++) {
              this.reply_list_rj[i].data_time = this.getTimeAge(
                this.reply_list_rj[i].comment_time
              );
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 新增评论
    comment(message, id, pid, type) {
      let data = {
        collect_id: "2813327742",
        message: message,
        uid_to: id.toString(),
        pid: pid.toString(),
      };
      post(this.$api.news.comment, data, true)
        .then((res) => {
          this.swic(type);
          let id = type == 1 ? "" : pid;
          this.comment_data(id);
        })
        .catch((error) => {
          this.swic(type);
        });
    },
    send_out(message, id, pid, type) {
      if (!message) {
        this.$message.error("请输入评论内容");
      } else {
        this.comment(message, id, pid, type);
      }
    },
    swic(type) {
      switch (type) {
        case 1:
          this.reply = "";
          break;
        case 2:
          this.one_reply = "";
          break;
        case 3:
          this.one_reply = "";
          break;
        default:
          console.log("报错");
      }
    },
    // 回复一级评论
    replys(item, index, id) {
      if (id == 1) {
        if (this.active_index == index) {
          this.active_index = 99999999;
          return;
        }
        this.active_index = index;
      } else {
        if (this.active == index) {
          this.active = 99999999;
          return;
        }
        this.active = index;
      }
    },
    // 展开二级评论
    see(item, index) {
      if (this.active_index_ej == index) {
        this.active_index_ej = 99999999;
        return;
      }
      this.comment_data(item.pid);
      this.active_index_ej = index;
    },
    getTimeAge(time) {
      console.log(time);
      var now = new Date().getTime();
      console.log(now);
      var d = new Date(time);
      var tims =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1) +
        "-" +
        d.getDate() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds();
      var strtime = new Date(tims.replace(/-/g, "/"));
      // 返回值
      var result;
      // 一分钟 1000 毫秒 乘以 60
      var minute = 1000 * 60;
      var hour = minute * 60;
      var day = hour * 24;
      var week = day * 7;
      var month = day * 30;
      var year = day * 365;
      // 现在时间 减去 传入时间 得到差距时间
      var diffValue = now - strtime.getTime();
      // 小于 0 直接返回
      if (diffValue < 0) {
        return;
      }
      var yearC = diffValue / year;
      var monthC = diffValue / month;
      var weekC = diffValue / week;
      var dayC = diffValue / day;
      var hourC = diffValue / hour;
      var minC = diffValue / minute;
      switch (true) {
        case yearC >= 1:
          // 如果大于一年就显示具体日期
          result = "一年以前";
          break;
        case monthC >= 1:
          result = "" + parseInt(monthC) + "月前";
          break;
        case weekC >= 1:
          result = "" + parseInt(weekC) + "周前";
          break;
        case dayC >= 1:
          result = "" + parseInt(dayC) + "天前";
          break;
        case hourC >= 1:
          result = "" + parseInt(hourC) + "小时前";
          break;
        case minC >= 0:
          result = "" + parseInt(hourC) + "分钟前";
          break;
        default:
          console.log("其他");
      }
      return result;
    },
  },
  mounted: async function () {
    this.comment_data("");
  },
};
</script>
<style lang="scss" scoped>
.reply {
  width: 100%;
  .tite {
    font-size: 20px;
    font-family: PingFangSC-Semibold;
    color: #ffffff;
    margin-bottom: 23px;
  }
  .replys {
    background: #1d1d1d;
    border-radius: 25px;
    padding: 30px;
    .top_hf {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 33px;
      border-bottom: 1px solid #3c3c3c;
      margin-bottom: 73px;
      img {
        display: block;
        min-width: 60px;
        min-height: 60px;
        max-width: 60px;
        max-height: 60px;
        border-radius: 50%;
        margin-right: 18px;
      }
      input {
        width: 100%;
        height: 60px;
        border: 0;
        background: #2f2f2f;
        border-radius: 25px;
        padding: 0 31px;
        color: #ffffff;
      }
      button {
        width: 77px;
        height: 40px;
        background: #3772ff;
        border-radius: 20px;
        color: #fff;
        border: none;
        margin-left: 30px;
      }
    }
    .repl_list {
      padding-right: 107px;
      .repl_list_cont {
        display: flex;
        margin-bottom: 20px;
        &.repl_list_cont_rj {
          padding-left: 80px;
          .tou_img {
            width: 40px;
            height: 40px;
          }
        }
        .tou_img {
          display: block;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-right: 20px;
        }
        .list_right {
          margin-top: 10px;
          width: 100%;
          .one {
            display: flex;
            align-items: center;
            margin-bottom: 4px;
            .key {
              display: inline-block;
              font-size: 14px;
              font-family: PingFangSC-Medium;
              color: #ffffff;
              margin-right: 14px;
            }
            .value {
              font-family: PingFangSC-Regular;
              color: #777777;
            }
          }
          .cont {
            font-size: 16px;
            font-family: PingFangSC-Regular;
            color: #ffffff;
            margin-bottom: 17px;
          }
          .set {
            display: flex;
            align-items: center;
            span {
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              color: #9b9b9b;
              display: inline-block;
              margin-left: 5px;
            }
            .zan {
              display: flex;
              align-items: center;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              color: #9b9b9b;
              img {
                display: block;
                width: 16px;
                height: 16px;
                margin-right: 2px;
              }
            }
            .cai {
              display: block;
              width: 16px;
              height: 16px;
              margin-left: 30px;
              &.cai_co {
                transform: rotate(180deg);
              }
            }
            .reps_span {
              font-size: 14px;
              font-family: PingFangSC-Regular;
              color: #ffffff;
              display: inline-block;
              margin-left: 10px;
              &:hover {
                color: #3772ff;
              }
            }
          }
          .huifu {
            display: flex;
            align-items: center;
            margin-top: 22px;
            img {
              display: block;
              width: 40px;
              height: 40px;
              margin-right: 15px;
            }
            input {
              width: 100%;
              height: 48px;
              background: #2f2f2f;
              opacity: 1;
              border-radius: 10px;
              padding: 0 16px;
              color: #fff;
              border: none;
            }
            .reps {
              width: 77px;
              height: 40px;
              background: #3772ff;
              opacity: 1;
              border-radius: 20px;
              font-size: 14px;
              font-family: PingFangSC-Medium;
              line-height: 40px;
              text-align: center;
              margin-left: 30px;
              color: #ffffff;
            }
          }
          .bottom_show {
            display: flex;
            align-items: center;
            margin-top: 18px;
            img {
              display: block;
              width: 12px;
              height: 7px;
              margin-right: 11px;
            }
            span {
              font-size: 16px;
              font-family: PingFangSC-Regular;
              color: #3772ff;
            }
          }
        }
      }
    }
    .more {
      width: 114px;
      height: 42px;
      border: 1px solid #ffffff;
      border-radius: 22px;
      font-size: 16px;
      font-family: PingFangSC-Regular;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 80px 0 50px 0;
    }
  }
}
.arrowTransform {
  transition: 0.2s;
  transform-origin: center;
  transform: rotateZ(180deg);
}
.arrowTransformReturn {
  transition: 0.2s;
  transform-origin: center;
  transform: rotateZ(0deg);
}
</style>
