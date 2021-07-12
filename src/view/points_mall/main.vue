<template>
  <Main keys="/points_mall">
    <template>
      <div class="points_mall">
        <!-- 头部介绍 -->
        <img class="top_img" src="../../assets/jf_ding.png" alt="" />
        <div class="top_infor">
          <p class="tite">NFT🔥</p>
          <p class="tite">积分商城兑换</p>
          <div class="infor">
            <p>在这里可以兑换数量有限的NFT、开启初级盒子、兑换优惠券、</p>
            <p>发售新的NFT优先购买权、新的NFT兑换权</p>
          </div>
          <div class="nft_jf">
            <div class="cont">
              <p class="left">
                <span class="key">我的积分：</span>
                <span class="value">675</span>
              </p>
              <p @click="Share_show = true" class="right">积分记录</p>
            </div>
          </div>
          <div class="mao_list">
            <div class="list" @click="counter(1)">
              <p class="list_cont">兑换NFT</p>
            </div>
            <div class="list" @click="counter(2)">
              <p class="list_cont">兑换优惠券</p>
            </div>
            <div class="list" @click="counter(3)">
              <p class="list_cont">新的NFT</p>
            </div>
          </div>
        </div>
        <!-- 限时兑换 -->
        <div class="nft_cont" id="productId">
          <p class="tite">限时兑换NFT</p>
          <p class="infor">
            6.1号凌晨12点，积分满1000的用户可以兑换总量10套的元宇宙价值99.9的卡包
          </p>
          <div class="list_cont">
            <div class="nft_list" v-for="item in 4" :key="item">
              <div class="list">
                <div class="box" :class="{ box_show: box_show }">
                  <!-- 头部作者信息 -->
                  <div class="tit">
                    <div class="left">
                      <!-- <img src="../../assets/chuangzuotou.png" alt="" />
                      <span>创作者：元元</span> -->
                      <el-tooltip
                        class="item"
                        effect="light"
                        placement="top-start"
                      >
                        <div slot="content">
                          <p>创作者：元元</p>
                        </div>
                        <img
                          class="tou_img"
                          @click="
                            $router.push('/others_page?id=' + item.creator.id)
                          "
                          src="../../assets/chuangzuotou.png"
                          alt=""
                        />
                      </el-tooltip>
                    </div>
                    <div class="right">
                      <img src="../../assets/love_laby.png" alt="" />
                      <span>234</span>
                    </div>
                  </div>
                  <!-- 作品信息 -->
                  <div class="cont">
                    <img src="../../assets/ssr1.png" alt="" />
                  </div>
                  <!-- 介绍 -->
                  <p class="infor">卡牌合集类型1-元宇宙</p>
                  <!-- 金额 -->
                  <p class="priace">
                    <span>$103,0</span>
                    <button>兑换</button>
                  </p>
                </div>
              </div>
              <p class="list_bot">剩余数量：123/400</p>
            </div>
          </div>
        </div>
        <!-- 新的NFT -->
        <div class="nft_cont" id="productIds">
          <p class="tite">新的NFT</p>
          <div class="list_cont">
            <div class="nft_list" v-for="item in 4" :key="item">
              <div class="list new_list">
                <div class="box" :class="{ box_show: box_show }">
                  <!-- 头部作者信息 -->
                  <div class="tit">
                    <div class="left">
                      <el-tooltip
                        class="item"
                        effect="light"
                        placement="top-start"
                      >
                        <div slot="content">
                          <p>创作者：元元</p>
                        </div>
                        <img
                          class="tou_img"
                          @click="
                            $router.push('/others_page?id=' + item.creator.id)
                          "
                          src="../../assets/chuangzuotou.png"
                          alt=""
                        />
                      </el-tooltip>
                    </div>
                    <div class="right">
                      <img src="../../assets/love_laby.png" alt="" />
                      <span>234</span>
                    </div>
                  </div>
                  <!-- 作品信息 -->
                  <div class="cont">
                    <img src="../../assets/ssr1.png" alt="" />
                  </div>
                  <!-- 介绍 -->
                  <p class="infor">卡牌合集类型1-元宇宙</p>
                  <!-- 金额 -->
                  <p class="priace">
                    <span>$103,0</span>
                    <button>兑换</button>
                  </p>
                </div>
              </div>
              <p class="list_bot">剩余数量：123/400</p>
            </div>
          </div>
        </div>
        <!-- 兑换优惠券 -->
        <div class="exchange" id="productIdss">
          <p class="tite">兑换优惠券</p>
          <div class="exchange_cont">
            <div class="cont">
              <img class="left" src="../../assets/yhq.png" alt="" />
              <div class="right">
                <p class="tete">Maya优惠券</p>
                <p class="infor">优惠券可以在购买NFT时使用</p>
                <div class="bjq">
                  <span>数量:</span>
                  <div class="right">
                    <img
                      @click="nmber_bj(1)"
                      src="../../assets/bj_jian.png"
                      alt=""
                    />
                    <input type="text" v-model="nmber" />
                    <img
                      @click="nmber_bj(2)"
                      src="../../assets/bj_jia.png"
                      alt=""
                    />
                  </div>
                </div>
                <p class="nmber">积分：1000</p>
                <button class="dh_but">兑换</button>
              </div>
            </div>
          </div>
          <p class="absolot">Maya</p>
        </div>
      </div>
      <Mallsk
        :centerDialogVisible="Share_show"
        @closeBindWarnStandard="Share_show = false"
      ></Mallsk>
    </template>
  </Main>
</template>
<script>
import Main from "../../components/Main";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";
import Mallsk from "./src/components/Mallsk.vue";

export default {
  data() {
    return {
      Share_show: false,
      nmber: 0,
      box_show: false,
    };
  },
  watch: watch,
  methods: methods,
  computed: computed,
  components: {
    Main,
    Mallsk,
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
