<template>
  <div>
    <!-- 个人中心下拉选 -->
    <el-dropdown trigger="click">
      <img
        class="portrait"
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3939608619,1895959066&fm=11&gp=0.jpg"
        alt="头像"
      />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>哒哒哒</el-dropdown-item>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>编辑资料</el-dropdown-item>
        <el-dropdown-item>我的钱包</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  props: {
    news_show: Boolean,
  },
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  mounted: async function () {},
};
</script>
<style lang="scss" scoped>
.el-dropdown-menu {
  padding: 0 !important;
  top: 80px !important;
  width: 164px;
}
.el-dropdown-menu__item {
  padding: 14px 20px !important;
  position: relative;
  &:hover {
    background-color: #f0f4ff !important;
    color: #606266 !important;
  }
}
.el-dropdown-menu__item:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 0.5px;
  background-color: #e6e6e6;
  margin: 0 auto;
}
.portrait {
  display: block;
  border-radius: 50%;
  width: 36px;
  height: 36px;
}
</style>
