<template>
  <div class="purchas">
    <el-dialog
      :before-close="handleCloseBindWarnStandard"
      :title="types ? '购买' : '出售'"
      :visible.sync="centerDialogVisible"
      width="55%"
    >
      <div class="foll_list" v-if="works.name">
        <div class="left">
          <img v-if="works.resources" :src="ip + works.resources[0].address" alt="" />
        </div>
        <div class="right">
          <div class="list">
            <p class="key">资产名称:</p>
            <p class="value">
              {{ works.name }}<span style="color: #17fbc6">SSR</span>卡牌
            </p>
          </div>
          <div class="list">
            <p class="key">所属系列:</p>
            <p v-if="works.collection" class="value">{{ works.collection.name }}</p>
          </div>
          <div class="list">
            <p class="key">ID:</p>
            <p class="value">#{{ works.id }}</p>
          </div>
          <div class="list">
            <p class="key">等级:</p>
            <p class="value" style="color: #17fbc6">SSR</p>
          </div>
          <div class="list">
            <p class="key">等级编号:</p>
            <p class="value">#52057</p>
          </div>
          <div class="list">
            <p class="key">数量:</p>
            <p class="value">
              <span style="color: #3772ff">{{ works.left }}</span
              >/{{ works.count }}
            </p>
          </div>
          <div class="list">
            <p class="key">持有者:</p>
            <p class="value">
              <img :src="ip + works.creator.avatar" alt="" />
              {{ works.creator.nickname }}
            </p>
          </div>
          <div class="lsit_price">
            <p class="key">价格:</p>
            <p v-if="types" class="value">${{ works.price }}</p>
            <input
              v-else
              type="text"
              v-model="price_sc"
              placeholder="请出入出售价格"
            />
          </div>
          <button v-if="types" class="but_cont goumai">BUY NOW</button>
          <button v-else class="but_cont">BUY NOW</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
// import { get, post } from "../../../../http/http";
export default {
  props: {
    centerDialogVisible: {
      type: Boolean,
      default: false,
    },
    types: {
      type: Boolean,
      default: true,
    },
    works: {
      type: Object,
    },
    label: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    let _clientH = document.documentElement.clientHeight;
    return {
      price_sc: "",
      ip: "http://18.166.177.61:8080",
    };
  },
  computed: {},
  watch: {
    centerDialogVisible(value) {},
    label(value) {},
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
.purchas {
  .el-dialog__wrapper {
    .el-dialog {
      margin: 10vh 0 0 500px !important;
      background: #242424;
      border-radius: 19px;
      .el-dialog__header {
        padding: 50px 0 76px 0 !important;
        text-align: center;
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
        padding: 0 74px 65px 74px !important;
        overflow: auto !important;
      }
      .foll_list {
        width: 100%;
        display: flex;
        .left {
          width: 356px;
          height: 356px;
          margin-right: 91px;
          img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 20px;
            object-fit: cover;
          }
        }
        .right {
          .lsit_price {
            display: flex;
            align-items: center;
            margin: 52px 0 33px 0;
            .key {
              display: inline-block;
              font-size: 20px;
              font-family: PingFang SC;
              color: hsl(0, 0%, 100%);
              width: 180px;
            }
            .value {
              font-size: 35px;
              font-family: PingFangSC-Semibold;
              color: #17fbc6;
            }
            input {
              width: 243px;
              height: 60px;
              background: #2f2f2f;
              opacity: 1;
              border-radius: 10px;
              padding: 0 16px;
              border: 0;
              color: #fff;
              font-size: 16px;
            }
          }
          .goumai {
            background: #3772ff !important;
          }
          .but_cont {
            width: 349px;
            height: 55px;
            background: linear-gradient(90deg, #ea3135 0%, #ae25fe 100%);
            opacity: 1;
            border-radius: 10px;
            border: none;
            font-size: 16px;
            font-family: PingFangSC-Medium;
            color: #ffffff;
            text-align: center;
            line-height: 55px;
          }
          .list {
            margin-bottom: 15px;
            display: flex;
            .key {
              display: inline-block;
              font-size: 20px;
              font-family: PingFang SC;
              color: hsl(0, 0%, 100%);
              width: 180px;
            }
            .value {
              font-size: 20px;
              font-family: PingFang SC;
              color: #ffffff;
              display: flex;
              align-items: center;
              span {
                font-size: 20px;
                color: #ffffff;
              }
              p {
                font-size: 20px;
                color: #ffffff;
                span {
                  font-size: 20px;
                  color: #ffffff;
                }
              }
              img {
                display: inline-block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 26px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
