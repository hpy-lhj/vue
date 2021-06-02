<template>
  <Main :keys="$route.query.id==1?'/universe':$route.query.id==2?'/nimo':$route.query.id==3?'/blind_box':'/'">
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
                    class="left"
                    src="../../assets/chuangzuotou.png"
                    alt=""
                  />
                  <div class="right">
                    <p class="top">creator</p>
                    <p class="bot">Yuanyuan</p>
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
                  <p>
                    This is Mani Token-Gold Edition. As the owner of this token,
                    you contributed Mani Grupa.
                  </p>
                  <p>
                    Each owner is our senior partner.We will use me from time to
                    time.
                  </p>
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
                  <img @click="Share_show=true" class="fx_img" src="../../assets/fenxiang.png" alt="" />
                </div>
              </div>
              <!-- 轮播区域 -->
              <div class="spwapers">
                <!-- <div class="eng_cont">
                  <el-carousel
                    :interval="4000"
                    :autoplay="false"
                    type="card"
                    height="200px"
                  >
                    <el-carousel-item
                      v-for="(item, index) in img_list"
                      :key="index"
                    >
                      <img class="img_item" :src="item" alt="" />
                    </el-carousel-item>
                  </el-carousel>
                </div> -->
                <Swper :showNum="2" :data="img_list"> </Swper>
              </div>
            </div>
          </div>
        </div>
        <!-- 作品区域 -->
        <div class="works">
          <p class="tite">Former universe NFTS</p>
          <div class="list_cont">
            <div class="list" v-for="(item, index) in 3" :key="index">
              <div class="content">
                <div class="top_infot">
                  <img src="../../assets/tou.png" alt="" />
                  <p>创作者：元元</p>
                </div>
                <img class="zp_img" src="../../assets/nftzp.png" alt="" />
                <p class="type_sogin">卡牌合集类型1-元宇宙</p>
                <p class="price">
                  <span class="key">5.65 ETH</span>
                  <span class="value">($100.3)</span>
                </p>
                <button
                  @click="$router.push('/product_details')"
                  class="conmit"
                >
                  Buy now
                </button>
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
                <img
                  @click="uap_clack(index)"
                  v-if="item.list.length > 5"
                  class="aup_img"
                  :class="{
                    aup_imgarrow: item.length_nmber == 6,
                    aup_imgarrowReturn: item.length_nmber > 6,
                  }"
                  src="../../assets/aup.png"
                  alt=""
                />
                <div class="card" v-for="(card, id) in item.list" :key="id">
                  <div v-if="id < item.length_nmber">
                    <div class="mask" v-if="card.nmber == 0"></div>
                    <img :src="card.img" alt="" />
                    <p class="nmber" v-if="card.nmber > 0">
                      剩余数量：<span>{{ card.nmber }}</span
                      ><span>/</span><span>{{ card.max_nmber }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 评论回复 -->
        <div class="reply_cont">
          <Reply></Reply>
        </div>
      </div>
    </template>
     <Share :share_vis="Share_show" @close="close_click"></Share>
  </Main>
</template>
<script>
import Main from "../../components/Main";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";
import Swper from "../../components/swper";
import Reply from "./src/components/reply";
import Share from "./src/components/Share";
export default {
  name: "HelloWorld",
  data() {
    return {
      Share_show:false,
      img_list: [
        require("../../assets/xlimg.png"),
        require("../../assets/taylor.png"),
        require("../../assets/unsplash.png"),
        require("../../assets/taylor.png"),
        require("../../assets/unsplash.png"),
      ],
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
    Swper,
    Reply,
    Share
  },
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route);
  },
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
