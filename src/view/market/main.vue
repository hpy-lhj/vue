<template>
  <Main keys="/market">
    <template>
      <div class="market">
        <div :style="{ height: min_height }" class="dialogVisible">
          <div class="Collection_cont_for">
            <p class="tite">市场</p>
            <Menu></Menu>
            <div class="my_Collection">
              <!-- 藏品列表 -->
              <div class="Collection_list" v-for="item in 21" :key="item">
                <div class="Collection_list_cont">
                  <!-- 头像，作者名 -->
                  <div class="img_value">
                    <img  @click="$router.push('/personal_center?id=1')" class="portrait" src="../../assets/jon.png" alt="" />
                    <p class="name">创作者：元元</p>
                  </div>
                  <!-- 主图 -->
                  <img
                   @click="$router.push('/product_details')"
                    class="picture"
                    src="../../assets/nftzp.png"
                    alt=""
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
                      <img src="../../assets/love_laby.png" alt="" />
                      <span class="nmber">234</span>
                    </div>
                  </div>
                </div>
              </div>
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
import Menu from "../../components/Menu";
export default {
  data() {
    let _clientH = document.documentElement.clientHeight;
    return {
      min_height: `${_clientH}px`,
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
