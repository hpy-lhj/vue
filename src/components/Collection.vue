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
              <div class="tite">
                <span class="left">我的藏品</span>
                <Search></Search>
                <!-- <div class="right">
                  <input type="text" placeholder="输入你想要搜索的" />
                  <img src="../assets/search.png" alt="" />
                </div> -->
              </div>
              <Menu
                @active_click="active_click"
                @price_change="price_change"
                @xl_change="xl_change"
              ></Menu>
              <div class="my_Collection" v-if="works_list.length > 0">
                <div class="list_cont">
                  <div
                    class="list"
                    v-for="(item, index) in works_list"
                    :key="index"
                  >
                    <div class="content">
                      <!-- 头部 -->
                      <div class="top_infot">
                        <div class="item_cont">
                          <!-- 创作者 -->
                          <el-tooltip
                            class="item"
                            effect="light"
                            placement="top-start"
                          >
                            <div slot="content">
                              <p v-if="item.product">
                                创作者：{{ item.product.creator.nickname }}
                              </p>
                            </div>
                            <img
                              class="tou_img"
                              v-if="item.product"
                              @click="$router.push('/personal_center?id=1')"
                              :src="ip + item.product.creator.avatar"
                              alt=""
                            />
                          </el-tooltip>
                          <!-- 拥有者 -->
                          <el-tooltip
                            class="item"
                            effect="light"
                            placement="right-start"
                          >
                            <div slot="content">
                              <p>拥有者：{{ item.owner.nickname }}</p>
                            </div>
                            <img
                              class="tou_img tou_imgs"
                              @click="$router.push('/personal_center?id=1')"
                              :src="ip + item.owner.avatar"
                              alt=""
                            />
                          </el-tooltip>
                        </div>

                        <div class="right_sc" @click="Collection(item)">
                          <img
                            v-if="item.favorite"
                            src="../assets/love_laby.png"
                            alt=""
                          />
                          <img v-else src="../assets/love_with.png" alt="" />
                          <span>{{ item.favorite_number }}</span>
                        </div>
                      </div>
                      <img
                        @click="infor_click(item)"
                        class="zp_img"
                        v-if="item.product"
                        :src="ip + item.product.resources[0].address"
                        alt=""
                      />
                      <p
                        v-if="item.product && item.collection"
                        class="type_sogin"
                      >
                        {{ item.collection.name }}-{{ item.product.name }}
                      </p>
                      <p class="price">
                        <span class="key">${{ item.price }}</span>
                        <button @click="purchase(item)" class="conmit">
                          Buy now
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 异常页 -->
              <div class="abnormal" v-else>
                <img src="../assets/undraw.png" alt="" />
                <p @click="$router.push('/market')" class="text">暂无NFT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <Purchasevue
      :types="types"
      :works="works"
      :centerDialogVisible="Share_show"
      @closeBindWarnStandard="Share_show = false"
    ></Purchasevue>
  </div>
</template>
<script>
import { get, post, del } from "../http/http";
import Menu from "../view/market/src/components/Menu.vue";
import Purchasevue from "./Purchasevue";
import Search from "./search";
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
      ip: "http://18.166.177.61:8080",
      types: false,
      Share_show: false,
      love_show: true,
      min_height: `${_clientH}px`,
      works_list: [],
      works: {},
      collection_id: "",
      order_type: "created_at",
      asc: "0",
      type: "",
    };
  },
  computed: {},
  components: {
    Menu,
    Purchasevue,
    Search,
  },
  watch: {
    dialogVisible(newV, oldV) {
      var body = document.getElementsByTagName("body")[0];
      if (newV) {
        body.style.overflow = "hidden";
        this.get_work();
      } else {
        body.style.overflow = "auto";
      }
    },
  },
  methods: {
    infor_click(item) {
      var body = document.getElementsByTagName("body")[0];
      body.style.overflow = "auto";
      this.$router.push(
        item.type == 0
          ? "/purchase_page?type=1&id=" + item.id
          : "/product_details?type=1&id=" + item.id
      );
    },
    purchase(item) {
      this.Share_show = true;
      this.works = item;
      this.types = false;
    },
    // 获取收藏列表
    get_work() {
      let data = {
        collection_id: this.collection_id,
        order_type: this.order_type,
        asc: this.asc,
        type: this.type,
        owner_id: this.$loginData.userId,
        status: 2,
      };
      get(this.$api.works.unit, data, true)
        .then((res) => {
          this.works_list = res.data.list;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 选择卡类型
    active_click(data) {
      this.type = data;
      this.get_work();
    },
    // 选择系列
    xl_change(data) {
      if (data == 0) {
        this.collection_id = "";
        this.get_work();
      } else {
        this.collection_id = data;
        this.get_work();
      }
    },
    // 选择正序倒叙
    price_change(data) {
      if (data == 0) {
        this.asc = "0";
        this.order_type = "";
      }
      if (data == 1) {
        this.asc = "1";
        this.order_type = "";
      }
      if (data == 2) {
        this.asc = "1";
        this.order_type = "price";
      }
      if (data == 3) {
        this.asc = "0";
        this.order_type = "price";
      }
      this.get_work();
    },
    Collection(item) {
      if (item.favorite) {
        this.q_zan(item);
      } else {
        this.d_zan(item);
      }
    },
    d_zan(item) {
      post(this.$api.works.favorite + item.id)
        .then((res) => {
          this.get_work();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    q_zan(item) {
      del(this.$api.works.favorite + item.id)
        .then((res) => {
          this.get_work();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted: async function () {
    // console.log(123123,this.$loginData)
  },
};
</script>
<style lang="scss" >
.coll {
  width: calc(100% - 297px);
  .dialogVisible {
    position: fixed;
    left: 0;
    width: calc(100% - 297px);
    margin-left: 297px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    background-color: #000;
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
        // background-color: rgba(0, 0, 0, 0.4);
        background-color: #000;
        position: relative;
        // filter: blur(20px);
        &:after {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background: inherit;
          // filter: blur(20px);
        }
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
          padding: 55px 42px 55px 42px;
          .tite {
            display: flex;
            align-items: center;
            .left {
              font-size: 50px;
              font-family: PingFangSC-Semibold;
              color: #ffffff;
            }
            .right {
              margin-left: 113px;
              width: 642px;
              height: 57px;
              background: #1d1d1d;
              opacity: 1;
              border-radius: 29px;
              display: flex;
              padding: 0 25px;
              align-items: center;
              input {
                background: #1d1d1d;
                border: none;
                font-size: 18px;
                font-family: PingFangSC-Regular;
                color: #aaaaaa;
                width: 100%;
              }
              img {
                display: block;
                width: 29px;
                height: 28px;
              }
            }
          }
          // 筛选 end
          .my_Collection {
            .list_cont {
              display: flex;
              align-items: center;
              // justify-content: space-between;
              flex-wrap: wrap;
              .list {
                width: 290px;
                background: #1d1d1d;
                border-radius: 24px;
                position: relative;
                margin: 0 20px 32px 0;
                // &:nth-child(5n + 5) {
                //   margin-right: 0;
                // }
                .content {
                  .top_infot {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 22px 20px 0 20px;
                    margin-bottom: 15px;
                    .item_cont {
                      display: flex;
                      align-items: center;
                      .tou_img {
                        display: block;
                        width: 36px;
                        height: 36px;
                      }
                      .tou_imgs {
                        position: relative;
                        z-index: 10;
                        left: -10px;
                      }
                    }

                    .right_sc {
                      width: 79px;
                      height: 30px;
                      border: 1px solid #ffffff;
                      border-radius: 20px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      &:hover {
                        border-color: #3772ff;
                      }
                      img {
                        display: block;
                        width: 15px;
                        height: 15px;
                        margin-right: 5px;
                      }
                      span {
                        font-size: 12px;
                        font-family: PingFangSC-Regular;
                        color: #ffffff;
                      }
                    }
                  }
                  .zp_img {
                    display: block;
                    width: 248px;
                    height: 248px;
                    border-radius: 20px;
                    margin: 0 auto 21px auto;
                    object-fit: cover;
                  }
                  .type_sogin {
                    padding-left: 20px;
                    font-size: 16px;
                    font-family: PingFangSC-Semibold;
                    color: #ffffff;
                    margin-bottom: 5px;
                  }
                  .price {
                    padding-left: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-family: PingFang SC;
                    font-weight: 500;
                    .key {
                      font-size: 20px;
                      font-family: PingFang SC;
                      color: #19fbc5;
                    }
                    .conmit {
                      width: 122px;
                      height: 52px;
                      background: linear-gradient(
                        270deg,
                        #ff40ae 0%,
                        #3772ff 100%
                      );
                      opacity: 1;
                      border-radius: 0px 0px 24px 0px;
                      font-size: 14px;
                      font-family: OPPOSans;
                      color: #ffffff;
                      border: none;
                    }
                  }
                }
              }
            }
          }
          // 异常页
          .abnormal {
            margin-top: 10%;
            img {
              display: block;
              margin: 0 auto 23px auto;
              width: 260px;
              height: 200px;
            }
            p {
              font-size: 14px;
              font-family: PingFangSC-Regular;
              line-height: 20px;
              color: #ffffff;
              text-align: center;
              span {
                color: #3772ff;
              }
            }
          }
        }
      }
    }
  }
}
</style>
