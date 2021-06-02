<template>
  <Main keys="/creation">
    <template>
      <div class="creation">
        <!-- 头部介绍 -->
        <div class="top_introduce">
          <div class="introduce_left">
            <p class="one_tite">Maya创作者计划</p>
            <p class="sologin">Maya平台招募创作型艺术家、画家，</p>
            <p class="sologin">
              在这里可以发挥你的创作，最终我们会将你的作品生成NFT进行发售。
            </p>
            <p class="sologin soling_fgon">自由投稿，原创作品想投就投！</p>
            <p class="sologin">创造价值，设计作品将被更多人关注与收藏！</p>
            <p class="sologin">系统审核，上传通过便可进行发售，收入可观！</p>
            <p class="sologin soling_fgtw">
              无论你是独立画家或者机构都可以成为我们的签约对象
            </p>

            <el-button class="pri_buton" type="primary" round
            @click="counter"
              >我要加入</el-button
            >
          </div>
          <div class="introduce_right">
            <img class="right_img" src="../../assets/right_ch.png" alt="" />
          </div>
        </div>
        <!-- 合作代表 -->
        <div class="cooperation">
          <p class="tite">我们的合作代表</p>
          <div class="cooperation_list">
            <div class="cooper" v-for="(item, index) in posdata" :key="index">
              <img :src="item" alt="" />
              <div class="bot_infor">
                <div class="infor">
                  <div class="infor_top">
                    <img src="../../assets/tou.png" alt="" />
                    <span>签约画家：元元</span>
                  </div>
                  <p class="infor_txt">
                    简介：这是玛尼令牌-黄金版。作为此代币的所有者，您贡献了Mani
                    Grupa。每个所有者都是我们的高级合作伙伴。
                  </p>
                  <div class="infor_bot">
                    <p>
                      <span class="key">14.24</span>
                      <span class="value"> EHT</span>
                    </p>
                    <p>
                      <span class="key">1.8k</span>
                      <span class="value"> 粉丝</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 我要加入 -->
        <div class="join" id="productId">
          <p class="tite">我要加入</p>
          <div class="form_tabel">
            <img class="tori_img" src="../../assets/success.png" alt="" />
            <p class="right_logo">MAYA</p>
            <div class="form_cont">
              <!-- 表单验证 -->
              <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                class="join_ruleForm"
              >
                <el-form-item label="类型" prop="radio">
                  <el-radio-group v-model="ruleForm.radio">
                    <el-radio-button label="0">个人</el-radio-button>
                    <el-radio-button label="1">机构</el-radio-button>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="邮箱" prop="emel">
                  <el-input
                    placeholder="请输入您的邮箱，我们将在3个工作日内给您答复"
                    v-model="ruleForm.emel"
                  ></el-input>
                </el-form-item>
                <el-form-item label="联系方式" prop="mobile">
                  <el-input
                    placeholder="请输入您的手机号"
                    v-model="ruleForm.mobile"
                  ></el-input>
                </el-form-item>
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
                    placeholder="请输入您的个人介绍，内容详细通过几率更高"
                    v-model="ruleForm.textarea"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="个人网站" prop="itw">
                  <el-input
                    placeholder="请输入您的个人网站"
                    v-model="ruleForm.itw"
                  ></el-input>
                </el-form-item>
                <el-form-item label="上传作品" prop="works">
                  <div class="works">
                    <p class="guige">PNG, GIF, WEP, MP4或MP3. 最多30mb</p>
                    <Upload>
                      <el-button class="ext_but" size="small" type="primary"
                        >上传文件</el-button
                      >
                    </Upload>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <el-button class="confirm" type="primary" round>提交审核</el-button>
        </div>
      </div>
    </template>
  </Main>
</template>
<script>
import Main from "../../components/Main";
import Upload from "../../components/Upload";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";

export default {
  data() {
    return {
      posdata: [
        require("../../assets/karste.png"),
        require("../../assets/jon.png"),
        require("../../assets/enward.png"),
      ],
      ruleForm: {
        radio: "0",
        emel: "",
        mobile: "",
        name: "",
        textarea: "",
        itw: "",
        works: "",
      },
      rules: {
        radio: [{ required: true, message: "请选择类型", trigger: "change" }],
        works: [{ required: true, message: "请上传作品", trigger: "change" }],
        emel: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur",
          },
          {
            validator: function (rule, value, callback) {
              if (
                /^\w{1,64}@[a-z0-9\-]{1,256}(\.[a-z]{2,6}){1,2}$/i.test(
                  value
                ) == false
              ) {
                callback(new Error("邮箱格式错误"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
        mobile: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "blur",
          },
          {
            validator: function (rule, value, callback) {
              if (/^1[34578]\d{9}$/.test(value) == false) {
                callback(new Error("手机号格式错误"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
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
        itw: [
          {
            required: true,
            message: "请输入个人网站",
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
    Upload
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
