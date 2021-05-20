<template>
  <Main isActive="0">
    <template>
      <div class="min_home">
        <!-- 第一部分 -->
        <div class="one_top">
          <div class="one_top_left">
            <p class="tite">最好的市场,</p>
            <p class="tite">立即开始探索!</p>
            <p class="solgen">我们可以帮助您购买，出售和发现新的稀有数字产品</p>
            <span class="buton_com">立即了解</span>
          </div>
          <div class="one_top_right"></div>
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
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  watch: watch,
  methods: methods,
  computed: computed,
  components: {
    Main,
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
