<template>
  <div class="follow">
    <el-dialog
      :before-close="handleCloseBindWarnStandard"
      :title="centerDialogVisible_nmber == 5 ? '关注' : '粉丝'"
      :visible.sync="centerDialogVisible"
      width="23%"
    >
      <div class="foll_list" v-for="(item, index) in 11" :key="index">
        <div class="left">
          <div class="left_img">
            <img class="tou" src="../../../../assets/jon.png" alt="" />
            <img
              v-if="centerDialogVisible_nmber == 5"
              class="guanzhu"
              src="../../../../assets/chenggong.png"
              alt=""
            />
          </div>
          <div class="left_right">
            <p class="key">DGJHGF</p>
            <p class="value">2134粉丝</p>
          </div>
        </div>
        <el-button class="guanzhu" type="primary" round>关注</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    centerDialogVisible: {
      type: Boolean,
      default: false,
    },
    centerDialogVisible_nmber: {
      type: Number,
      default: 5,
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
      this.$emit("closeBindWarnStandard");
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" >
.follow {
  .el-dialog__wrapper {
    .el-dialog {
      margin-top: 20vh !important;
      background: #242424;
      border-radius: 19px;
      .el-dialog__header {
        padding: 29px 24px 0 24px !important;
        margin-bottom: 20px;
        .el-dialog__title {
          font-size: 35px;
          font-family: PingFang SC;
          font-weight: 600;
          color: #ffffff;
        }
        i {
          color: #fff;
          font-size: 30px;
        }
      }
      .el-dialog__body {
        padding: 0 35px 0 24px !important;
        height: 500px !important;
        overflow: auto !important;
      }
      .foll_list {
        margin-bottom: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          align-items: center;
          .left_img {
            margin-right: 15px;
            position: relative;
            .tou {
              display: block;
              width: 68px;
              height: 68px;
              border-radius: 50%;
            }
            .guanzhu {
              display: block;
              width: 22px;
              height: 22px;
              position: absolute;
              bottom: 0;
              right: 0;
            }
          }
          .left_right {
            .key {
              font-size: 18px;
              font-family: PingFangSC-Medium;
              color: #ffffff;
            }
            .value {
              margin-top: 5px;
              font-size: 18px;
              font-family: PingFang SC;
              font-weight: 400;
              color: #aaaaaa;
            }
          }
        }
        .guanzhu {
          width: 85px;
          height: 36px;
          background: #3772ff;
          border-radius: 18px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #ffffff;
          border: none;
        }
      }
    }
  }
}
</style>
