<template>
  <div class="sher">
    <el-dialog
      :before-close="handleCloseBindWarnStandard"
      :visible.sync="share_vis"
      center
      width="23%"
    >
      <p class="tite">
        您已从<span>元元</span>成功购买了<span>元宇宙SSR卡牌</span>
      </p>
      <img class="price_tu" src="../../../../assets/nftzp.png" alt="" />
      <p class="slogen">让我们炫耀一下</p>
      <div class="copy_url">
        <p>{{ message }}</p>
        <img
          :data-clipboard-text="message"
          class="copy_btn"
          @click="copy"
          src="../../../../assets/copy_url.png"
          alt=""
        />
      </div>
      <div class="sher_cont">
        <div>
          <img src="../../../../assets/pcent_fx_1.png" alt="" />
          <p>Twitter</p>
        </div>
        <div>
          <img src="../../../../assets/pcent_fx_2.png" alt="" />
          <p>Facebook</p>
        </div>
        <div>
          <img src="../../../../assets/pcent_fx_3.png" alt="" />
          <p>Telegram</p>
        </div>
        <div>
          <img src="../../../../assets/pcent_fx_4.png" alt="" />
          <p>E-mail</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import Clipboard from "clipboard";
export default {
  props: {
    share_vis: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    let _clientH = document.documentElement.clientHeight;
    return {
      message: "https://rarible.com/token/0xd07…",
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleCloseBindWarnStandard() {
      this.$emit("close");
    },
    copy() {
      var clipboard = new Clipboard(".copy_btn");
      clipboard.on("success", (e) => {
        const h = this.$createElement;
        this.$notify({
          title: "提示",
          message: h(
            "i",
            { style: "color: #fff" },
            "地址复制成功，快去分享吧"
          ),
        });
        // 释放内存
        clipboard.destroy();
      });

      clipboard.on("error", (e) => {
        // 不支持复制
        this.$notify({
          title: "提示",
          message: h(
            "i",
            { style: "color: #fff" },
            "复制失败，该浏览器禁止复制"
          ),
        });
        // 释放内存
        clipboard.destroy();
      });
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" >
.sher {
  .el-dialog__wrapper {
    display: flex;
    align-items: center;
    .el-dialog {
      margin-top: 0 !important;
      background: #242424;
      border-radius: 19px;
      .el-dialog__header {
        i {
          color: #fff;
          font-size: 25px;
        }
      }
      .el-dialog__body {
        padding: 0 40px 40px 40px !important;
      }
      .tite {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #aaa;
        text-align: center;
        margin: 10px 0 50px 0;
        span {
          font-size: 16px;
          color: #fff;
        }
      }
      .price_tu {
        display: block;
        width: 236px;
        height: 236px;
        border-radius: 15px;
        margin: 0 auto 21px auto;
      }
      .slogen {
        font-size: 24px;
        font-family: PingFangSC-Medium;
        color: #ffffff;
        text-align: center;
        margin-bottom: 20px;
      }
      .copy_url {
        padding: 10px 25px;
        display: flex;
        align-items: center;
        background: #2f2f2f;
        border-radius: 10px;
        margin-bottom: 26px;
        p {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: #aaaaaa;
          width: 100%;
        }
        img {
          display: block;
          width: 17px;
          height: 17px;
        }
      }
      .sher_cont {
        display: flex;
        align-content: center;
        justify-content: space-between;
        padding: 0 30px;
        img {
          display: block;
          width: 50px;
          height: 50px;
          margin: 0 auto 12px auto;
        }
        p {
          font-size: 14px;
          font-family: PingFangSC-Regular;
          color: #6f6f6f;
          opacity: 1;
        }
      }
    }
  }
}
.el-notification {
  background: #242424 !important;
  border-radius: 19px !important;
  border: none !important;
  .el-notification__title{
    color: #fff;
    font-size: 22px;
  }
}
</style>
