<template>
  <Main keys="/bnb_lp">
    <template>
      <div class="bnb_lp">
        <div class="lp_top">
          <p class="tite">Farms</p>
          <p class="infor">Stake Liquidity Pool(LP) tokens to earn.</p>
        </div>
        <!-- DIFI 列表 -->
        <div class="bnb_cont">
          <p class="bnb_tite">
            <span class="tite">资产</span>
            <span class="tite">收获</span>
            <span class="tite">总资产</span>
            <span class="tite">存入</span>
            <span class="tite">链</span>
          </p>
          <div class="list_list" v-for="(item, index) in 20" :key="item">
            <div class="list"  @click="i_click(index)">
              <div class="assets tite">
                <img src="../../assets/weitu1.png" alt="" />
                <span>MAYA-ETH</span>
              </div>
              <p class="tite">23.51%</p>
              <p class="tite">$12,312,243</p>
              <p class="tite">0.000</p>
              <p class="tite">Ethereum</p>
              <i
                :class="{
                  arrowTransform: active != index,
                  arrowTransformReturn: active == index,
                }"
                class="el-icon-arrow-up"
              ></i>
            </div>
            <!-- 展开 -->
            <el-collapse-transition>
              <div class="up_list" v-if="active == index">
                <p class="tite">可用:0.00</p>
                <p class="infor">您的钱包最少要持有MAYA和BTH的其中一个,</p>
                <p class="infor">
                  我们会将您的另外一个自动转换为MAYA-BTH进行质押
                </p>
                <div class="pl_zy">
                  <div class="select">
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <div class="max_input">
                    <input type="text" v-model="max_value" />
                    <span>Max</span>
                  </div>
                  <el-button class="comit" type="primary">确认</el-button>
                </div>
                <p class="tite">提取 ETH</p>
                <p class="infor">金库余额：0.000</p>
                <div class="pl_zy plzy_bot">
                  <div class="max_input">
                    <input type="text" v-model="max_value" />
                    <span>Max</span>
                  </div>
                  <span class="link">> ></span>
                  <div class="select">
                    <el-select v-model="value" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <el-button class="comit" type="primary">提取收益</el-button>
                  <el-button class="comit" type="primary">全部提取</el-button>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
      </div>
    </template>
  </Main>
</template>
<script>
import Main from "../../components/Main";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";

export default {
  data() {
    return {
      active: 1000000000,
      value: "1",
      max_value: 0,
      options: [
        {
          name: "MAYA",
          value: "1",
        },
        {
          name: "BTH",
          value: "2",
        },
      ],
    };
  },
  watch: watch,
  methods: methods,
  computed: computed,
  components: {
    Main,
  },
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route);
  },
};
</script>

<style lang="scss">
@import "./sass/style.scss";
</style>
