<template>
  <div>
    <!-- 消息盒 -->
    <el-dropdown class="nover_info">
      <span class="el-dropdown-link">
        <i style="font-size: 17px; color: #fff" class="el-icon-bell"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <p class="news_tite">
          <span class="news_tite_left">消息盒</span>
          <span class="news_tite_right"></span>
        </p>
        <el-dropdown-item
          v-for="(item, index) in news_list"
          :key="index"
          @click.native="nav_click(item, index)"
          >{{ "[" + item.type_name + "]" + item.message }}</el-dropdown-item
        >
        <p @click="$router.push('/message_page')" class="news_bot">查看全部</p>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { get, post, del } from "../http/http";
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
      this.$emit("news_type", item.type);
      this.$router.push("/message_page");
    },
    get_data() {
      get(this.$api.news.overview)
        .then((res) => {
          this.news_list = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    unread_data() {
      get(this.$api.news.unread)
        .then((res) => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted: async function () {
    this.get_data();
    this.unread_data()
  },
};
</script>
<style lang="scss" scoped>
.el-dropdown-menu {
  padding: 0 15px !important;
  top: 80px !important;
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
  &:before {
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
.news_tite {
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .news_tite_left {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #fff;
  }
  .news_tite_right {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #fff;
  }
}
.news_bot {
  padding: 16px 0;
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
}
</style>
