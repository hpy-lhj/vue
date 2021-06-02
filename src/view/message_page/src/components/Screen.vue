<template>
  <div class="Screen">
    <!-- 筛选 -->
    <p class="tite">
      <span class="key">筛选器</span>
      <span class="value" @click="reset">重置筛选器</span>
    </p>
    <div class="Screen_list">
      <div class="screed_cont">
        <p
          :class="{
            chuangjian_show: chuangjian_show,
          }"
          class="tag"
          @click="chuangjian_show = !chuangjian_show"
        >
          <img src="../../../../assets/chuangjian.png" alt="" />
          创建
        </p>
        <p
          :class="{
            mairu_show: mairu_show,
          }"
          class="tag"
          @click="mairu_show = !mairu_show"
        >
          <img src="../../../../assets/mairu.png" alt="" />
          买入
        </p>
        <p
          :class="{
            maichu_show: maichu_show,
          }"
          class="tag"
          @click="maichu_show = !maichu_show"
        >
          <img src="../../../../assets/maichu.png" alt="" />
          卖出
        </p>
      </div>
      <div class="screed_cont">
        <p
          :class="{
            love_show: love_show,
          }"
          class="tag"
          @click="love_show = !love_show"
        >
          <img src="../../../../assets/love_with.png" alt="" />
          喜欢
        </p>
        <p
          :class="{
            guanzhu_show: guanzhu_show,
          }"
          class="tag"
          @click="guanzhu_show = !guanzhu_show"
        >
          <img src="../../../../assets/dui.png" alt="" />
          关注
        </p>
        <p
          :class="{
            shoucang_show: shoucang_show,
          }"
          class="tag"
          @click="shoucang_show = !shoucang_show"
        >
          <img src="../../../../assets/xing.png" alt="" />
          收藏
        </p>
      </div>
      <div class="screed_cont">
        <p
          :class="{
            zhuanzhang_show: zhuanzhang_show,
          }"
          class="tag"
          @click="zhuanzhang_show = !zhuanzhang_show"
        >
          <img src="../../../../assets/zhuanzhang.png" alt="" />
          转账
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data: function () {
    let _clientH = document.documentElement.clientHeight;
    return {
      chuangjian_show: false,
      mairu_show: false,
      maichu_show: false,
      love_show: false,
      guanzhu_show: false,
      shoucang_show: false,
      zhuanzhang_show: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    reset() {
      this.chuangjian_show = false;
      this.mairu_show = false;
      this.maichu_show = false;
      this.love_show = false;
      this.guanzhu_show = false;
      this.shoucang_show = false;
      this.zhuanzhang_show = false;
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss">
.Screen {
  margin: -75px 0 0 75px;
  .tite {
    .key {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #ffffff;
      display: inline-block;
      margin-right: 14px;
    }
    .value {
      font-size: 14px;
      font-family: Ping90px90Fang SC;
      font-weight: 500;
      color: #3772ff;
    }
  }
  .Screen_list {
    margin-top: 19px;
    .screed_cont {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      .tag {
        padding: 10px 17px;
        border: 1px solid #707070;
        border-radius: 30px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #ffffff;
        display: flex;
        align-items: center;
        margin-right: 30px;
        &.chuangjian_show {
          border-color: #0093ff;
          background-color: #0093ff;
        }
        &.mairu_show {
          border-color: #ffc400;
          background-color: #ffc400;
        }
        &.maichu_show {
          border-color: #a725ff;
          background-color: #a725ff;
        }
        &.love_show {
          border-color: #ff0b80;
          background-color: #ff0b80;
        }
        &.shoucang_show {
          border-color: #4663e2;
          background-color: #4663e2;
        }
        &.guanzhu_show {
          border-color: #3fdbab;
          background-color: #3fdbab;
        }
        &.zhuanzhang_show {
          border-color: #64b687;
          background-color: #64b687;
        }
        img {
          display: block;
          margin-right: 5px;
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>
