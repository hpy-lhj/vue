<template>
  <div class="mall">
    <el-dialog
      :before-close="handleCloseBindWarnStandard"
      title="积分记录"
      :visible.sync="centerDialogVisible"
      width="60%"
    >
      <div class="foll_list" v-for="(item, index) in 11" :key="index">
        <div class="foll_list_cont">
          <div class="left">
            <img src="../../../../assets/nftzp.png" alt="" />
          </div>
          <div class="right">
            <p class="tite">元元</p>
            <p class="infor">
              创建者 元元发布了《元宇宙》 <span>获得16积分</span>
            </p>
            <p class="time">1小时前</p>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { get, post } from "../../../../http/http";
export default {
  props: {
    centerDialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    let _clientH = document.documentElement.clientHeight;
    return {};
  },
  computed: {},
  watch: {
    centerDialogVisible(value) {},
  },
  methods: {
    handleCloseBindWarnStandard() {
      this.$emit("closeBindWarnStandard");
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" >
.mall {
  .el-dialog__wrapper {
    .el-dialog {
      margin: 15vh 0 0 500px !important;
      background: #242424;
      border-radius: 19px;
      .el-dialog__header {
        padding: 32px !important;
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
        padding: 0 32px !important;
        height: 700px !important;
        overflow: auto !important;
      }
      .foll_list {
        width: 100%;
        background: #1d1d1d;
        border-radius: 20px;
        margin-bottom: 20px;
        .foll_list_cont {
          padding: 25px;
          display: flex;
          align-items: center;
          .left {
            width: 100px;
            height: 100px;
            margin-right: 15px;
            img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 10px;
            }
          }
          .right {
            .tite {
              font-size: 24px;
              font-family: PingFangSC-Medium;
              color: #ffffff;
              opacity: 1;
            }
            .infor {
              font-size: 14px;
              font-family: PingFangSC-Regular;
              color: #ffffff;
              margin: 13px 0;
              span {
                display: inline-block;
                margin-left: 15px;
                color: #f37235;
                font-size: 14px;
              }
            }
            .time {
              font-size: 14px;
              font-family: PingFangSC-Regular;
              color: #aaaaaa;
            }
          }
        }
      }
    }
  }
}
</style>
