<template>
  <div class="home ">
    <div class="grid grid-cols-4 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product._id"
        :product="product"
        :title="product.title"
        :imageUrl="product.imageUrl"
        :price="product.price"
        :description="product.description"
        :inCart="cartItemsId.includes(product._id)"
        @add-to-cart="addToCart(product)"
      />
    </div>
    <!-- <Tabs />
    <FirstTab v-if="selectedTab === 'FirstTab'" />
    <input id="toggle" type="checkbox" v-model="toggle" class="mt-96" />
    <label for="toggle">{{ toggle }}</label> -->
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import {mapGetters, mapActions, mapMutations} from 'vuex'
import Tabs from '../components/Tabs'
import Tab from '../components/Tab'
import FirstTab from '../components/TabsComponents/FirstTab'
import SecondTab from '../components/TabsComponents/SecondTab'
import ThirdTab from '../components/TabsComponents/ThirdTab'
export default {
  name: 'Home',
  components: {
    ProductCard,
    Tabs,
    Tab,
    FirstTab,
    SecondTab,
    ThirdTab
  },
  data() {
    return {
      toggle: false,
      selectedTab: 'FirstTab',
      activeTab: false,
      tabs: ['FirstTab', 'SecondTab', 'ThirdTab']
    }
  },
  mounted() {
    this.selectedTab[0], (this.activeTab = this.selectedTab)
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts'
    }),
    ...mapMutations({
      addToCart: 'addToCart'
    }),
    goDetails() {
      this.$router.push({path: '/product', params: {id: product._id}})
    },
    selectTab(i) {
      this.selectedTab = i

      // loop over all the tabs
      this.tabs.forEach((tab, index) => {
        tab.activeTab = index === i
      })
    },
    getSale() {
      this.prices * 0.8
    }
  },
  computed: {
    ...mapGetters({
      products: 'products',
      cartItems: 'cartItems',
      product: 'product',
      prices: 'productPrices'
    }),
    cartItemsId: ({cartItems}) => cartItems.map(({_id}) => _id)
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>
