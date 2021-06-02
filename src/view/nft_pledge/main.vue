<template>
  <Main keys="/nft_pledge">
    <template>
      <div class="nft_pledge">NFT质押</div>
    </template>
  </Main>
</template>
<script>
import Main from "../../components/Main";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";

export default {
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
