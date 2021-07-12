<template>
  <Main keys="/nimo" :menu_show_c="false" bg_color="rgba(0,0,0,0)">
    <template>
      <div :style="{ height: min_height }" class="editing_materials">
        <div class="edit_cont">
          <div class="edit_cont_left">
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
                {{ item }}
              </p>
            </div>
          </div>
          <!--  -->
          <div class="edit_cont_right">
            <div class="edit_cont_right_cont">
              <!-- 个人信息编辑 -->
              <div v-if="active_index == 0" class="percent_edit">
                <div class="tou_opin">
                  <img :src="tou_img" alt="" />
                  <Upload @on_success="on_success">
                    <el-button class="ext_but" size="small" type="primary"
                      >上传新头像</el-button
                    >
                  </Upload>
                </div>
                <!-- 表单验证 -->
                <div class="form_input">
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    class="join_ruleForm"
                  >
                    <el-form-item label="姓名" prop="name">
                      <el-input
                        placeholder="请输入您的名称"
                        v-model="ruleForm.name"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="个人介绍" prop="textarea">
                      <el-input
                        type="textarea"
                        :rows="5"
                        placeholder="请输入您的个人介绍"
                        v-model="ruleForm.textarea"
                      >
                      </el-input>
                    </el-form-item>
                  </el-form>
                </div>
                <!-- 账户链接 -->
                <div class="account_lj">
                  <p class="tite">
                    <span class="key">账户链接</span>
                    <span class="value">点击授权即可</span>
                  </p>
                  <div class="lj_fx">
                    <div class="list">
                      <img src="../../assets/pcent_fx_1.png" alt="" />
                      <p>Twitter</p>
                    </div>
                    <div class="list">
                      <img src="../../assets/pcent_fx_2.png" alt="" />
                      <p>Face book</p>
                    </div>
                    <div class="list">
                      <img src="../../assets/pcent_fx_5.png" alt="" />
                      <p>Instagram</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 账户链接编辑 -->
              <div v-else class="account_cont">
                <p class="tite">已绑定支付钱包</p>
                <div class="wallet">
                  <div class="wallet_list">
                    <span class="value">暂无绑定钱包</span>
                  </div>
                </div>
                <p class="tite">未绑定支付钱包</p>
                <div class="wallet">
                  <div class="wallet_list">
                    <img src="../../assets/weitu.png" alt="" />
                    <span class="key">BNB 支付</span>
                  </div>
                  <div class="wallet_list">
                    <img src="../../assets/weitu1.png" alt="" />
                    <span class="key">ETH 支付</span>
                  </div>
                  <div class="wallet_list">
                    <span class="key">稳定币支付</span>
                  </div>
                </div>
                <p class="tite">绑定信用卡</p>
                <div class="card_list">
                  <p>已绑定卡号：2425 2342 2345 367</p>
                  <span>删除</span>
                </div>
                <!-- 表单验证 -->
                <div class="form_input">
                  <el-form
                    :model="accont_ruleForm"
                    :rules="accont_rules"
                    ref="accont_ruleForm"
                    class="join_ruleForm"
                  >
                    <el-form-item label="卡号" prop="card">
                      <el-input
                        placeholder="请输入您的信用卡卡号…"
                        v-model="accont_ruleForm.card"
                      ></el-input>
                      <el-button class="accont_but" size="small" type="primary"
                        >绑定</el-button
                      >
                    </el-form-item>
                  </el-form>
                </div>
                <p class="add_to">添加信用卡</p>
              </div>
            </div>
            <el-button
              v-if="active_index == 0"
              @click="preservation"
              class="conmit"
              size="small"
              type="primary"
              >保存个人信息</el-button
            >
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
import Upload from "./src/components/Upload.vue";
export default {
  data() {
    let _clientH = document.documentElement.clientHeight;
    return {
      min_height: `${_clientH}px`,
      edit_list: ["基本信息", "账户链接"],
      active_index: 0,
      tou_img: this.$loginData.userMobile,
      ruleForm: {
        name: this.$loginData.userName,
        textarea: this.$loginData.inviteCode,
        works: "",
      },
      accont_ruleForm: {
        card: "",
      },
      accont_rules: {
        card: [
          {
            required: true,
            message: "请输入您的信用卡卡号…",
            trigger: "blur",
          },
        ],
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入名称",
            trigger: "blur",
          },
        ],
        textarea: [
          {
            required: true,
            message: "请输入个人介绍",
            trigger: "blur",
          },
        ],
      },
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
    console.log(this.$loginData);
    this.metadata();
    // this.getWordData()
  },
};
</script>

<style lang="scss" >
@import "./sass/style.scss";
</style>
