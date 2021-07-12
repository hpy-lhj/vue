<template>
  <Main keys="/nimo" :menu_show_c="false">
    <template>
      <div :style="{ height: min_height }" class="purchase_page">
        <div class="purchase_page_cont" v-if="infor_data.product">
          <p @click="$router.go(-1)" class="link">
            <i class="el-icon-arrow-left"></i>
            <span class="value">返回</span>
          </p>
          <!-- 头部 -->
          <div class="purchase_top">
            <p class="left">
              {{ infor_data.collection.name }}<span>SSR</span>
              {{ infor_data.product.name }}
            </p>
            <div class="right">
              <span>
                <img src="../../assets/love_blue.png" alt="" />
                34
              </span>
              <span>
                <img src="../../assets/icony.png" alt="" />
                34
              </span>
              <img class="right_img" src="../../assets/detals_fx.png" alt="" />
              <!-- <img
                @click="$router.go(-1)"
                class="right_img"
                src="../../assets/close.png"
                alt=""
              /> -->
            </div>
          </div>
          <!-- 内容 -->
          <div class="purchase_cont">
            <div class="purchase_left">
              <img
                class="picture"
                :src="ip + infor_data.product.resources[0].address"
                alt=""
              />
            </div>
            <div class="purchase_right">
              <div class="purchase_right_cont">
                <!--  -->
                <div class="cont_list">
                  <div class="list cont_list_left">
                    <p class="key">资产名称：</p>
                    <p class="value">
                      {{ infor_data.product.name
                      }}<span style="color: #17fbc6">SSR</span>卡牌
                    </p>
                  </div>
                  <div class="list cont_list_right">
                    <p class="key">所属系列：</p>
                    <p class="values">{{ infor_data.collection.name }}系列</p>
                  </div>
                </div>
                <!--  -->
                <div class="cont_list">
                  <div class="list cont_list_left">
                    <p class="key">ID：</p>
                    <p class="values">#{{ infor_data.id }}</p>
                  </div>
                  <div class="list cont_list_right">
                    <p class="key">等级名称：</p>
                    <p style="color: #17fbc6" class="values">SSR</p>
                  </div>
                </div>
                <!--  -->
                <div class="cont_list">
                  <div class="list cont_list_left">
                    <p class="key">所有者：</p>
                    <div class="infor">
                      <img :src="ip + infor_data.owner.avatar" alt="" />
                      <span>{{ infor_data.owner.nickname }}</span>
                    </div>
                  </div>
                  <div class="list cont_list_right">
                    <p class="key">等级编号：</p>
                    <p class="values">#52057</p>
                  </div>
                </div>
                <!--  -->
                <div class="cont_list">
                  <div class="list cont_list_left">
                    <p class="key">支持的代币：</p>
                    <p class="values">{{ infor_data.unit }}</p>
                  </div>
                  <div class="list cont_list_right">
                    <p class="key">特性：</p>
                    <p class="values">可转让</p>
                  </div>
                </div>
                <!--  -->
                <div class="cont_list">
                  <div class="list cont_list_left">
                    <p class="key">出售价格：</p>
                    <p v-if="!type" class="value">
                      <span>${{ infor_data.price }}</span>
                    </p>
                    <el-input
                      v-else
                      v-model="price_value"
                      placeholder="请输入价格"
                    ></el-input>
                  </div>
                  <div class="list cont_list_right">
                    <p class="key">数量：</p>
                    <p class="values">
                      <span style="color: #73f6c9">{{
                        infor_data.product.left
                      }}</span
                      >/{{ infor_data.product.count }}
                    </p>
                  </div>
                </div>
                <!-- but -->
                <el-button
                  v-if="!type"
                  @click="share_show = true"
                  class="pirce_gm"
                  type="primary"
                  >BUY NOW</el-button
                >
                <el-button v-else class="pirce_cs" type="primary"
                  >立即出售</el-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <Share :share_vis="share_show" @close="close_click()"></Share>
  </Main>
</template>
<script>
import Main from "../../components/Main";
import Upload from "../../components/Upload";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";
import Share from "./src/components/Share";
export default {
  data() {
    let _clientH = document.documentElement.clientHeight;
    return {
      ip: "http://18.166.177.61:8080",
      min_height: `${_clientH}px`,
      price_value: "",
      share_show: false,
      infor_data: {},
      type: this.$route.query.type,
    };
  },
  watch: watch,
  methods: methods,
  computed: computed,
  components: {
    Main,
    Share,
  },
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route);
    if (this.$route.query.diting) {
      this.er_work();
    } else {
      this.get_work();
    }
  },
};
</script>

<style lang="scss" >
@import "./sass/style.scss";
</style>
