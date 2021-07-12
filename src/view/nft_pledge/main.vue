<template>
  <Main keys="/nft_pledge">
    <template>
      <div class="nft_pledge">
        <img class="top_zy_img" src="../../assets/top_zy.png" alt="" />
        <div class="top_nft">
          <p class="tite">NFT质押</p>
          <p class="slogen">NFT质押，你可以将NFT放入这里转化收益</p>
          <p class="nft_sy">
            总收益:MAYA <span>23,000</span> / 积分 <span>4213</span>
          </p>
          <!-- 兑换 -->
          <div class="count_max">
            <div class="nmber nmber_top">
              <div class="left">
                <span class="key">提取MAYA:</span>
                <div class="max_plc">
                  <input class="top_input" type="text" v-model="max_maya" />
                  <span class="value">MAX</span>
                </div>
              </div>
              <div class="right right_top">全部取出</div>
            </div>
            <div class="nmber">
              <div class="left">
                <span class="key">所获积分:</span>
                <input class="bot_input" type="text" v-model="max_maya" />
              </div>
              <div class="right right_bot">去兑换</div>
            </div>
          </div>
          <!-- 筛选 -->
          <Menu></Menu>
          <!-- 介绍 -->
          <div class="introduce">
            <div class="introduce_cont">
              <div class="list_cont cont_left">
                <p class="list">
                  <span class="key">总算力</span>
                  <span class="value">100000</span>
                </p>
                <p class="list">
                  <span class="key">总质押值</span>
                  <span class="value">46735</span>
                </p>
                <p class="list">
                  <span class="key">币的产出</span>
                  <span class="value">123114/小时</span>
                </p>
              </div>
              <div class="list_cont">
                <p class="list">
                  <span class="key">算力值</span>
                  <span style="color: #06e8a5" class="value">2346</span>
                </p>
                <p class="list">
                  <span class="key">已质押</span>
                  <span class="value">235</span>
                </p>
                <p class="list">
                  <span class="key">算力占比</span>
                  <span class="value">21%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 产品 -->
        <div class="product_cont">
          <div class="product" v-for="(item, index) in 30" :key="index">
            <div class="list">
              <p class="tite">算力值：312</p>
              <div class="cont">
                <img src="../../assets/maozi.png" alt="" />
              </div>
              <p class="type_xl">卡牌集合类型1-元宇宙</p>
              <el-button class="comit" type="primary">质押</el-button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Main>
</template>
<script>
import Main from "../../components/Main";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";
import Menu from "./src/components/Menu.vue";
export default {
  data() {
    return {
      max_maya: 0,
    };
  },
  watch: watch,
  methods: methods,
  computed: computed,
  components: {
    Main,
    Menu,
  },
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route);
  },
};
</script>

<style lang="scss"  scoped>
@import "./sass/style.scss";
</style>
