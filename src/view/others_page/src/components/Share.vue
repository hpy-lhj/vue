<template>
  <div class="sher">
    <el-dialog
      :before-close="handleCloseBindWarnStandard"
      title="分享此页面链接"
      :visible.sync="share_vis"
      :show-close="false"
      center
      width="23%"
    >
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
export default {
  props: {
    share_vis: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    let _clientH = document.documentElement.clientHeight;
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    handleCloseBindWarnStandard() {
      this.$emit("close");
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
        padding: 27px 0px 24px 0px !important;
        .el-dialog__title {
          font-size: 24px;
          font-family: PingFangSC-Medium;
          color: #ffffff;
        }
      }
      .el-dialog__body {
        padding: 0 44px 44px 44px !important;
      }
      .sher_cont {
        display: flex;
        align-content: center;
        justify-content: space-between;
        img {
          display: block;
          width: 50px;
          height: 50px;
          margin:0 auto 12px auto;
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
</style>
