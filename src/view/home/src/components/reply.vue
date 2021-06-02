<template>
  <div class="reply">
    <p class="tite">1条评论</p>
    <div class="replys">
      <div class="top_hf">
        <img src="../../../../assets/pl_tou.png" alt="" />
        <input placeholder="您可以发布您想说的..." type="text" />
        <button>发送</button>
      </div>
      <div class="repl_list">
        <img class="tou_img" src="../../../../assets/tou.png" alt="" />
        <div class="list_right">
          <p class="one">
            <span class="key">Fieda</span>
            <span class="value">36分钟前</span>
          </p>
          <p class="cont">
            我喜欢元元很久了，终于找到可以购买他的作品的地方了 冲
          </p>
          <div class="set">
            <div class="zan">
              <img src="../../../../assets/zan.png" alt="" />
              <span>136</span>
            </div>
            <img class="cai" src="../../../../assets/cai.png" alt="" />
            <span class="reps_span">回复</span>
          </div>
          <div class="huifu">
            <img src="../../../../assets/pl_tou.png" alt="" />
            <input placeholder="添加公开回复..." type="text" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    news_show: Boolean,
  },
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  mounted: async function () {},
};
</script>
<style lang="scss" scoped>
.reply {
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
      display: flex;
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
            margin: 0 30px;
          }
          .reps_span {
            font-size: 14px;
            font-family: PingFangSC-Regular;
            color: #ffffff;
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
            color: #FFF;
            border: none;
          }
        }
      }
    }
  }
}
</style>
