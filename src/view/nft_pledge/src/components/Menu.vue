<template>
  <div class="menu_nft">
    <!-- 筛选 -->
    <div class="screen">
      <p
        :class="{
          all_link: menu_status == 0 && !select_xl,
        }"
        class="all"
        @click="change_menu(0)"
      >
        未质押
      </p>
      <p
        :class="{
          all_link: menu_status == 1 && !select_xl,
        }"
        class="all"
        @click="change_menu(1)"
      >
        质押中
      </p>
      <div
        class="select"
        :class="{
          all_link: select_xl,
        }"
      >
        <el-select v-model="select_xl" placeholder="选择系列">
          <el-option
            v-for="item in xl_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // menu_status: {
    //   type: Number,
    //   default: -1,
    // },
  },
  data: function () {
    let _clientH = document.documentElement.clientHeight;
    return {
      menu_status: 0,
      xl_options: [
        {
          value: "0",
          label: "源宇宙",
        },
        {
          value: "1",
          label: "NIMO",
        },
        {
          value: "2",
          label: "盲盒",
        },
      ],
      select_xl: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    change_menu(index) {
      this.menu_status = index;
      this.select_xl = "";
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" >
.menu_nft {
  // 筛选
  .screen {
    margin: 40px 0 50px 0;
    // display: flex;
    // align-items: center;
    .all {
      padding: 8px 25px;
      background-color: #404040;
      border-radius: 19px;
      font-size: 14px;
      color: #fff;
      margin-right:12px;
      display: inline-block;
      &.all_link {
        background-color: #3772ff;
        font-size: 16px;
      }
    }
    .select {
      display: inline-block;
      margin-left: 41px;
      width: 118px;
      height: 36px;
      background: #404040;
      border-radius: 19px;
      border-radius: 19px;
      &.all_link {
        .el-input__inner {
          background-color: #3772ff !important;
          border: 1px solid #3772ff !important;
        }
      }
      .el-input__inner {
        text-align: center;
        border: 1px solid #404040 !important;
        font-size: 16px;
        width: 118px;
        height: 36px;
        background: #404040;
        border-radius: 19px;
        border-radius: 19px;
        color: #fff !important;
        outline: none;
      }
      .el-input__suffix {
        .el-select__caret {
          color: #fff;
        }
      }
    }
  }
}
</style>
