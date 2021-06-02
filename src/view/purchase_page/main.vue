<template>
  <Main keys="/nimo" :menu_show_c="false">
    <template>
      <div :style="{ height: min_height }" class="purchase_page">
        <div class="purchase_page_cont">
          <!-- 头部 -->
          <div class="purchase_top">
            <p class="left">元宇宙_<span>SSR</span>卡牌系列</p>
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
              <img class="right_img" src="../../assets/close.png" alt="" />
            </div>
          </div>
          <!-- 内容 -->
          <div class="purchase_cont">
            <div class="purchase_left">
              <img class="picture" src="../../assets/nftzp.png" alt="" />
            </div>
            <div class="purchase_right">
              <div class="purchase_right_cont">
                <!--  -->
                <div class="cont_list">
                  <div class="list cont_list_left">
                    <p class="key">资产名称：</p>
                    <p class="value">
                      元宇宙<span style="color: #17fbc6">SSR</span>卡牌
                    </p>
                  </div>
                  <div class="list cont_list_right">
                    <p class="key">所属系列：</p>
                    <p class="values">元宇宙卡牌系列</p>
                  </div>
                </div>
                <!--  -->
                <div class="cont_list">
                  <div class="list cont_list_left">
                    <p class="key">ID：</p>
                    <p class="values">#194578934623</p>
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
                      <img src="../../assets/chuangzuotou.png" alt="" />
                      <span>Yuanyuan</span>
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
                    <p class="values">没有任何代币</p>
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
                    <p class="value">
                      <span class="price_span">1.8 ETH</span
                      ><span>$4,002.85</span>
                    </p>
                    <el-input v-if="false" v-model="price_value" placeholder="请输入价格"></el-input>
                  </div>
                  <div class="list cont_list_right">
                    <p class="key">数量：</p>
                    <p class="values">
                      <span style="color: #3772ff">345</span>/1000
                    </p>
                  </div>
                </div>
                <!-- but -->
                <el-button @click="share_show=true" class="pirce_gm" type="primary">BUY NOW</el-button>
                <el-button v-if="false" class="pirce_cs" type="primary">立即出售</el-button>
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
      min_height: `${_clientH}px`,
      price_value:"",
      share_show:false
    };
  },
  watch: watch,
  methods: methods,
  computed: computed,
  components: {
    Main,
    Share
  },
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route);
  },
};
</script>

<style lang="scss" >
@import "./sass/style.scss";
</style>
