<template>
  <div class="main">
    <transition name="el-zoom-in-top">
      <div class="dialogVisible" v-show="dialogVisible">
        <div class="Collection">
          <div class="Collection_cont">
            <p class="tite">我的藏品</p>
            <div class="my_Collection">
              <div v-for="item in 4" class="Collection_list">
                <!-- 藏品图 -->
                <div class="img_cont">
                  <img
                    class="Collection_img"
                    src="https://t7.baidu.com/it/u=12598879,3650988937&fm=193&f=GIF"
                    alt=""
                  />
                </div>
                <!-- 信息 -->
                <div class="coll_infor">
                  <div class="coll_infor_left">
                    <img
                      src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3939608619,1895959066&fm=11&gp=0.jpg"
                      alt=""
                    />
                    <div class="key_value">
                      <p class="top">源计划 (宇宙)</p>
                      <p class="bot">元元</p>
                    </div>
                  </div>
                  <div class="coll_infor_right">
                    <p class="top">9.9 EHT</p>
                    <p class="bot">345/1000</p>
                  </div>
                </div>
                <!-- 咨询信息 -->
                <div class="coll_infor_botom">
                  <span class="left">🔥 本周热门</span>
                  <span class="right">345</span>
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
export default {
  props: {
    dialogVisible: Boolean,
  },
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  mounted: async function () {
    console.log(this.hight_cl);
  },
};
</script>
<style lang="scss"  scoped>
.dialogVisible {
  position: absolute;
  left: 0;
  top: 103px;
  width: 100%;
  height: 980px;
  background-color: rgba(0, 0, 0, 0.5);
  .Collection {
    background: #ffffff;
    padding: 35px 240px 70px 240px;
    .Collection_cont {
      .tite {
        font-size: 36px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        margin-bottom: 40px;
      }
      .my_Collection {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        .Collection_list {
          width: 22.8%;
          .img_cont {
            width: 100%;
            box-shadow: 1px 2px 11px 0px rgba(185, 185, 185, 0.5);
            border-radius: 14px;
            .Collection_img {
              width: 100%;
              height: 390px;
              box-shadow: 1px 2px 11px 0px rgba(185, 185, 185, 0.5);
              border-radius: 14px;
            }
          }
          .coll_infor {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 24px 0 16px 0;
            border-bottom: 1px solid #e6e6e6;
            .coll_infor_left {
              display: flex;
              align-content: center;
              img {
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 12px;
              }
              .key_value {
                .top {
                  font-size: 20px;
                  font-family: PingFangSC-Medium, PingFang SC;
                  font-weight: 500;
                  color: #333333;
                }
                .bot {
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #333333;
                }
              }
            }
            .coll_infor_right {
              text-align: right;
              .top {
                font-size: 15px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #3772ff;
              }
              .bot {
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #aaaaaa;
              }
            }
          }
          .coll_infor_botom {
            margin-top: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left {
              font-size: 14px;
              font-family: AppleColorEmoji;
              color: #333333;
            }
            .right {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #aaaaaa;
            }
          }
        }
      }
    }
  }
}
</style>
