<template>
  <Main keys="/nimo" :menu_show_c="false" bg_color="rgba(0,0,0,0)">
    <template>
      <div :style="{ height: min_height }" class="message_page">
        <div class="edit_cont">
          <div class="message_left">
            <div
              :class="{
                active_edit: index == active_index,
              }"
              class="edit_list"
              v-for="(item, index) in edit_list"
              @click="edit_click(item, index)"
              :key="index"
            >
              <div v-if="index == active_index" class="active_line"></div>
              <p class="tite">
                <span class="key">
                  {{ item.name }}
                </span>
                <span v-if="item.nmber" class="value">
                  <span class="nnmber">
                    {{ item.nmber }}
                  </span>
                </span>
              </p>
            </div>
          </div>
          <!--  -->
          <div class="message_right">
            <!-- 回复 -->
            <div class="one_reply" v-if="active_index == 0">
              <div class="reply" v-for="item in 2" :key="item">
                <div class="reply_top">
                  <img
                    class="left"
                    src="../../assets/chuangzuotou.png"
                    alt=""
                  />
                  <div class="right">
                    <p class="top">
                      <span class="name">Fieda</span>
                      回复了你在
                      <span class="key">《元宇宙》</span>
                      的评论
                      <span class="time">36分钟前</span>
                    </p>
                    <p class="bot">
                      I like Yuan Yuan for a long time, and finally I found a
                      place to buy his works. Chong
                    </p>
                  </div>
                </div>
                <div class="reply_bot">
                  <div class="top">
                    <p @click="reply_show = !reply_show" class="tite">回复</p>
                    <el-input
                      v-if="reply_show"
                      v-model="price_value"
                      placeholder="请输入回复内容"
                    ></el-input>
                  </div>
                  <div class="reply_bot_cont">
                    <img src="../../assets/tou.png" alt="" />
                    <div class="right">
                      <p class="name">Fieda</p>
                      <p class="value">
                        I like Yuan Yuan for a long time, and finally I found a
                        place to buy his works. Chong
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 回复  end-->

            <!-- 收到的赞 -->
            <div class="one_reply" v-if="active_index == 1">
              <div class="reply reply_zan" v-for="item in 2" :key="item">
                <div class="reply_top">
                  <img
                    class="left"
                    src="../../assets/chuangzuotou.png"
                    alt=""
                  />
                  <div class="right">
                    <p class="top">
                      <span class="name">Fieda</span>
                      赞了你在
                      <span class="key">《元宇宙》</span>
                      的评论
                      <span class="time">36分钟前</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 收到的end -->

            <!-- 系统通知 -->
            <div class="one_reply" v-if="active_index == 2">
              <div class="reply reply_zan" v-for="item in 2" :key="item">
                <div class="reply_top">
                  <img
                    class="left"
                    src="../../assets/chuangzuotou.png"
                    alt=""
                  />
                  <div class="right">
                    <p class="top">
                      <span class="name">系统通知</span>
                      <span class="time">36分钟前</span>
                    </p>
                    <p class="bot">
                      钱包在我们的高级用户之间发送空投。我们会不时地去更新会让…阅
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 系统通知 end -->

            <!-- 私信 -->
            <div class="private_letter" v-if="active_index == 3">
              <div class="private_letter_left">
                <p class="tite">近期消息</p>
                <div
                  class="list"
                  @click="xx_index = index"
                  :class="{
                    private_active: index == xx_index,
                  }"
                  v-for="(item, index) in 2"
                  :key="index"
                >
                  <img src="../../assets/chuangzuotou.png" alt="" />
                  <div class="right">
                    <p class="top">
                      <span class="key">系统通知</span>
                      <span class="value">36分钟前</span>
                    </p>
                    <p class="bot">钱包在我们的高级用户之间</p>
                  </div>
                </div>
              </div>
              <div class="private_letter_right">
                <p class="tite">系统通知</p>
                <div class="cont" id="cont_txt">
                  <div class="cont_info">
                    <p class="time">10:23</p>
                    <div
                      class="cont_lsit"
                      v-for="(item, index) in cont_info_list"
                      :key="index"
                    >
                      <div class="left" v-if="item.type">
                        <img src="../../assets/chuangzuotou.png" alt="" />
                        <p class="txt">
                          <span class="value">
                            {{ item.name }}
                          </span>
                        </p>
                      </div>
                      <div class="right" v-if="!item.type">
                        <div></div>
                        <div class="right_right">
                          <p class="txt">
                            <span class="value">
                              {{ item.name }}
                            </span>
                          </p>
                          <img src="../../assets/chuangzuotou.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shuru_inout">
                  <div class="input_padd">
                    <el-input
                      type="textarea"
                      :class="{
                        shuru_inont_show: shuru_inont_show,
                      }"
                      v-model="shuru_inont"
                      placeholder="请输入你想问的"
                    ></el-input>
                  </div>
                  <el-button
                    @click="send_out_click()"
                    class="send_out"
                    type="primary"
                    round
                    >发送</el-button
                  >
                </div>
              </div>
            </div>
            <!-- 私信 end-->

            <!-- 关注动态 -->
            <div class="follow" v-if="active_index == 4">
              <img class="left" src="../../assets/miansha.png" alt="" />
              <div class="right">
                <p class="tite">源计划（元宇宙）</p>
                <p class="infor">
                  这是玛尼令牌-黄金版。作为此代币的所有者，您贡献了Mani Grupa。
                  每个所有者都是我们的高级合作伙伴。我们会不时地使用我们的加密
                  钱包在我们的高级用户之间发送空投。我们会不时地去更新
                </p>
                <p class="tite">售价:</p>
                <p class="price">
                  <span class="key">1.8 ETH</span>
                  <span class="value">$4,002.85</span>
                </p>
                <div class="author_information">
                  <div class="author_cont">
                    <img
                      class="left"
                      src="../../assets/chuangzuotou.png"
                      alt=""
                    />
                    <div class="right">
                      <p class="top">创作者</p>
                      <p class="cont">元元</p>
                      <p class="time">发布日期：2021-12-12</p>
                    </div>
                  </div>
                </div>
                <div class="bot_but">
                  <el-button
                    @click="$router.push('/product_details')"
                    class="chakan"
                    type="primary"
                    round
                    >查看详情</el-button
                  >
                  <el-button
                    @click="$router.push('/purchase_page')"
                    class="goumai"
                    type="primary"
                    round
                    >立即购买</el-button
                  >
                </div>
              </div>
            </div>
            <!-- 关注动态 end-->
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
import Upload from "../../components/Upload";
export default {
  data() {
    let _clientH = document.documentElement.clientHeight;
    return {
      min_height: `${_clientH}px`,
      price_value: "",
      reply_show: false,
      shuru_inont: "",
      shuru_inont_show: false,
      cont_info_list: [
        {
          name:
            "简介：这是玛尼令牌-黄金版。作为此代币的所有者，您贡献了Mani Grupa。每个所有者都是我们的高级合作伙伴。",
          type: true,
        },
        {
          name:
            "简介：这是玛尼令牌-黄金版。作为此代币的所有者， 您贡献了Mani Grupa。每个所有者都是我们的高级合作伙伴。",
          type: false,
        },
      ],
      xx_index: 0,
      edit_list: [
        {
          name: "回复我的",
          nmber: 2,
        },
        {
          name: "收到的赞",
          nmber: 3,
        },
        {
          name: "系统通知",
          nmber: 2,
        },
        {
          name: "私信通知",
          nmber: 1,
        },
        {
          name: "关注动态",
          nmber: 0,
        },
      ],
      active_index: 0,
    };
  },
  watch: watch,
  methods: methods,
  computed: computed,
  components: {
    Main,
    Upload,
  },
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route);
  },
};
</script>

<style lang="scss" >
@import "./sass/style.scss";
</style>
