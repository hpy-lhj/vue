<template>
  <Main
    keys="/nimo"
    @message_page="message_page"
    :menu_show_c="false"
    bg_color="rgba(0,0,0,0)"
  >
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
              @click="edit_click(index)"
              :key="index"
            >
              <div v-if="index == active_index" class="active_line"></div>
              <p class="tite">
                <span class="key">
                  {{ item.name }}
                </span>
                <!-- <span v-if="item.nmber" class="value">
                  <span class="nnmber">
                    {{ item.nmber }}
                  </span>
                </span> -->
              </p>
            </div>
          </div>
          <!--  -->
          <div class="message_right">
            <!-- 回复 -->
            <div class="one_reply" v-if="active_index == 0">
              <p v-if="comment_list.length <= 0" class="yichang">
                暂无评论消息
              </p>
              <div
                class="reply"
                v-for="(item, index) in comment_list"
                :key="index"
              >
                <div class="reply_top">
                  <img class="left" :src="item.avatar" alt="" />
                  <div class="right">
                    <p class="top">
                      <span class="name">{{ item.user_name }}</span>
                      回复了你在
                      <span class="key">{{ item.collect_name }}</span>
                      的评论
                      <span class="time">{{ item.data_time }}</span>
                    </p>
                    <p class="bot">
                      {{ item.message }}
                    </p>
                  </div>
                </div>
                <div class="reply_bot">
                  <div class="top">
                    <p @click="reply(index)" class="tite">回复</p>
                    <div v-if="item.show" class="hf_confs">
                      <el-input
                        v-model="item.excoment"
                        :class="{
                          shuru_inont_show: item.shuru_inont_show,
                        }"
                        placeholder="请输入回复内容"
                        @input="change($event)"
                      ></el-input>
                      <button @click="send_out(item, index)">发送</button>
                    </div>
                  </div>
                  <div class="reply_bot_cont" v-if="item.last_comment.message">
                    <img :src="item.last_comment.avatar" alt="" />
                    <div class="right">
                      <p class="name">Fieda</p>
                      <p class="value">
                        {{ item.last_comment.message }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 回复  end-->

            <!-- 收到的赞 -->
            <div class="one_reply" v-if="active_index == 1">
              <p v-if="thumb_list.length <= 0" class="yichang">暂无收到的赞</p>
              <div
                class="reply reply_zan"
                v-for="(item, index) in thumb_list"
                :key="index"
              >
                <div class="reply_top">
                  <img class="left" :src="item.avatar" alt="" />
                  <div class="right">
                    <p class="top">
                      <span class="name">{{ item.user_name }}</span>
                      赞了你在
                      <span class="key">{{ item.collect_name }}</span>
                      的评论
                      <span class="time">{{ item.data_time }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 收到的end -->

            <!-- 系统通知 -->
            <div class="one_reply" v-if="active_index == 2">
              <p v-if="notice_list.length <= 0" class="yichang">暂无系统通知</p>
              <div
                class="reply reply_zan"
                v-for="(item, index) in notice_list"
                :key="index"
              >
                <div class="reply_top">
                  <img
                    class="left"
                    src="../../assets/chuangzuotou.png"
                    alt=""
                  />
                  <div class="right">
                    <p class="top">
                      <span class="name">系统通知</span>
                      <span class="time">{{ item.data_time }}</span>
                    </p>
                    <p class="bot">
                      {{ item.message }}
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
                  @click="message_click(item, index)"
                  :class="{
                    private_active: index == xx_index,
                  }"
                  v-for="(item, index) in friends_list"
                  :key="index"
                >
                  <img :src="item.avatar" alt="" />
                  <div class="right">
                    <p class="top">
                      <span class="key">{{ item.user_name }}</span>
                      <span class="value">{{ item.data_time }}</span>
                    </p>
                    <p class="bot">{{ item.message }}</p>
                  </div>
                </div>
              </div>
              <div class="private_letter_right">
                <p class="tite">{{ sx_data.user_name }}</p>
                <div class="cont" id="cont_txt">
                  <div class="cont_info">
                    <div v-for="(item, index) in friends_list_im" :key="index">
                      <p class="time">{{ item.data_time }}</p>
                      <div class="cont_lsit">
                        <div class="left" v-if="item.is_me == 0">
                          <img :src="sx_data.avatar" alt="" />
                          <p class="txt">
                            <span class="value">
                              {{ item.message }}
                            </span>
                          </p>
                        </div>
                        <div class="right" v-if="item.is_me == 1">
                          <div></div>
                          <div class="right_right">
                            <p class="txt">
                              <span class="value">
                                {{ item.message }}
                              </span>
                            </p>
                            <img src="../../assets/chuangzuotou.png" alt="" />
                          </div>
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
      shuru_inont: "",
      shuru_inont_show: false,
      comment_list: [],
      thumb_list: [],
      notice_list: [],
      friends_list: [],
      friends_list_im: [],
      sx_data: {},
      roter_type: this.$route.query.type,
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
    // if (this.roter_type) {
    //   this.active_index =
    //     this.roter_type == 1
    //       ? 2
    //       : this.roter_type == 2
    //       ? 3
    //       : this.roter_type == 3
    //       ? 0
    //       : this.roter_type == 4
    //       ? 1
    //       : 0;
    // }
    this.edit_click(this.active_index);
    console.log(this.active_index);
  },
};
</script>

<style lang="scss" >
@import "./sass/style.scss";
</style>
