<template>
  <div>
    <!-- 消息盒 -->
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <i style="font-size: 17px; color: #333333" class="el-icon-bell"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <p class="news_tite">
          <span class="news_tite_left">消息盒</span>
          <span class="news_tite_right">清空</span>
        </p>
        <el-dropdown-item
          v-for="(item, index) in news_list"
          :key="index"
          @click.native="nav_click(item, index)"
          >{{ item }}</el-dropdown-item
        >
        <p class="news_bot">查看全部</p>
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
    return {
      news_list: [
        "[关注] 元元创建了新作品“元宇宙”",
        "[公告] 最新版本7月18日12:00发",
        "[推荐] Dive oftrn推荐了你的",
        "[关注] Dive oftrn关注了你",
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    nav_click(item, index) {
      console.log(item);
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" scoped>
.el-dropdown-menu {
  padding: 0 !important;
  top: 80px !important;
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
.news_tite {
  padding: 18px 20px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .news_tite_left {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
  }
  .news_tite_right {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #c4c4c4;
  }
}
.news_bot {
  padding: 16px 0;
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}
</style>
