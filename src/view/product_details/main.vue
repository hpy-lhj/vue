<template>
  <Main keys="/nimo" :menu_show_c="false">
    <template>
      <div class="details" v-if="infor_data.product">
        <p @click="$router.go(-1)" class="link">
          <i class="el-icon-arrow-left"></i>
          <span class="value">返回</span>
        </p>
        <div class="details_left">
          <img
            class="top_img"
            v-if="infor_data.product.resources"
            :src="ip + infor_data.product.resources[0].address"
            alt=""
          />
          <!-- 作者介绍 -->
          <div class="z_infor">
            <div class="z_infor_cont">
              <p class="tite">作者介绍：</p>
              <div class="cont">
                <img
                  class="cont_left"
                  :src="ip + infor_data.owner.avatar"
                  alt=""
                />
                <div class="cont_right">
                  <p class="key">creator</p>
                  <p class="value">{{ infor_data.owner.nickname }}</p>
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
              <img
                class="top_img"
                v-if="infor_data.product.resources"
                :src="ip + infor_data.product.resources[0].address"
                alt=""
              />
              <div class="wf_infor">
                <div class="wf_infor_cont">
                  <p>总共6张卡牌</p>
                  <p>SSR概率：<span>30%</span></p>
                  <p>高级卡概率：<span>50%</span></p>
                  <p>普通卡概率：<span>50%</span></p>
                  <p>
                    剩余卡包：<span
                      >{{ infor_data.product.count }}/{{
                        infor_data.product.left
                      }}</span
                    >
                  </p>
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
                  v-if="item.resources"
                  v-for="(img, id) in item.img_list"
                  :key="id"
                  :src="ip + img.resources[0].address"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 产品介绍 -->
        <div class="details_right">
          <div class="details_right_cont">
            <div class="gm_cont">
              <div class="tite_cont">
                <p class="left">
                  {{ infor_data.collection.name + infor_data.product.name }}
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
                  <img
                    class="right_img"
                    src="../../assets/detals_fx.png"
                    alt=""
                  />
                </div>
              </div>
              <p class="nmber_txt">总计{{ infor_data.product.count }}</p>
              <p class="shoujia">售价：</p>
              <!-- <p class="selct">选择卡包 :</p>
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
            </div> -->
              <!-- 步进器 -->
              <!-- <div class="select_number">
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
            </div> -->
              <div class="price_fix">
                <p class="left">
                  <span class="key"> $ {{ infor_data.price }}</span>
                  <!-- <span class="value"> $4,002.85 </span> -->
                </p>
                <p class="right">剩余{{ infor_data.product.left }}</p>
              </div>
              <el-button
                v-if="!type"
                @click="$router.push('/payment')"
                class="comit_price"
                type="primary"
                plain
              >
                <span>立即购买</span>
              </el-button>
              <el-button
                v-if="type"
                class="comit_price comit_kq"
                type="primary"
                plain
              >
                <span>立即开启</span>
              </el-button>
            </div>
          </div>
          <!-- 出售 -->
          <div class="cs_price" v-if="type">
            <div class="cs_price_cont">
              <p class="tite">出售价格：</p>
              <div class="but_int">
                <input
                  v-model="cs_value"
                  type="text"
                  placeholder="请出入出售价格"
                />
                <button>立即出售</button>
              </div>
            </div>
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
      ip: "http://18.166.177.61:8080",
      active_index: 0,
      // stepping: 1,
      min_height: `${_clientH}px`,
      nmber: 500,
      price: "4003,00",
      tite: "源计划（源宇宙）",
      min_nmber: 399,
      cs_value: "",
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
      ip: "http://18.166.177.61:8080",
      infor_data: {},
      type: this.$route.query.type,
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
