<template>
  <Main keys="/market">
    <template>
      <div class="market">
        <div :style="{ height: min_height }" class="dialogVisible">
          <div class="Collection_cont_for">
            <div class="tite">
              <span class="left">市场</span>
              <div class="right">
                <input type="text" placeholder="输入你想要搜索的" />
                <img src="../../assets/search.png" alt="" />
              </div>
            </div>
            <Menu
              @active_click="active_click"
              @price_change="price_change"
              @xl_change="xl_change"
            ></Menu>
            <div class="my_Collection" v-if="works_list.length > 0">
              <div class="list_cont">
                <div
                  class="list"
                  v-for="(item, index) in works_list"
                  :key="index"
                >
                  <div class="content">
                    <!-- 头部 -->
                    <div class="top_infot">
                      <div class="item_cont">
                        <!-- 创作者 -->
                        <el-tooltip
                          class="item"
                          effect="light"
                          placement="top-start"
                        >
                          <div slot="content">
                            <p>创作者：{{ item.product.creator.nickname }}</p>
                          </div>
                          <img
                            class="tou_img"
                            @click="$router.push('/personal_center?id=1')"
                            :src="ip + item.product.creator.avatar"
                            alt=""
                          />
                        </el-tooltip>
                        <!-- 拥有者 -->
                        <el-tooltip
                          class="item"
                          effect="light"
                          placement="right-start"
                        >
                          <div slot="content">
                            <p>拥有者：{{ item.owner.nickname }}</p>
                          </div>
                          <img
                            class="tou_img tou_imgs"
                            @click="$router.push('/personal_center?id=1')"
                            :src="ip + item.owner.avatar"
                            alt=""
                          />
                        </el-tooltip>
                      </div>

                      <div class="right_sc" @click="Collection(item)">
                        <img
                          v-if="item.favorite"
                          src="../../assets/love_laby.png"
                          alt=""
                        />
                        <img v-else src="../../assets/love_with.png" alt="" />
                        <span>{{ item.favorite_number }}</span>
                      </div>
                    </div>
                    <img
                      @click="
                        $router.push(
                          item.type == 0
                            ? '/purchase_page?id=' + item.id
                            : '/product_details?id=' + item.id
                        )
                      "
                      class="zp_img"
                      :src="ip + item.product.resources[0].address"
                      alt=""
                    />
                    <p class="type_sogin">
                      {{ item.collection.name }}-{{ item.product.name }}
                    </p>
                    <p class="price">
                      <span class="key">${{ item.price }}</span>
                      <button @click="purchase(item)" class="conmit">
                        Buy now
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 异常页 -->
            <div class="abnormal" v-else>
              <img src="../../assets/undraw.png" alt="" />
              <p @click="$router.push('/market')" class="text">暂无NFT</p>
            </div>
          </div>
        </div>
      </div>
    </template>
    <Purchasevue
      :types="types"
      :works="works"
      :centerDialogVisible="Share_show"
      @closeBindWarnStandard="Share_show = false"
    ></Purchasevue>
  </Main>
</template>
<script>
import Main from "../../components/Main";
import Purchasevue from "../../components/Purchasevue";
import watch from "./src/watch";
import methods from "./src/methods";
import computed from "./src/computed";
import Menu from "./src/components/Menu";
export default {
  data() {
    let _clientH = document.documentElement.clientHeight;
    return {
      ip: "http://18.166.177.61:8080",
      types: false,
      Share_show: false,
      love_show: true,
      min_height: `${_clientH}px`,
      works_list: [],
      collection_id: "",
      order_type: "created_at",
      asc: "0",
      type: "",
      works: {},
    };
  },
  watch: watch,
  methods: methods,
  computed: computed,
  components: {
    Main,
    Menu,
    Purchasevue,
  },
  mounted: async function () {
    console.log("源文件：", "main/pages/buy/buy_card");
    console.log("this：", this);
    console.log("$route：", this.$route);
    this.get_work();
  },
};
</script>

<style lang="scss"  scoped>
@import "./sass/style.scss";
</style>
