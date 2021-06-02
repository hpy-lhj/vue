<template>
  <div class="payment" :style="{ height: min_height }">
    <img class="left_img" src="../../assets/prit_left.png" alt="" />
    <div class="payment_right">
      <div class="payment_right_cont">
        <p @click="$router.go(-1)" class="link">
          <i class="el-icon-arrow-left"></i>
          <span class="value">返回</span>
        </p>
        <p class="type_tite">选择您的付款方式</p>
        <p class="tishi">与可用的钱包提供商之一联系或创建一个新的钱包</p>
        <div class="payment_type">
          <div
            @click="payment_type(item, index)"
            class="list"
            :class="{
              list_active: index == active_index,
            }"
            v-for="(item, index) in payment_list"
            :key="index"
          >
            <img v-if="item.img" :src="item.img" alt="" />
            <span>{{ item.name }}</span>
          </div>
        </div>
        <p class="type_tite">选择您的优惠券</p>
        <div
        @click="discount=!discount"
          class="discount"
          :class="{
            discount_active: discount,
          }"
        >
          <img src="../../assets/youhui.png" alt="" />
          <span>是否要使用9.5折优惠券</span>
        </div>
        <p class="type_tite">总金额：0.78 ETH</p>
         <el-button class="paymen_but" type="primary" round>立即支付</el-button>
          <p class="bot_tishi">我们没有您的私人密钥，没有您的确认，我们无法动用您的资金</p>
      </div>
    </div>
  </div>
</template>
<script>
import Main from "../../components/Main";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";

export default {
  data() {
    let _clientH = document.documentElement.clientHeight;
    return {
      discount:false,
      min_height: `${_clientH}px`,
      active_index: 0,
      payment_list: [
        {
          img: require("../../assets/weitu.png"),
          name: "BNB 支付",
        },
        {
          img: require("../../assets/weitu1.png"),
          name: "ETH 支付",
        },
        {
          img: "",
          name: "稳定币支付",
        },
        {
          img: "",
          name: "信用卡支付",
        },
      ],
    };
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
