<template>
  <div
    class="bg-bgLight dark:bg-black delay-300 shadow-xl rounded-lg overflow-hidden relative"
  >
    <div
      class="absolute top-3 left-0 text-lg text-white bg-bgMediumLight px-4 py-2 "
    >
      {{ price }} $
    </div>
    <div
      class="bg-cover bg-no-repeat bg-center h-80 bg-clip-border rounded-lg p-4"
      :style="{backgroundImage: 'url(' + imageUrl + ')'}"
    >
      <div class="flex justify-end">
        <svg
          class="h-6 w-6 text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="p-8 flex items-center justify-around relative text-center">
      <p
        class=" tracking-wide text-md lg:text-lg dark:text-white delay-300 font-bold text-paragraph h-12"
      >
        {{ title }}
      </p>
      <div class="flex items-center justify-around text-center absolute -top-5">
        <router-link :to="{name: 'product', params: {id: product._id}}">
          <button
            class="flex items-center justify-around btn-outline bg-bgMediumLight  px-6 py-2   rounded-full   mouse  transition ease-in duration-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </router-link>
      </div>
    </div>
    <div class="flex h-14 p-2 m-4">
      <CounterInput />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CounterInput from '../components/CounterInput'
export default {
  components: {
    CounterInput
  },
  props: {
    _id: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    product: {
      type: Object,
      default: () => {}
    },
    inCart: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(['fetchProducts'])
  },
  mounted() {
    this.fetchProducts()
  }
}
</script>

<style lang="scss" scoped></style>
