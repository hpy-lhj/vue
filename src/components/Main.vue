<template>
  <div
    class="main"
    :class="{
      main_menu: muen_show,
      menu_shows: !menu_show_c,
    }"
  >
    <!-- 头部 -->
    <div class="fix_nav">
      <div class="Navigation">
        <div>
          <div
            :style="{ background: bg_color }"
            class="nav_left"
            v-if="!menu_show_c"
            @click="$router.go(-1)"
          >
            <img class="zoom" src="../assets/sflo.png" alt="" />
            <img class="logo" src="../assets/logo_sl.png" alt="" />
          </div>
        </div>
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
          <p class="right_nv login" @click="$router.push('/login')">
            <span>注册登录</span>
          </p>
          <!--  -->
          <p class="right_nv">
            <Personal></Personal>
          </p>
        </div>
      </div>
    </div>
    <!-- 侧边导航 -->
    <div
      v-if="menu_show_c"
      :style="{ height: min_height }"
      :class="{
        menu_slck: muen_show,
      }"
      class="side_navigation"
    >
      <div
        class="side_navigation_cont"
        :class="{
          side_navigation_menu: muen_show,
        }"
      >
        <!-- 导航logo 缩放 -->
        <div class="top_zoom">
          <img
            @click="muen_show_click()"
            class="zoom"
            :class="{
              zoom_menu: muen_show,
            }"
            src="../assets/sflo.png"
            alt=""
          />
          <img
            v-if="!muen_show"
            @click="$router.push('/')"
            class="logo"
            src="../assets/logo_sl.png"
            alt=""
          />
        </div>
        <!-- 菜单栏 -->
        <div class="menu">
          <div v-if="!muen_show">
            <div
              class="menu_list"
              v-for="(item, index) in Navigation_list"
              :class="{
                link_menu_list: item.items.length > 0 && item.show,
              }"
              :key="index"
            >
              <!-- 一级菜单 -->
              <div
                class="tite_link"
                :class="{
                  tite_link_menu: item.show,
                }"
                @click="menu_click(item, index)"
              >
                <img
                  class="logo"
                  :src="item.show ? item.select_logo : item.logo"
                  alt=""
                />
                <p class="name">{{ item.name }}</p>
                <img
                  v-if="item.items.length > 0"
                  :class="{
                    index_rota: item.show,
                    fa_index_rota: !item.show,
                  }"
                  class="rotate"
                  src="../assets/xiangshang.png"
                  alt=""
                />
              </div>
              <!-- 二级菜单 -->
              <div class="level_menu" v-if="item.show">
                <div
                  class="level_menu_list"
                  :class="{
                    link_level_menu: items.url == keys,
                  }"
                  v-for="(items, id) in item.items"
                  @click.stop="level_menu_click(items, id)"
                  :key="id"
                >
                  <p class="name">{{ items.name }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 菜单栏收起 -->
          <div class="put_it_away" v-if="muen_show">
            <div
              v-for="(item, index) in menu_away_list"
              :key="index"
              class="menu_away"
              :class="{
                tite_link_menu: item.show,
              }"
              @click="menu_click_awrl(item, index)"
            >
              <div class="menu_away_cont">
                <img
                  class="logo"
                  :src="item.show ? item.select_logo : item.logo"
                  alt=""
                />
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomFix v-if="!muen_show"></BottomFix>
    </div>
    <!-- 藏品组件 -->
    <Collection
      :coll_show="menu_show_c"
      :dialogVisible="icon_show"
    ></Collection>
    <slot> </slot>
  </div>
</template>
<script>
import News from "./news";
import Collection from "./Collection";
import Personal from "./personal";
import BottomFix from "./Bottom_Fix";
export default {
  props: {
    keys: {
      type: String,
      default: "",
    },
    menu_show_c: {
      type: Boolean,
      default: true,
    },
    bg_color: {
      type: String,
      default: "#191919",
    },
  },
  data: function () {
    let _clientH = document.documentElement.clientHeight;
    return {
      news_show: false,
      muen_show: false,
      active_index: 0,
      min_height: `${_clientH}px`,
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
      menu_away_list: [
        {
          name: "所有",
          select_logo: require("../assets/suoyouzhong.png"),
          logo: require("../assets/suoyouwei.png"),
          url: "/",
          show: false,
        },
        {
          name: "市场",
          select_logo: require("../assets/shichangzhong.png"),
          logo: require("../assets/scwei.png"),
          url: "/market",
          show: false,
        },
        {
          name: "盒子计划",
          select_logo: require("../assets/hezizhong.png"),
          logo: require("../assets/heziwei.png"),
          url: "/box_plan",
          show: false,
        },
        {
          name: "农场计划",
          select_logo: require("../assets/nongchangzhong.png"),
          logo: require("../assets/nongchangwei.png"),
          url: "/nft_pledge",
          show: false,
        },
        {
          name: "创作者",
          select_logo: require("../assets/chuangzuoxuan.png"),
          logo: require("../assets/chuangzuozhe.png"),
          url: "/creation",
          show: false,
        },
      ],
      Navigation_list: [
        {
          name: "所有系列",
          select_logo: require("../assets/suoyouzhong.png"),
          logo: require("../assets/suoyouwei.png"),
          url: "",
          show: false,
          items: [
            {
              name: "元宇宙系列",
              url: "/universe",
            },
            {
              name: "NIMO 系列",
              url: "/nimo",
            },
            {
              name: "盲盒系列",
              url: "/blind_box",
            },
          ],
        },
        {
          name: "市场",
          select_logo: require("../assets/shichangzhong.png"),
          logo: require("../assets/scwei.png"),
          url: "/market",
          show: false,
          items: [],
        },
        {
          name: "盒子计划",
          select_logo: require("../assets/hezizhong.png"),
          logo: require("../assets/heziwei.png"),
          url: "/box_plan",
          show: false,
          items: [],
        },
        {
          name: "农场计划",
          select_logo: require("../assets/nongchangzhong.png"),
          logo: require("../assets/nongchangwei.png"),
          url: "",
          show: false,
          items: [
            {
              name: "NFT质押",
              url: "/nft_pledge",
            },
            {
              name: "BNB LP",
              url: "/bnb_lp",
            },
          ],
        },
        {
          name: "创作者计划",
          select_logo: require("../assets/chuangzuoxuan.png"),
          logo: require("../assets/chuangzuozhe.png"),
          url: "/creation",
          show: false,
          items: [],
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
    BottomFix,
  },
  watch: {},
  methods: {
    // 一级菜单
    menu_click(item, index) {
      let me = this;
      me.active_index = index;
      console.log(this.active_index);
      for (var i = 0; i < me.Navigation_list.length; i++) {
        if (i == index) {
          if (me.Navigation_list[index].items.length > 0) {
            me.Navigation_list[index].show = !me.Navigation_list[index].show;
          } else {
            me.Navigation_list[index].show = true;
          }
        } else {
          if (i != 3 && i != 0) {
            me.Navigation_list[i].show = false;
          }
        }
      }
      if (me.Navigation_list[index].items <= 0) {
        me.$router.push(item.url);
      }
    },
    menu_click_awrl(item, index) {
      let me = this;
      me.active_index = index;
      for (var i = 0; i < me.menu_away_list.length; i++) {
        if (i == index) {
          me.menu_away_list[index].show = true;
        } else {
          me.menu_away_list[i].show = false;
        }
      }
      me.$router.push(item.url);
    },
    // 二级菜单
    level_menu_click(item, index) {
      let me = this;
      if (
        item.url == "/universe" ||
        item.url == "/nimo" ||
        item.url == "/blind_box"
      ) {
        me.$router.push(`/?id=${index + 1}`);
      } else {
        me.$router.push(item.url);
      }
    },
    keys_watch() {
      for (let item of this.Navigation_list) {
        if (item.url == this.keys) {
           console.log(item.url)
          item.show = true;
        }
        for (let items of item.items) {
          if (items.url == this.keys) {
            item.show = true;
          }
        }
      }
    },
    keys_watchs() {
      for (let item of this.menu_away_list) {
        if (item.url == this.keys) {
          item.show = true;
        }
      }
      if (
        this.keys == "/universe" ||
        this.keys == "/nimo" ||
        this.keys == "/blind_box"
      ) {
        this.menu_away_list[0].show = true;
      }
      if (
        this.keys == "/bnb_lp"
      ) {
        this.menu_away_list[3].show = true;
      }
    },
    muen_show_click() {
      sessionStorage.setItem("testKey", !this.muen_show);
      this.muen_show = !this.muen_show;
    },
  },
  mounted: async function () {
    this.keys_watch();
    this.keys_watchs();
    this.muen_show = JSON.parse(sessionStorage.getItem("testKey"));
  },
};
</script>
<style lang="scss">
.main {
  padding-left: 297px;
  &.main_menu {
    padding-left: 120px;
  }
  &.menu_shows {
    padding-left: 0 !important;
  }
  .fix_nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 88;
    .Navigation {
      height: 100px;
      padding: 0px 48px;
      background: rgba(54, 54, 54, 0.25);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav_left {
        width: 297px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        top: 0;
        .zoom {
          display: block;
          width: 24px;
          height: 24px;
          margin-right: 20px;
        }
        .logo {
          display: block;
          width: 116px;
          height: 69px;
        }
      }
      .Nav_right {
        display: flex;
        align-items: center;
        .right_nv {
          margin-left: 20px;
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
            background-color: #ff0c82;
            position: absolute;
            right: 0;
            top: 0px;
          }
        }
        .Collection {
          background: #3772ff;
          border-radius: 18px;
          padding: 10px 22px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          .el-icon-arrow-up {
            font-size: 14px;
          }
        }
        .login {
          background: #f1f3f3;
          border-radius: 18px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          line-height: 20px;
          color: #333333;
          padding: 10px 15px;
        }
      }
    }
  }
  // 侧边导航
  .side_navigation {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 297px;
    background: #191919;
    box-shadow: 5px 0px 6px rgba(0, 0, 0, 0.16);
    overflow: auto !important;
    &.menu_slck {
      width: 120px !important;
      display: flex;
      justify-content: center;
    }
    .side_navigation_cont {
      padding: 15px 18px;
      &.side_navigation_menu {
        padding: 39px 0px !important;
      }
      .top_zoom {
        display: flex;
        align-items: center;
        justify-content: center;
        .zoom {
          display: block;
          width: 24px;
          height: 24px;
          margin-right: 13px;
          &.zoom_menu {
            margin-right: 0 !important;
          }
        }
        .logo {
          display: block;
          width: 116px;
          height: 69px;
        }
      }
      .menu {
        margin-top: 28px;
        .menu_list {
          margin: 22px 0;
          &.link_menu_list {
            transition: 0.3s;
            transform-origin: center;
            background: #242424;
            opacity: 1;
            border-radius: 22px;
            padding-bottom: 22px;
          }
          // 一级菜单
          .tite_link {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 14px 0;
            font-size: 16px;
            &:hover {
              background: #3772ff;
              border-radius: 19px;
            }
            .logo {
              display: block;
              width: 24px;
              height: 24px;
              margin-right: 27px;
            }
            .name {
              font-family: PingFang SC;
              font-weight: 400;
              color: #ffffff;
              width: 110px;
              text-align: left;
            }
            .rotate {
              display: block;
              width: 12px;
              height: 7px;
              transform: rotateZ(180deg);
              position: absolute;
              right: 45px;
              top: 50%;
              margin-top: -3.5px;
            }
            .index_rota {
              transition: 0.2s;
              transform-origin: center;
              transform: rotateZ(0deg);
            }
            .fa_index_rota {
              transition: 0.2s;
              transform-origin: center;
              transform: rotateZ(180deg);
            }
          }
          .tite_link_menu {
            background: #3772ff;
            border-radius: 19px;
            font-size: 18px !important;
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffffff;
          }
          // 二级菜单
          .level_menu {
            padding: 0 11px;
            .level_menu_list {
              margin-top: 32px;
              padding: 15px 0;
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: 400;
              line-height: 22px;
              color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              &.link_level_menu {
                background: #404040;
                border-radius: 19px;
              }
              &:hover {
                background: #404040;
                border-radius: 19px;
              }
              .name {
                font-family: PingFang SC;
                font-weight: 400;
                color: #ffffff;
                // width: 110px;
                text-align: left;
              }
            }
          }
        }
        // 菜单收起
        .put_it_away {
          margin-top: 50px;
          .menu_away {
            width: 106px;
            height: 68px;
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 500;
            color: #ffffff;
            text-align: center;
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            &.tite_link_menu {
              background: #3772ff;
              border-radius: 19px;
              font-size: 18px !important;
              font-family: PingFang SC;
              font-weight: 500;
              color: #ffffff;
            }
            &:hover {
              background: #3772ff;
              border-radius: 19px;
            }
            .menu_away_cont {
              width: 106px;
              img {
                margin: 0 auto;
                display: block;
                width: 24px;
                height: 24px;
                margin-bottom: 8px;
              }
            }
          }
        }
      }
    }
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

// 下拉选
.el-popper {
  //   margin: 0 !important;
  border: none !important;
  background: #404040 !important;
  //   border-bottom-left-radius: 19px !important;
  //   border-bottom-right-radius: 19px !important;
  .el-scrollbar {
    border-bottom-left-radius: 19px !important;
    border-bottom-right-radius: 19px !important;
  }
  .popper__arrow {
    border-bottom-color: #404040 !important;
    &::after {
      border-bottom-color: #404040 !important;
    }
  }
  .el-select-dropdown__item {
    background: #404040 !important;
    color: #fff;
  }
  .hover.el-select-dropdown__item:hover {
    background-color: rgba(0, 0, 0, 0) !important;
    color: #3772ff !important;
  }
}
</style>
