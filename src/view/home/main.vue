<template>
  <Main
    :keys="
      $route.query.id == 1
        ? '/universe'
        : $route.query.id == 2
        ? '/nimo'
        : $route.query.id == 3
        ? '/blind_box'
        : '/'
    "
  >
    <template>
      <div class="min_home">
        <!-- 视频部分 -->
        <div class="move_top">
          <div class="move_top_cont">
            <div class="infor_cont">
              <!-- 文字区 -->
              <div class="text_top">
                <p class="tite">Meta universe</p>
                <p class="soleng">
                  This is Mani Token-Gold Edition. As the owner of this token,
                </p>
                <p class="soleng">you contributed Mani Grupa.</p>
                <p class="soleng">
                  Each owner is our senior partner.We will use me from time to
                  time.
                </p>
                <p class="soleng soleng_bot">
                  This is Mani Token-Gold Edition.
                </p>
              </div>
              <!-- 个人信息分享区 -->
              <div class="bot_infor">
                <!-- 作者信息 -->
                <div class="inm_infor">
                  <img
                    @click="transfer"
                    class="left"
                    :src="user_recommend_obj.avatar"
                    alt=""
                  />
                  <div class="right">
                    <p class="top">creator</p>
                    <p class="bot">{{ user_recommend_obj.nickname }}</p>
                  </div>
                </div>
                <!-- 作者 平台 -->
                <div class="infor_platform">
                  <span>social media：</span>
                  <img src="../../assets/sinner.png" alt="" />
                  <img src="../../assets/tter.png" alt="" />
                </div>
                <!-- 作者介绍信息 -->
                <div class="author_infor">
                  <p>{{ user_recommend_obj.introduction }}</p>
                  <!-- <p>
                    This is Mani Token-Gold Edition. As the owner of this token,
                    you contributed Mani Grupa.
                  </p>
                  <p>
                    Each owner is our senior partner.We will use me from time to
                    time.
                  </p> -->
                </div>
                <!-- 分享 -->
                <div class="author_fx">
                  <p>
                    <img src="../../assets/love_laby.png" alt="" />
                    <span>234</span>
                  </p>
                  <p>
                    <i class="el-icon-star-on"></i>
                    <span>234</span>
                  </p>
                  <img
                    @click="Share_shows = true"
                    class="fx_img"
                    src="../../assets/fenxiang.png"
                    alt=""
                  />
                </div>
              </div>
              <img class="bf_but" src="../../assets/auth_fang.png" alt="" />
              <div class="lin_text">
                <div class="left"></div>
                <span>NFT</span>
              </div>
              <!-- 轮播区域 -->
              <div class="spwapers">
                <div class="top xz" @click="slide">
                  <img src="../../assets/uax_qh.png" alt="" />
                </div>
                <slider ref="slider" :options="sliderinit">
                  <slideritem
                    v-for="(item, index) in someList"
                    :key="index"
                    :style="item.style"
                  >
                    <img class="slid_img" :src="ip + item.img" alt="" />
                  </slideritem>
                </slider>
                <div class="top" @click="slideNext">
                  <img src="../../assets/uax_qh.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 作品区域 -->
        <div class="works">
          <p class="tite">Former universe NFTS</p>
          <div class="list_cont">
            <div class="list" v-for="(item, index) in works_list" :key="index">
              <div class="content">
                <!-- 头部 -->
                <div class="top_infot">
                  <el-tooltip class="item" effect="light" placement="top-start">
                    <div slot="content">
                      <p>创作者：{{ item.creator.nickname }}</p>
                    </div>
                    <img
                      class="tou_img"
                      @click="
                        $router.push('/others_page?id=' + item.creator.id)
                      "
                      :src="ip + item.creator.avatar"
                      alt=""
                    />
                  </el-tooltip>
                  <div class="right_sc" @click="love_show = !love_show">
                    <img
                      v-if="love_show"
                      src="../../assets/love_laby.png"
                      alt=""
                    />
                    <img v-else src="../../assets/love_with.png" alt="" />
                    <span>234</span>
                  </div>
                </div>
                <div class="zp_img_cont">
                  <img
                    @click="
                      $router.push('/product_details?diting=1&id=' + item.id)
                    "
                    class="zp_img"
                    v-if="item.resources"
                    :src="ip + item.resources[0].address"
                    alt=""
                  />
                  <div class="list_box">
                    <div class="box">共6张SSR/3张（30%几率获得）</div>
                  </div>
                </div>

                <p class="type_sogin">
                  {{ item.collection.name + "_" + item.name }}
                </p>
                <p class="price">
                  <span class="key">${{ item.price }}</span>
                  <button @click="purchase(item)" class="conmit">
                    Buy now
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 集齐卡牌 -->
        <div class="Illustrated">
          <p class="tite">Illustrated Book</p>
          <div class="Illustrated_card">
            <!-- 卡牌数据 -->
            <div
              class="cord_list"
              v-for="(item, index) in Illustrated_list"
              :key="index"
            >
              <img class="tite_img" :src="item.tite_img" alt="" />
              <div class="cord_list_cont">
                <!-- <img
                  @click="uap_clack(index)"
                  v-if="item.list.length > 5"
                  class="aup_img"
                  :class="{
                    aup_imgarrow: item.length_nmber == 6,
                    aup_imgarrowReturn: item.length_nmber > 6,
                  }"
                  src="../../assets/aup.png"
                  alt=""
                /> -->
                <div class="card" v-for="(card, id) in item.list" :key="id">
                  <div>
                    <div class="mask" v-if="card.left == 0"></div>
                    <img
                      v-if="card.resources"
                      :src="ip + card.resources[0].address"
                      alt=""
                    />
                    <p class="nmber" v-if="card.left > 0">
                      剩余数量：<span>{{ card.left }}</span
                      ><span>/</span><span>{{ card.count }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 评论回复 -->
        <div class="reply_cont">
          <Reply :user_id="user_id"></Reply>
        </div>
      </div>
    </template>
    <Share :share_vis="Share_shows" @close="close_click"></Share>
    <Purchasevue
      :types="types"
      :works="works_pur"
      :label="label"
      :centerDialogVisible="Share_show"
      @closeBindWarnStandard="Share_show = false"
    ></Purchasevue>
  </Main>
</template>
<script>
import Main from "../../components/Main";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";
import Reply from "./src/components/reply";
import Share from "./src/components/Share";
import { slider, slideritem } from "vue-concise-slider";
import Web3 from "../../libs/getWeb3";
import Purchasevue from "./src/components/Purchasevue";
export default {
  name: "HelloWorld",
  data() {
    return {
      ip: "http://18.166.177.61:8080",
      types: false,
      Share_shows: false,
      love_show: true,
      Share_show: false,
      ip: "http://18.166.177.61:8080",
      user_id: "",
      img_list: [
        require("../../assets/xlimg.png"),
        require("../../assets/taylor.png"),
        require("../../assets/unsplash.png"),
        require("../../assets/taylor.png"),
        require("../../assets/unsplash.png"),
      ],
      user_recommend_obj: {},
      works_list: [],
      works_pur: {},
      label: true,
      someList: [
        {
          img: require("../../assets/kulou.png"),
          style: {
            width: "100%",
            height: "45%",
            padding: "0 0 30px 0",
          },
        },
        {
          img: require("../../assets/xlimg.png"),
          style: {
            width: "100%",
            height: "45%",
            padding: "0 0 30px 0",
          },
        },
        {
          img: require("../../assets/nftzp.png"),
          style: {
            width: "100%",
            height: "45%",
            padding: "0 0 30px 0",
          },
        },
      ],
      sliderinit: {
        currentPage: 0, //第几页开始
        thresholdDistance: "100", //在滑动期间触发滑动到下一张/上一张幻灯片的最小距离（以像素为单位）
        thresholdTime: 1000, //在滑动期间触发滑动到下一张/上一张幻灯片的最低速度（以毫秒为单位）
        autoplay: 2000, //转换之间的延迟（以毫秒为单位）。
        loop: true, // 是否循环播放
        loopedSlides: 2,
        speed: 2000, // 滑动时间
        direction: "vertical", // 滑动方向
        pagination: false, // 是否分页
        preventRebound: true,
        infinite: 1,
        slidesToScroll: 1,
        timingFunction: "ease",
        duration: 3000,
      },
      keys: "/home",
      Illustrated_list: [
        {
          tite_img: require("../../assets/ssr.png"),
          length_nmber: 6,
          list: [
            {
              img: require("../../assets/huahua.png"),
              max_nmber: 100,
              nmber: 46,
            },
            {
              img: require("../../assets/mangseng.png"),
              max_nmber: 100,
              nmber: 46,
            },
            {
              img: require("../../assets/show.png"),
              max_nmber: 100,
              nmber: 0,
            },
          ],
        },
        {
          tite_img: require("../../assets/premiu.png"),
          length_nmber: 6,
          list: [
            {
              img: require("../../assets/duoge.png"),
              max_nmber: 100,
              nmber: 0,
            },
            {
              img: require("../../assets/diaosu.png"),
              max_nmber: 100,
              nmber: 46,
            },
            {
              img: require("../../assets/meinv.png"),
              max_nmber: 100,
              nmber: 46,
            },
            {
              img: require("../../assets/maozi.png"),
              max_nmber: 100,
              nmber: 46,
            },
            {
              img: require("../../assets/dataji.png"),
              max_nmber: 100,
              nmber: 0,
            },
            {
              img: require("../../assets/maozi.png"),
              max_nmber: 100,
              nmber: 46,
            },
            {
              img: require("../../assets/diaosu.png"),
              max_nmber: 100,
              nmber: 46,
            },
            {
              img: require("../../assets/meinv.png"),
              max_nmber: 100,
              nmber: 46,
            },
          ],
        },
        {
          tite_img: require("../../assets/regula.png"),
          length_nmber: 6,
          list: [
            {
              img: require("../../assets/youling.png"),
              max_nmber: 100,
              nmber: 46,
            },
            {
              img: require("../../assets/kulou.png"),
              max_nmber: 100,
              nmber: 46,
            },
            {
              img: require("../../assets/shuma.png"),
              max_nmber: 100,
              nmber: 46,
            },
            {
              img: require("../../assets/miansha.png"),
              max_nmber: 100,
              nmber: 46,
            },
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
    Reply,
    Share,
    slider,
    slideritem,
    Purchasevue,
  },
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route);
    console.log(this.$loginData);
    this.get_data();
    this.get_work();
    this.box_data();
    // Web3.getWeb3().then((res) => {
    //   web3 = res;
    //   console.log("getWeb3", res);
    // });
  },
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
