<template>
  <div class="bootom_fix">
    <!-- 底部 -->
    <p class="tite">获取最新的Maya更新</p>
    <div class="emel">
      <div class="emel_input">
        <input v-model="emel" placeholder="请输入邮箱" />
        <el-button @click="subscribe" type="primary" plain>Go</el-button>
      </div>
    </div>
    <p class="tite">语言</p>
    <div class="select_yy">
      <el-select @change="change" v-model="select_value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="list_text">
      <div class="cont_text">
        <p class="tite">稀有的</p>
        <p class="name">探索</p>
        <p class="name">工作原理</p>
        <p class="name">支持</p>
      </div>
      <div class="cont_text">
        <p class="tite">社区</p>
        <p class="name">关于我们</p>
        <p class="name">加入我们</p>
        <p class="name">建议功能</p>
      </div>
    </div>
    <div class="left_right">
      <p>隐私</p>
      <p>条款</p>
    </div>
    <div class="Line_cont">
      <div class="Line"></div>
    </div>
    <div class="logon_cont">
      <img class="one" src="../assets/facebook.png" alt="" />
      <img class="twe" src="../assets/tuite.png" alt="" />
      <img class="one" src="../assets/instagram.png" alt="" />
      <img class="for" src="../assets/youtube.png" alt="" />
    </div>
    <p class="botm_txt">© Maya, Inc. 保留所有权利</p>
  </div>
</template>
<script>
import { Message } from "element-ui";
import { get, post, del } from "../http/http";
export default {
  props: {},
  data: function () {
    return {
      emel: "",
      select_value: "0",
      options: [
        {
          value: "0",
          label: "中文",
        },
        {
          value: "1",
          label: "English",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    change(data) {
      console.log(data);
      if (data == 0) {
        this.$i18n.locale = "zh-CN"; //切换为中文
      } else {
        this.$i18n.locale = "en-US"; //切换为英文
      }
    },
    subscribe() {
      var myreg =
        /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!myreg.test(this.emel)) {
        Message.error("请输入正确的邮箱");
      } else {
        let data = {
          email: this.emel,
        };
        post(this.$api.apply_creator.subscribe, data)
          .then((res) => {
            Message.success("订阅成功");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss">
.bootom_fix {
  margin-top: 100px;
  padding: 0 0 200px 50px;
  .tite {
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 18px;
  }
  .emel {
    padding-right: 25px;
    margin-bottom: 41px;
    .emel_input {
      padding-left: 25px;
      height: 40px;
      background-color: #404040;
      border-radius: 25px;
      position: relative;
      input {
        border: none;
        background-color: #404040;
        border-radius: 25px;
        width: 100%;
        height: 40px;
        font-size: 14px;
        color: #fff;
      }
      button {
        padding: 0 !important;
        width: 63px;
        height: 100%;
        background: #3772ff;
        border-radius: 25px;
        position: absolute;
        right: 0;
        top: 0;
        color: #fff;
        border: none;
      }
    }
  }
  .select_yy {
    width: 119px;
    height: 40px;
    margin-bottom: 42px;
    .el-input__inner {
      background: #191919;
      box-shadow: 5px 0px 6px rgba(0, 0, 0, 0.16);
      width: 119px;
      height: 40px;
      border: 1px solid #979797 !important;
      opacity: 1;
      border-radius: 25px;
      outline: none;
    }
  }
  .list_text {
    display: flex;
    margin-bottom: 44px;
    .cont_text {
      margin-right: 56px;
      .tite {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #ffffff;
        margin-bottom: 12px;
      }
      .name {
        margin-bottom: 12px;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        color: #777777;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .left_right {
    display: flex;
    margin-bottom: 35px;
    p {
      font-size: 14px;
      font-family: PingFangSC-Regular;
      color: #777777;
      margin-right: 14px;
      &:hover {
        color: #fff;
      }
    }
  }
  .Line_cont {
    padding-right: 50px;
    margin-bottom: 46px;
    .Line {
      border: 1px solid #e6e6e6;
      opacity: 1;
    }
  }
  .logon_cont {
    padding-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 41px;
    .one {
      display: block;
      width: 20px;
      height: 20px;
    }
    .twe {
      display: block;
      width: 24px;
      height: 20px;
    }
    .for {
      display: block;
      width: 26px;
      height: 18px;
    }
  }
  .botm_txt {
    font-size: 14px;
    font-family: PingFangSC-Regular;
    color: #777777;
  }
}
</style>
