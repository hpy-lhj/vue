<template>
  <div class="search">
    <el-row class="demo-autocomplete">
      <el-col>
        <el-autocomplete
          class="inline-input"
          v-model="search_value"
          :fetch-suggestions="querySearch"
          placeholder="输入你想搜索的"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
    </el-row>
    <img src="../assets/search.png" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      restaurants: [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
      ],
      search_value: "",
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [];
    },
    handleSelect(item) {
      console.log(item);
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.search {
  margin-left: 213px;
  position: relative;
  .el-input__inner {
    width: 692px;
    height: 57px;
    background: #1d1d1d;
    opacity: 1;
    border-radius: 29px;
    border: none;
    padding: 0 25px;
    color: #fff !important;
  }
  img {
    position: absolute;
    display: block;
    width: 29px;
    height: 28px;
    right: 25px;
    top: 50%;
    margin-top: -14px;
  }
}
.el-scrollbar__view {
  li {
    color: #fff !important;
    &:hover {
      background-color: rgba(0, 0, 0, 0) !important;
    }
  }
}
</style>