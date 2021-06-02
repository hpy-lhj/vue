<template>
  <div class="menu">
    <!-- 筛选 -->
    <div class="screens">
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
  props: {},
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
  .screens {
    margin: 0;
    // display: flex;
    // align-items: center;
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
