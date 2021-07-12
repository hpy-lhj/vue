<template>
  <Main keys="/nimo" :menu_show_c="false" bg_color="rgba(0,0,0,0)">
    <template>
      <div class="personal_center" :style="{ height: min_height }">
        <div class="top_img">
          <!-- <div class="ext_bg" v-if="!pcener_id">
            <p class="key">替换横幅图像</p>
            <p class="value">最佳尺寸 1920 x 330px</p>
            <Upload>
              <el-button class="ext_but" size="small" type="primary"
                >替换图像</el-button
              >
            </Upload>
          </div> -->
        </div>
        <!-- 个人信息内容 -->
        <div class="pcent_infor">
          <div class="top_pcent_cont">
            <div class="top_pcent">
              <img
                v-if="$loginData.userMobile"
                class="touiopn"
                :src="ip + $loginData.userMobile"
                alt=""
              />
              <img
                v-else
                class="touiopn"
                src="../../assets/chuangzuotou.png"
                alt=""
              />
              <div class="name_ext">
                <span class="name">{{ $loginData.userName }}</span>
                <img
                  v-if="!pcener_id"
                  @click="$router.push('/editing_materials')"
                  class="right_img"
                  src="../../assets/pcent_fenxiang.png"
                  alt=""
                />
              </div>
              <p class="text_infor">
                {{ $loginData.inviteCode || "未设置签名" }}
              </p>
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
                <Menu
                  @active_click="active_click"
                  @price_change="price_change"
                  @xl_change="xl_change"
                  v-if="active_index != 4"
                ></Menu>
              </div>
            </div>
            <!-- NFT产品 -->
            <div
              class="my_Collection"
              v-if="active_index != 4 && works_list.length > 0"
            >
              <div class="list_cont">
                <div
                  class="list"
                  v-for="(item, index) in works_list"
                  :key="index"
                >
                  <div
                    class="content"
                    :class="{ act_content: active_index == 0 }"
                  >
                    <!-- 头部 -->
                    <div class="top_infot">
                      <div class="item_cont">
                        <!-- 创作者 -->
                        <el-tooltip
                          class="item"
                          effect="light"
                          placement="top-start"
                        >
                          <div slot="content" v-if="item.product">
                            <p>创作者：{{ item.product.creator.nickname }}</p>
                          </div>
                          <img
                            class="tou_img"
                            @click="$router.push('/personal_center?id=1')"
                            :src="ip + item.product.creator.avatar"
                            alt=""
                          />
                        </el-tooltip>
                        <!-- 拥有者 -->
                        <el-tooltip
                          class="item"
                          effect="light"
                          placement="right-start"
                          v-if="active_index != 2"
                        >
                          <div slot="content" v-if="item.owner">
                            <p>拥有者：{{ item.owner.nickname }}</p>
                          </div>
                          <img
                            v-if="item.owner"
                            class="tou_img tou_imgs"
                            @click="$router.push('/personal_center?id=1')"
                            :src="ip + item.owner.avatar"
                            alt=""
                          />
                        </el-tooltip>
                      </div>

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
                    <img
                      @click="
                        $router.push(
                          item.type == 0
                            ? active_index != 2
                              ? '/purchase_page?id=' + item.id
                              : '/purchase_page?diting=1&id=' + item.id
                            : active_index != 2
                            ? '/product_details?id=' + item.id
                            : '/product_details?diting=1&id=' + item.id
                        )
                      "
                      class="zp_img"
                      :src="ip + item.product.resources[0].address"
                      alt=""
                    />
                    <p class="type_sogin">
                      {{ item.collection.name }}-{{ item.product.name }}
                    </p>
                    <p class="price">
                      <span class="key">${{ item.price }}</span>
                      <button
                        v-if="active_index != 0"
                        @click="purchase(item)"
                        class="conmit"
                        :class="{
                          conmits: active_index == 1 || active_index == 2,
                        }"
                      >
                        Buy now
                      </button>
                    </p>
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
            <div class="abnormal" v-if="works_list.length <= 0">
              <img src="../../assets/undraw.png" alt="" />
              <p @click="$router.push('/market')" class="text">
                暂无NFT，去<span>市场</span>逛逛>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 关注粉丝 -->
      <Follow
        :centerDialogVisible_nmber="centerDialogVisible_nmber"
        :centerDialogVisible="centerDialogVisible_show"
        @closeBindWarnStandard="handleCloseBindWarnStandard"
      ></Follow>
      <!-- 分享 -->
      <Share :share_vis="Share_show" @close="close_click"></Share>
    </template>
    <Purchasevue
      :types="types"
      :centerDialogVisible="pur_show"
      :works="works"
      @closeBindWarnStandard="pur_show = false"
    ></Purchasevue>
    <Ypurchasevue
      :types="types"
      :centerDialogVisible="pur_shows"
      :works="workss"
      @closeBindWarnStandard="pur_shows = false"
    >
    </Ypurchasevue>
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
import Purchasevue from "../../components/Purchasevue";
import Ypurchasevue from "./src/components/Ypurchasevue";
export default {
  data() {
    let _clientH = document.documentElement.clientHeight;
    return {
      types: false,
      ip: "http://18.166.177.61:8080",
      Share_show: false,
      love_show: true,
      min_height: `${_clientH}px`,
      pcener_id: this.$route.query.id,
      centerDialogVisible_show: false,
      centerDialogVisible_nmber: 5,
      pur_show: false,
      pur_shows: false,
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
      works_list: [],
      workss: {},
      works: {},
      collection_id: "",
      order_type: "created_at",
      asc: "0",
      type: "",
      status: "1",
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
    Purchasevue,
    Ypurchasevue,
  },
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route.query.id);
    console.log(this.$loginData);
    this.get_work();
    this.center_work();
  },
};
</script>

<style lang="scss" >
@import "./sass/style.scss";
</style>
