<template>
  <Main keys="/nimo" :menu_show_c="false">
    <template>
      <div class="details">
        <div class="details_left">
          <img class="top_img" :src="right_list_img" alt="" />
          <!-- 作者介绍 -->
          <div class="z_infor">
            <div class="z_infor_cont">
              <p class="tite">作者介绍：</p>
              <div class="cont">
                <img class="cont_left" src="../../assets/tou.png" alt="" />
                <div class="cont_right">
                  <p class="key">creator</p>
                  <p class="value">Yuanyuan</p>
                </div>
              </div>
              <p class="bot_txt">
                This is Mani Token-Gold Edition. As the owner of this token, you
                contributed Mani Grupa. Each owner is our senior partner.We will
                use me from time to time.
              </p>
            </div>
          </div>
          <!-- 卡包内容 -->
          <div class="card_infor">
            <p class="tite">卡包内容</p>
            <div class="cont">
              <img class="top_img" src="../../assets/talor.png" alt="" />
              <div class="wf_infor">
                <div class="wf_infor_cont">
                  <p>总共6张卡牌</p>
                  <p>SSR概率：<span>30%</span></p>
                  <p>高级卡概率：<span>50%</span></p>
                  <p>普通卡概率：<span>50%</span></p>
                  <p>剩余卡包：<span>234/1000</span></p>
                </div>
              </div>
            </div>
          </div>
          <!-- 卡概率展示 -->
          <div class="card_list">
            <div class="list" v-for="(item, index) in card_list" :key="index">
              <p class="tile">
                {{ item.name }} <span>{{ item.nmber }}</span>
              </p>
              <div class="list_card">
                <img
                  v-for="(img, id) in item.img_list"
                  :key="id"
                  :src="img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 产品介绍 -->
        <div class="details_right">
          <div class="details_right_cont">
            <div class="tite_cont">
              <p class="left">{{ tite }}</p>
              <div class="right">
                <span>
                  <img src="../../assets/love_blue.png" alt="" />
                  34
                </span>
                <span>
                  <img src="../../assets/icony.png" alt="" />
                  34
                </span>
                <img
                  class="right_img"
                  src="../../assets/detals_fx.png"
                  alt=""
                />
              </div>
            </div>
            <p class="nmber_txt">总计{{ nmber }}</p>
            <p class="selct">选择卡包 :</p>
            <div class="card_llist">
              <div
                :class="{
                  active_list: index == active_index,
                }"
                class="list"
                @click="card_list_click(item, index)"
                v-for="(item, index) in right_list"
                :key="index"
              >
                <img :src="item.img" alt="" />
              </div>
            </div>
            <!-- 步进器 -->
            <div class="select_number">
              <span class="tite">选择数量：</span>
              <div class="stepping">
                <img
                  @click="stepping_click_jian()"
                  src="../../assets/bj_jian.png"
                  alt=""
                />
                <el-input type="nmber" v-model="stepping"></el-input>
                <img
                  @click="stepping_click_jia()"
                  src="../../assets/bj_jia.png"
                  alt=""
                />
              </div>
            </div>
            <div class="price_fix">
              <p class="left">
                <span class="key"> {{ price * stepping }} ETH </span>
                <span class="value"> $4,002.85 </span>
              </p>
              <p class="right">剩余{{ min_nmber }}</p>
            </div>
            <el-button @click="$router.push('/payment')" class="comit_price" type="primary" plain
              >
                <span>立即购买</span> </el-button
            >
          </div>

          <!-- 玩法介紹 -->
          <div class="Introduction">
            <div class="ction">
              <p class="tite">合集介绍</p>
              <p class="value">
                这是玛尼令牌-黄金版。作为此代币的所有者，您贡献了ManiGrupa。每个所
                有者都是我们的高级合作伙伴。我们会不时地使用我是我们的高级合作伙伴。
                我们会不时地阅读更多这是玛尼令牌-黄金版。
                作为此代币的所有者，您贡献了ManiGrupa。每个所有者都是我们的高级合作
                伙伴。我们会不时地使用我是我们的高级合作伙伴。我们会不时地阅读更多这
                是玛尼令牌-黄金版。
                作为此代币的所有者，您贡献了ManiGrupa。每个所有者都是我们的高级合作
                伙伴。我们会不时地使用我是我们的高级合作伙伴。我们会不时地阅读更多这
                是玛尼令牌-黄金版。
                作为此代币的所有者，您贡献了ManiGrupa。每个所有者都是我们的高级合作
                伙伴。我们会不时地使用我是我们的高级合作伙伴。我们会不时地。
              </p>
              <p class="tite">玩法介绍</p>
              <p class="value">
                这是玛尼令牌-黄金版。作为此代币的所有者，您贡献了ManiGrupa。每个所
                有者都是我们的高级合作伙伴。我们会不时地使用我是我们的高级合作伙伴。
                我们会不时地阅读更多这是玛尼令牌-黄金版。
                作为此代币的所有者，您贡献了ManiGrupa。每个所有者都是我们的高级合作
                伙伴。我们会不时地使用我是我们的高级合作伙伴。我们会不时地阅读更多这
                是玛尼令牌-黄金版。
                作为此代币的所有者，您贡献了ManiGrupa。每个所有者都是我们的高级合作
                伙伴。我们会不时地使用我是我们的高级合作伙伴。我们会不时地阅读更多这
                是玛尼令牌-黄金版。
                作为此代币的所有者，您贡献了ManiGrupa。每个所有者都是我们的高级合作
                伙伴。我们会不时地使用我是我们的高级合作伙伴。我们会不时地。
              </p>
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

export default {
  data() {
    let _clientH = document.documentElement.clientHeight;
    return {
      active_index: 0,
      stepping: 1,
      min_height: `${_clientH}px`,
      nmber: "",
      price: "",
      tite: "",
      min_nmber: "",
      right_list: [
        {
          name: "源计划（元宇宙)",
          max_nmber: 500,
          price: 1.8,
          img: require("../../assets/talor.png"),
        },
        {
          name: "NIMO 系列",
          max_nmber: 200,
          price: 2.4,
          img: require("../../assets/diaosu.png"),
        },
        {
          name: "NIMO 系列",
          max_nmber: 200,
          price: 3.6,
          img: require("../../assets/huahua.png"),
        },
      ],
      right_list_img: "",
      card_list: [
        {
          name: "普通卡概率：",
          nmber: "50%",
          img_list: [
            require("../../assets/huahua.png"),
            require("../../assets/mangseng.png"),
            require("../../assets/diaosu.png"),
          ],
        },
        {
          name: "高级卡概率：",
          nmber: "30%",
          img_list: [
            require("../../assets/kulou.png"),
            require("../../assets/shuma.png"),
            require("../../assets/miansha.png"),
          ],
        },
        {
          name: "SSR卡概率：",
          nmber: "20%",
          img_list: [
            require("../../assets/ssr1.png"),
            require("../../assets/ssr2.png"),
            require("../../assets/ssr3.png"),
          ],
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
    this.right_list_img = this.right_list[0].img;
    this.nmber = this.right_list[0].max_nmber;
    this.price = this.right_list[0].price;
    this.tite = this.right_list[0].name;
    this.min_nmber = this.right_list[0].max_nmber - 1;
  },
};
</script>

<style lang="scss" >
@import "./sass/style.scss";
</style>
