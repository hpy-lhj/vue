<template>
  <div class="menus">
    <!-- 筛选 -->
    <div class="screens">
      <div class="select">
        <el-select
          @change="xl_change"
          v-model="select_xl"
          placeholder="选择系列"
        >
          <el-option
            v-for="item in xl_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="select select_ej">
        <el-select
          @change="active_click"
          v-model="select_list"
          placeholder="选择类型"
        >
          <el-option
            v-for="item in select_ej"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="select select_asc">
        <el-select @change="price_change" v-model="select_price">
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
      select_ej: [
        {
          value: "",
          label: "所有卡片",
        },
        {
          value: "0",
          label: "卡牌",
        },
        {
          value: "1",
          label: "卡包",
        },
        {
          value: "2",
          label: "SSR卡",
        },
        {
          value: "3",
          label: "热门卡",
        },
        {
          value: "4",
          label: "普通卡",
        },
        {
          value: "5",
          label: "高级卡",
        },
      ],
      xl_options: [
        {
          value: "0",
          label: "全部",
        },
        {
          value: "1983405071",
          label: "源宇宙系列",
        },
        {
          value: "1983405072",
          label: "NIMO 系列",
        },
        {
          value: "1983405073",
          label: "盲盒系列",
        },
      ],
      price_options: [
        {
          value: "0",
          label: "时间：由早到晚",
        },
        {
          value: "1",
          label: "时间：由晚到早",
        },
        {
          value: "2",
          label: "价格：由高到低",
        },
        {
          value: "3",
          label: "价格：由低到高",
        },
      ],
      select_xl: "0",
      select_price: "0",
      select_list: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    xl_change(item) {
      console.log(item);
      this.$emit("xl_change", item);
    },
    price_change(item) {
      console.log(item);
      this.$emit("price_change", item);
    },
    active_click(item) {
      console.log(item);
      this.$emit("active_click", item);
    },
  },
  mounted: async function () {},
};
</script>
<style lang="scss" >
.menus {
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
      background: #3772ff;
      border-radius: 19px;
      border-radius: 19px;
      &.select_ej {
        background: rgba(0, 0, 0, 0);
        .el-input__inner {
          border: 1px solid #fff !important;
          background: rgba(0, 0, 0, 0);
        }
      }
      &.select_asc {
        width: 164px !important;
        background: #404040 !important;
        margin-right: 0 !important;
        .el-input__inner {
          border: 1px solid #404040 !important;
          background: #404040 !important;
          width: 164px !important;
        }
      }
      .el-input__inner {
        text-align: center;
        border: 1px solid #3772ff !important;
        width: 118px;
        height: 36px;
        background: #3772ff;
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
