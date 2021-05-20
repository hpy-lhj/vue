<template>
  <div class="main">
    <div class="Navigation">
      <!-- 导航区 -->
      <div class="Nav_left">
        <span
          class="tite"
          :class="{ active: index == isActive }"
          v-for="(item, index) in Navigation_list"
          @click="nav_clack(item, index)"
          :key="index"
        >
          {{ item.name }}
        </span>
      </div>
      <!-- 消息区 -->
      <div class="Nav_right">
        <p class="right_nv" @click="news_show = !news_show">
          <News></News>
          <span class="nav_dn"></span>
        </p>
        <!--  -->
        <p class="right_nv Collection" @click="icon_show = !icon_show">
          <span>藏品</span>
          <i
            :class="{
              arrowTransform: !icon_show,
              arrowTransformReturn: icon_show,
            }"
            class="el-icon-arrow-up"
          ></i>
        </p>
        <!--  -->
        <p class="right_nv login">
          <span>注册登录</span>
        </p>
        <!--  -->
        <p class="right_nv">
          <Personal></Personal>
          <!-- <img
            class="portrait"
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3939608619,1895959066&fm=11&gp=0.jpg"
            alt="头像"
          /> -->
        </p>
      </div>
    </div>
    <div class="linder"></div>
    <Collection :dialogVisible="icon_show"></Collection>
    <slot> </slot>
    <!-- 通用底部 -->
    <div class="bottom_fix">
      <!-- 内容 -->
      <div class="bot_cont">
        <div>
          <p class="tite">获取最新的Maya更新</p>
          <div class="input_cont">
            <el-input v-model="e_mail" placeholder="你的邮箱"></el-input>
            <button class="comit">算我一个</button>
          </div>
        </div>
        <div>
          <p class="tite">稀有的</p>
          <p class="option">选项</p>
          <p class="option">工作原理</p>
          <p class="option">支持</p>
        </div>
        <div>
          <p class="tite">社区</p>
          <p class="option">关于我们</p>
          <p class="option">加入我们</p>
          <p class="option">建议功能</p>
        </div>
        <div>
          <p class="tite">语言</p>
          <el-select class="select" v-model="language" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <!-- 分割线 -->
      <div class="dividing_line"></div>
      <!-- 三方信息 -->
      <div class="ther_infor">
        <div class="infor_left">
          <span class="one">© Maya, Inc. 保留所有权利</span>
          <span class="two">条款</span>
          <span>隐私</span>
        </div>
        <div class="infor_right">
          <img class="face" src="../assets/facebook.png" alt="" />
          <img class="tuite" src="../assets/tuite.png" alt="" />
          <img class="inst" src="../assets/instagram.png" alt="" />
          <img class="yout" src="../assets/youtube.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import News from "./news";
import Collection from "./Collection";
import Personal from "./personal";
export default {
  props: {
    isActive: String,
  },
  data: function () {
    return {
      e_mail: "",
      language: "0",
      options: [
        {
          value: "0",
          label: "简体中文",
        },
        {
          value: "1",
          label: "English",
        },
      ],
      Navigation_list: [
        {
          name: "logo",
          url: "/",
        },
        {
          name: "市场",
          url: "/market",
        },
        {
          name: "盒子计划",
          url: "",
        },
        {
          name: "农场计划",
          url: "",
        },
        {
          name: "创作者计划",
          url: "creation",
        },
      ],
      news_list: [
        "[关注] 元元创建了新作品“元宇宙”",
        "[公告] 最新版本7月18日12:00发",
        "[推荐] Dive oftrn推荐了你的",
        "[关注] Dive oftrn关注了你",
      ],
      icon_show: false,
    };
  },
  computed: {},
  components: {
    News,
    Collection,
    Personal,
  },
  watch: {},
  methods: {
    // 导航点击方法
    nav_clack(item) {
      let me = this;
      me.$router.push(item.url);
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss">
.main {
  .Navigation {
    height: 100px;
    padding: 0px 240px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .Nav_left {
      display: flex;
      align-items: center;
      .tite {
        display: inline-block;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #777777;
        margin-right: 10px;
        text-align: center;
        line-height: 42px;
        width: 115px;
        height: 42px;
        &:hover {
          background: #f3f3f3;
          border-radius: 8px;
        }
      }
      .active {
        background: #f3f3f3;
        border-radius: 8px;
      }
    }
    .Nav_right {
      display: flex;
      align-items: center;
      .right_nv {
        margin-left: 30px;
        position: relative;
        font-size: 16px;
        .portrait {
          display: block;
          border-radius: 50%;
          width: 36px;
          height: 36px;
        }
        .nav_dn {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #3772ff;
          position: absolute;
          right: 0;
          top: 0px;
        }
      }
      .Collection {
        background: #3772ff;
        border-radius: 19px;
        padding: 8px 21px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        .el-icon-arrow-up{
          font-size: 16px;
        }
      }
      .login {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        background: #f0f4ff;
        border-radius: 19px;
        padding: 8px 21px;
      }
    }
  }
  //  通用底部导航
  .bottom_fix {
    background-color: #f4f4f4;
    padding: 85px 240px 34px 240px;
    .dividing_line {
      width: 100%;
      border: 1px solid #979797;
      margin: 83px 0 40px 0;
    }
    .ther_infor {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .infor_left {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        color: #777777;
        .one{
          display: inline-block;
          margin-right: 71px;
        }
        .two{
          display: inline-block;
          margin-right: 35px;
        }
      }
      .infor_right{
        display: flex;
        align-items: center;
        img{
          display: block;
          margin-left: 35px;
        }
        .face{
          width: 20px;
          height: 20px;
        }
        .tuite{
          width: 24px;
          height: 20px;
        }
        .inst{
          width: 20px;
          height: 20px;
        }
        .yout{
          width: 26px;
          height: 18px;
        }
      }
    }
    .bot_cont {
      display: flex;
      justify-content: space-between;
      .tite {
        font-size: 20px;
        font-family: PingFangSC-Medium;
        color: #333333;
        margin-bottom: 24px;
      }
      .option {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        color: #777777;
        margin-bottom: 14px;
      }
      .input_cont {
        position: relative;
        width: 319px;
        background: #eeeeee;
        border: 1px solid #979797;
        border-radius: 25px;
        .el-input__inner {
          background: #eeeeee;
          width: 100%;
          height: 50px;
          border-radius: 25px;
          border: 0;
        }
        .comit {
          position: absolute;
          width: 115px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background: #3772ff;
          opacity: 1;
          border-radius: 25px;
          right: 0;
          top: 0;
          border: 0;
          font-size: 14px;
          font-family: PingFangSC-Regular;
          line-height: 20px;
          color: #ffffff;
        }
      }
      .select {
        .el-input__inner {
          width: 225px;
          height: 50px;
          background: #eeeeee;
          border: 1px solid #979797;
          border-radius: 25px;
        }
      }
    }
  }
  .linder {
    width: 100%;
    background-color: #f5f5f5;
    height: 3px;
  }
}
.arrowTransform {
  transition: 0.2s;
  transform-origin: center;
  transform: rotateZ(180deg);
}
.arrowTransformReturn {
  transition: 0.2s;
  transform-origin: center;
  transform: rotateZ(0deg);
}
</style>
