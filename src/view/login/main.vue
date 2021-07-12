<template>
  <div class="login" :style="{ height: min_height }">
    <div class="login_left">
      <div @click="$router.push('/')" class="link_but">Maya</div>
    </div>

    <div class="login_right">
      <div class="docker_login">
        <div class="login_cont">
          <!--  -->
          <div class="login_top">
            <div class="tite">
              <div class="text_active" @click="activeName = true">
                <p class="key">密码登录</p>
                <div v-if="activeName" class="active_lin"></div>
              </div>
              <div class="text_active" @click="activeName = false">
                <p class="key">注册</p>
                <div v-if="!activeName" class="active_lin"></div>
              </div>
            </div>
            <p v-if="activeName" class="sologin">
              登录后您可以拥有自己的个人中心
            </p>
          </div>
          <!--  -->
          <div class="login_input">
            <p class="tite">电子邮件</p>
            <el-form
              :model="ruleForm"
              :rules="activeName ? ruless : rules"
              ref="ruleForm"
              class="ruleForm"
            >
              <el-form-item prop="e_mail">
                <el-input
                  placeholder="请输入正确的邮箱"
                  v-model="ruleForm.e_mail"
                ></el-input>
              </el-form-item>
              <el-form-item
                v-if="!activeName"
                class="verif"
                prop="verification"
              >
                <el-input
                  maxlength="6"
                  placeholder="请输入验证码"
                  v-model="ruleForm.verification"
                ></el-input>
                <span v-if="veri_show" class="buton_h" @click="getCode"
                  >获取验证码</span
                >
                <span class="buton_h" v-else>{{ times }}s</span>
              </el-form-item>
              <p class="tite">密码</p>
              <el-form-item prop="powsword">
                <el-input
                  placeholder="请输入正确的邮箱"
                  v-model="ruleForm.powsword"
                ></el-input>
              </el-form-item>
            </el-form>
            <!--  -->
            <el-button
              @click="login_click"
              class="but_login"
              type="primary"
              round
              >{{ activeName ? "登录" : "注册" }}</el-button
            >
          </div>
          <!--  -->
          <div class="tripartite">
            <div class="lin_cont">
              <p class="linner"></p>
              <p class="text">或者第三方登录</p>
              <p class="linner"></p>
            </div>
            <div class="tripartite_login">
              <div class="img_txt">
                <img src="../../assets/login_gg.png" alt="" />
                <span class="login_txt">Google</span>
              </div>
              <div class="img_txt">
                <img src="../../assets/login_feisi.png" alt="" />
                <span class="login_txt">Facebook</span>
              </div>
              <div class="img_txt">
                <img src="../../assets/login_tt.png" alt="" />
                <span class="login_txt">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";

export default {
  data() {
    let _clientH = document.documentElement.clientHeight;
    return {
      activeName: true,
      min_height: `${_clientH}px`,
      veri_show: true,
      times: 60,
      ruleForm: {
        e_mail: "",
        verification: "",
        powsword: "",
      },
      rules: {
        e_mail: [
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
        verification: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 3, max: 6, message: "验证码格式错误", trigger: "blur" },
        ],
        powsword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "密码格式错误", trigger: "blur" },
        ],
      },
      ruless: {
        e_mail: [
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
        powsword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "密码格式错误", trigger: "blur" },
        ],
      },
    };
  },
  watch: watch,
  methods: methods,
  computed: computed,
  components: {},
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route);
    console.log(this.$loginData);
  },
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
