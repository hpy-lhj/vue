<template>
  <Main keys="/nimo" :menu_show_c="false" bg_color="rgba(0,0,0,0)">
    <template>
      <div class="personal_center">
        <div class="top_img">
          <div class="ext_bg" v-if="!pcener_id">
            <p class="key">替换横幅图像</p>
            <p class="value">最佳尺寸 1920 x 330px</p>
            <Upload>
              <el-button class="ext_but" size="small" type="primary"
                >替换图像</el-button
              >
            </Upload>
          </div>
        </div>
        <!-- 个人信息内容 -->
        <div class="pcent_infor">
          <div class="top_pcent_cont">
            <div class="top_pcent">
              <img class="touiopn" src="../../assets/chuangzuotou.png" alt="" />
              <div class="name_ext">
                <span class="name">Rckylx</span>
                <img
                  v-if="!pcener_id"
                  @click="$router.push('/editing_materials')"
                  class="right_img"
                  src="../../assets/pcent_fenxiang.png"
                  alt=""
                />
              </div>
              <p class="text_infor">这是全国最牛逼的NFT平台</p>
              <div class="fenxiang_list">
                <img src="../../assets/pcent_inst.png" alt="" />
                <img src="../../assets/pcent_twitter.png" alt="" />
                <img src="../../assets/pcent_facebook.png" alt="" />
              </div>
              <!-- 关注私信 -->
              <div class="others" v-if="pcener_id">
                <el-button style="background: #3772ff" type="primary" round
                  >关注</el-button
                >
                <el-button
                  style="background: #f0f4ff; color: #777777"
                  type="primary"
                  round
                  @click="$router.push('/message_page?type=4')"
                  >私信</el-button
                >
                <img
                  @click="Share_show = true"
                  src="../../assets/detals_fx.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- 菜单内容 -->
          <div class="choice">
            <div class="top_menu">
              <!-- 菜单选择 -->
              <div class="top_menu_left">
                <p
                  :class="{
                    men_cont_active: index == active_index,
                  }"
                  class="men_cont"
                  @click="choice_click(item, index)"
                  v-for="(item, index) in choice_list"
                  :key="index"
                >
                  <span class="key">
                    {{ item.name }}
                    <span class="value">{{ item.nmber }}</span>
                  </span>
                </p>
              </div>
              <!-- 筛选项 -->
              <div class="top_menu_right">
                <Menu v-if="active_index != 4"></Menu>
              </div>
            </div>
            <!-- NFT产品 -->
            <div class="my_Collection" v-if="active_index != 4">
              <!-- 藏品列表 -->
              <div class="Collection_list" v-for="item in 21" :key="item">
                <div class="Collection_list_cont">
                  <!-- 头像，作者名 -->
                  <div class="img_value">
                    <img class="portrait" src="../../assets/chuangzuotou.png" alt="" />
                    <p class="name">创作者：元元</p>
                  </div>
                  <!-- 主图 -->
                  <img   @click="$router.push('/purchase_page')"  class="picture" src="../../assets/nftzp.png" alt="" />
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
            <!-- NFT产品 end -->
            <!-- 活动 -->
            <div class="activity" v-if="active_index == 4">
              <div class="activity_cont">
                <div
                  class="activity_list"
                  v-for="(item, index) in 6"
                  :key="index"
                >
                  <img class="img_left" src="../../assets/tou.png" alt="" />
                  <div class="right">
                    <p class="tite">元元</p>
                    <p class="txt">
                      <span>创建者</span>
                      元元发布了《元宇宙》
                    </p>
                    <p class="time">1小时前</p>
                  </div>
                </div>
              </div>
              <Screen></Screen>
            </div>
            <!-- 活动 end -->
            <!-- 异常页 -->
            <div class="abnormal" v-if="false">
              <img src="../../assets/undraw.png" alt="" />
              <p class="text">暂无NFT，去<span>市场</span>逛逛></p>
            </div>
          </div>
        </div>
      </div>
      <Follow
        :centerDialogVisible_nmber="centerDialogVisible_nmber"
        :centerDialogVisible="centerDialogVisible_show"
        @closeBindWarnStandard="handleCloseBindWarnStandard"
      ></Follow>
      <Share :share_vis="Share_show" @close="close_click"></Share>
    </template>
  </Main>
</template>
<script>
import Main from "../../components/Main";
import Upload from "../../components/Upload";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";
import Menu from "./src/components/Menu";
import Screen from "./src/components/Screen";
import Follow from "./src/components/Follow";
import Share from "./src/components/Share";
export default {
  data() {
    let _clientH = document.documentElement.clientHeight;
    return {
      min_height: `${_clientH}px`,
      pcener_id: this.$route.query.id,
      centerDialogVisible_show: false,
      centerDialogVisible_nmber: 5,
      Share_show: false,
      active_index: 0,
      choice_list: [
        {
          name: "出售中",
          nmber: 11,
        },
        {
          name: "收藏品",
          nmber: 11,
        },
        {
          name: "已创建",
          nmber: 11,
        },
        {
          name: "喜欢了",
          nmber: 11,
        },
        {
          name: "活动",
          nmber: "",
        },
        {
          name: "关注",
          nmber: 11,
        },
        {
          name: "粉丝",
          nmber: 11,
        },
      ],
    };
  },
  watch: watch,
  methods: methods,
  computed: computed,
  components: {
    Main,
    Menu,
    Screen,
    Follow,
    Share,
    Upload,
  },
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route.query.id);
  },
};
</script>

<style lang="scss" >
@import "./sass/style.scss";
</style>
