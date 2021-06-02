<template>
  <div>
    <!-- 个人中心下拉选 -->
    <el-dropdown>
      <img
        @click="$router.push('/personal_center')"
        class="portrait"
        src="../assets/chuangzuotou.png"
        alt="头像"
      />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="$router.push('/personal_center')"
          >元元</el-dropdown-item
        >
        <el-dropdown-item @click.native="$router.push('/personal_center')"
          >个人中心</el-dropdown-item
        >
        <el-dropdown-item @click.native="$router.push('/login')"
          >退出登录</el-dropdown-item
        >
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
  methods: {
    seeTable(item) {
      // this.
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" scoped>
.el-dropdown-menu {
  padding: 8px 15px !important;
  top: 80px !important;
  width: 164px;
}
.el-dropdown-menu__item {
  padding: 14px 20px !important;
  position: relative;
  color: #fff;
  &:hover {
    background: #4b4b4b !important;
    border-radius: 13px !important;
    color: #fff !important;
  }
  &::before {
    background-color: rgba(0, 0, 0, 0) !important;
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
  width: 40px;
  height: 40px;
}
</style>
