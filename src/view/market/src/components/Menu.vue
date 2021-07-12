<template>
  <div class="menu">
    <!-- 筛选 -->
    <div class="screen">
      <div class="left">
        <div
          class="select"
          :class="{
            all_link: select_xl,
          }"
        >
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
        <p
          @click="active_click(item, index)"
          class="select_ej"
          :class="{ select_ej_actite: index == active }"
          v-for="(item, index) in select_ej"
          :key="index"
        >
          <span>
            {{ item.label }}
          </span>
        </p>
      </div>
      <div class="left">
        <div class="select select_time">
          <el-select
            @change="price_change"
            v-model="select_price"
            placeholder="价格排序"
          >
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
      active: 999999,
      menu_status: -1,
      select_ej: [
        {
          value: "0",
          label: "卡牌",
        },
        {
          value: "1",
          label: "卡包",
        },
        {
          value: "1",
          label: "SSR卡",
        },
        {
          value: "1",
          label: "热门卡",
        },
        {
          value: "1",
          label: "普通卡",
        },
        {
          value: "1",
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
    active_click(data, index) {
      this.active = index;
      this.$emit("active_click", data.value);
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .select_ej {
        color: #fff;
        margin-right: 12px;
        width: 87px;
        height: 35px;
        border: 1px solid #9d9d9d;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: PingFang SC;
        border-radius: 19px;
        span{
                  font-size: 14px;
        }
        &.select_ej_actite {
          background: #3772ff;
          border: 1px solid #3772ff;
        }
      }
      .select {
        display: inline-block;
        margin-right: 30px;
        width: 132px;
        height: 45px;
        background: #404040;
        border-radius: 23px;
        display: flex;
        align-items: center;
        &.select_time {
          width: 164px;
          height: 36px;
          background: #404040;
          border-radius: 19px;
          .el-input__inner {
            width: 164px;
            height: 36px;
            background: #404040;
          }
        }
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
          width: 132px;
          height: 45px;
          background: #404040;
          border-radius: 23px;
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
}
</style>
