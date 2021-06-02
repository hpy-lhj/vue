<template>
  <Main keys="/box_plan">
    <template>
      <div class="box_plan">
        <!-- 侧边固定盒子 -->
        <div class="filx_box">
          <div class="filx_box_list">
            <div>
              <p class="key">盒子1</p>
              <p class="value">分享获取</p>
            </div>
            <img src="../../assets/box_se.png" alt="" />
          </div>
          <div class="filx_box_list">
            <div>
              <p class="key">盒子2</p>
              <p class="value">限量发售</p>
            </div>
            <img src="../../assets/box_lian.png" alt="" />
          </div>
          <div class="filx_box_list">
            <div>
              <p class="key">我的</p>
              <p class="value">我获得的</p>
            </div>
            <img src="../../assets/box_se.png" alt="" />
          </div>
        </div>
        <!-- 头部 -->
        <div class="box_bg_top">
          <div class="box_bg_top_cont">
            <div class="box_introduce">
              <div class="tite">
                <p>Maya盒子计划</p>
                <p>我们将分为两种等级</p>
              </div>
              <div class="infor">
                <p>所有人都可以参与计划</p>
                <p>我们可以通过盒子计划获得不同的NFT</p>
              </div>
              <div class="buts">
                <button>我要参与</button>
              </div>
            </div>
          </div>
        </div>
        <!-- 限定盒子 -->
        <div class="limit_box">
          <div class="limit_box_cont">
            <div class="limit_box_left">
              <p class="tite">限定盒子300个</p>
              <p class="tite">可直接购买</p>
            </div>
            <div class="limit_box_right">
              <p class="key">售价:</p>
              <p style="display: inline-block">
                <span class="ont">9</span><span class="ont_value">.98 EHT</span>
              </p>
            </div>
          </div>
          <!-- 玩法 -->
          <div class="lightly_box">
            <div class="lightly_box_top">
              <div class="left">
                <div class="top">
                  玩法：直接购买，盒子内可获得3张优惠券、5个NFT，60%几率开出稀有NFT，限量发售300个
                </div>
                <div class="bot">
                  <p class="tite">剩余盒子：</p>
                  <div class="nmber_jd">
                    <div class="nmber_jd_left">
                      <div
                        :style="{ width: nmber + '%' }"
                        class="nmber_jd_lin"
                      ></div>
                    </div>
                    <span class="nmber">18/100</span>
                  </div>
                </div>
              </div>
              <div class="right">立即购买</div>
            </div>
            <!-- 盒子内容 -->
            <div class="content_box">
              <p class="tite">盒子内容：</p>
              <div class="box_list">
                <div
                  class="list"
                  v-for="(item, index) in Illustrated_list"
                  :key="index"
                >
                  <img :src="item" alt="" />
                  <div class="bot_hover">
                    <div class="cont">
                      <p class="top">SSR</p>
                      <p class="bot">30%几率获得</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 积分盒子 -->
        <div class="limit_box limit_box_xd">
          <div class="limit_box_cont">
            <div class="limit_box_left">
              <p class="tite">积分满100可免费兑换盒子</p>
            </div>
          </div>
          <!-- 玩法 -->
          <div class="lightly_box">
            <div class="lightly_box_top">
              <div class="left">
                <div class="top">
                  玩法：转发、关注推特、加群、购买NFT都可以获得积分，积分达到100即可获得盒子1，盒子内包含（初级卡、高级卡、优惠券）
                  <p>有机会开出SSR等稀有卡牌</p>
                </div>
                <div class="bot bot_js">
                  <p class="tite">进行中：</p>
                  <div class="nmber_jd">
                    <div class="nmber_jd_left">
                      <div
                        :style="{ width: nmber + '%' }"
                        class="nmber_jd_lin"
                      ></div>
                    </div>
                    <span class="nmber">18/100</span>
                  </div>
                </div>
                <!-- 表格玩法介绍 -->
                <div class="tabels">
                  <table border="1" cellspacing="0" cellpadding="0">
                    <thead>
                      <tr>
                        <th>类型</th>
                        <th>规则</th>
                        <th>积分</th>
                        <th>方式</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>转发</td>
                        <td>每天可转发1次，每次1积分</td>
                        <td>16积分</td>
                        <td>
                          <div class="fx">
                            <img src="../../assets/box_fx.png" alt="" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>关注</td>
                        <td>关注官方推特可+1积分</td>
                        <td>1积分</td>
                        <td>
                          <div class="dui">
                            <img src="../../assets/dui.png" alt="" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>加群</td>
                        <td>加入MAYA官方群可+2积分</td>
                        <td>2积分</td>
                        <td>
                          <div class="dui">
                            <img src="../../assets/jia.png" alt="" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>购买</td>
                        <td>购买NFT可获得积分</td>
                        <td>45积分</td>
                        <td style="color: #8eafff">去市场></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="right right_js">立即解锁</div>
            </div>
            <!-- 盒子内容 -->
            <div class="content_box content_box_js">
              <p class="tite">盒子内容：</p>
              <div class="box_list">
                <div
                  class="list"
                  v-for="(item, index) in Illustrated_list"
                  :key="index"
                >
                  <img :src="item" alt="" />
                  <div class="bot_hover">
                    <div class="cont">
                      <p class="top">SSR</p>
                      <p class="bot">30%几率获得</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      nmber: 18,
      Illustrated_list: [
        require("../../assets/huahua.png"),
        require("../../assets/mangseng.png"),
        require("../../assets/show.png"),
        require("../../assets/meinv.png"),
        require("../../assets/kulou.png"),
        require("../../assets/miansha.png"),
        require("../../assets/shuma.png"),
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

<style lang="scss"  scoped>
@import "./sass/style.scss";
</style>
