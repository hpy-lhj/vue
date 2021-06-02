<template>
  <div class="coll">
    <transition name="el-zoom-in-top">
      <div
        :style="{ height: min_height }"
        class="dialogVisible"
        :class="{
          coll_shows: !coll_show,
        }"
        v-show="dialogVisible"
      >
        <div class="dialogVisible_cont">
          <div class="Collection"></div>
          <div class="Collection_cont">
            <div class="Collection_cont_for">
              <p class="tite">我的藏品</p>
              <Menu :menu_status="menu_status"></Menu>
              <div class="my_Collection">
                <!-- 藏品列表 -->
                <div
                  class="Collection_list"
                  :class="{
                    Collection_list_show: !coll_show,
                  }"
                  v-for="item in 21"
                  :key="item"
                >
                  <div class="Collection_list_cont">
                    <!-- 头像，作者名 -->
                    <div class="img_value">
                      <img @click="$router.push('/personal_center?id=1')"  class="portrait" src="../assets/jon.png" alt="" />
                      <p class="name">创作者：元元</p>
                    </div>
                    <!-- 主图 -->
                    <img
                      class="picture"
                      src="../assets/nftzp.png"
                      alt=""
                      @click="$router.push('/purchase_page')" 
                    />
                    <!-- 信息 -->
                    <p class="infor">卡牌合集类型1-元宇宙</p>
                    <!--  价格，收藏 -->
                    <div class="Price">
                      <p class="left">
                        <span class="key">5.65 ETH</span>
                        <span class="value">($100,3)</span>
                      </p>
                      <div class="right">
                        <img src="../assets/love_laby.png" alt="" />
                        <span class="nmber">234</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Menu from "./Menu";
export default {
  props: {
    dialogVisible: Boolean,
    coll_show: {
      type: Boolean,
      default: true,
    },
  },

  data: function () {
    let _clientH = document.documentElement.clientHeight;
    return {
      min_height: `${_clientH}px`,
      // active: 0,
      menu_status: -1,
      series: "",
    };
  },
  computed: {},
  components: {
    Menu,
  },
  watch: {
    dialogVisible(newV, oldV) {
      var body = document.getElementsByTagName("body")[0];
      if (newV) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    },
  },
  methods: {
    moveHandle() {
      return;
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" >
.coll {
  width: calc(100% - 297px);
  .dialogVisible {
    position: absolute;
    left: 0;
    width: calc(100% - 297px);
    margin-left: 297px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 80;
    &.coll_shows {
      width: 100% !important;
      margin-left: 0 !important;
    }
    .dialogVisible_cont {
      height: calc(100% - 100px);
      margin-top: 100px;
      overflow: auto !important;
      position: relative;
      .Collection {
        height: 100%;
        filter: Alpha(Opacity=30);
        background-color: rgba(0, 0, 0, 0.4);
      }
      .Collection_cont {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        z-index: 999;
        .Collection_cont_for {
          padding: 55px 35px 55px 65px;
          .tite {
            font-size: 50px;
            font-family: PingFangSC-Semibold;
            color: #ffffff;
          }
          // 筛选 end
          .my_Collection {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            .Collection_list {
              width: 22.8%;
              background: #1d1d1d;
              border-radius: 24px;
              margin-bottom: 45px;
              &.Collection_list_show{
                width: 18% !important;
              }
              .Collection_list_cont {
                padding: 25px 25px 35px 25px;
                .img_value {
                  display: flex;
                  align-items: center;
                  margin-bottom: 14px;
                  .portrait {
                    display: block;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    margin-right: 14px;
                  }
                  .name {
                    font-size: 16px;
                    font-family: PingFangSC-Semibold;
                    color: #ffffff;
                  }
                }
                .picture {
                  width: 100%;
                  height: 211px;
                  display: block;
                  border-radius: 24px;
                  margin-bottom: 30px;
                }
                .infor {
                  font-size: 20px;
                  font-family: PingFangSC-Semibold;
                  color: #ffffff;
                  margin-bottom: 21px;
                }
                .Price {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  .left {
                    display: flex;
                    align-items: center;
                    .key {
                      font-size: 18px;
                      font-family: PingFang SC;
                      font-weight: 500;
                      color: #3772ff;
                      margin-right: 10px;
                    }
                    .value {
                      font-size: 18px;
                      font-family: PingFang SC;
                      font-weight: 500;
                      color: #fff;
                    }
                  }
                  .right {
                    width: 95px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #ffffff;
                    border-radius: 20px;
                    img {
                      display: block;
                      width: 18px;
                      height: 17px;
                      margin-right: 7px;
                    }
                    .nmber {
                      font-size: 16px;
                      font-family: PingFangSC-Regular;
                      color: #ffffff;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
