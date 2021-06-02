<template>
  <div class="menu">
    <!-- 筛选 -->
    <div class="screen">
      <p
        :class="{
          all_link: menu_status == -1,
        }"
        class="all"
        @click="change_menu(-1)"
      >
        全部
      </p>
      <div class="select">
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
      <div class="select">
        <el-select v-model="select_time" placeholder="时间排序">
          <el-option
            v-for="item in time_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="select">
        <el-select v-model="select_price" placeholder="价格排序">
          <el-option
            v-for="item in price_options"
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
      menu_status: -1,
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
      time_options: [
        {
          value: "0",
          label: "购买前",
        },
        {
          value: "1",
          label: "购买后",
        },
      ],
      price_options: [
        {
          value: "0",
          label: "由高到底",
        },
        {
          value: "1",
          label: "由低到高",
        },
      ],
      select_xl: "",
      select_time: "",
      select_price: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    change_menu(index) {
      this.menu_status = index;
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" >
.menu {
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
      margin-right: 31px;
      display: inline-block;
      &.all_link {
        background-color: #3772ff;
        font-size: 16px;
      }
    }
    .select {
      display: inline-block;
      margin-right: 30px;
      width: 118px;
      height: 36px;
      background: #404040;
      border-radius: 19px;
      border-radius: 19px;
      .el-input__inner {
        text-align: center;
        border: 1px solid #404040 !important;
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
