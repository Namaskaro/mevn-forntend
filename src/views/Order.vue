<template>
  <div class="2-xl:container">
    <div class="grid grid-cols-12 gap-4 ">
      <div class="col-start-1 col-end-5 ">
        <OrderItem v-for="item in cartItems" :key="item.id" :item="item" />
      </div>
      <div class="col-start-5 col-end-12">2</div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {StripeElements, StripeElement} from 'vue-stripe-elements-plus'
import OrderItem from '../components/OrderItem'
export default {
  name: 'PaymentSimple',

  components: {
    StripeElements,
    StripeElement,
    OrderItem
  },

  data() {
    return {
      stripeKey:
        'pk_test_51HgW8yJBeM1lGzNFhNCS6LuVgO1VGMlOFBAH2QuYtBMEQTASfmK6eqSNzjDM4ToSdyeCWa0WHMBxotIWULANzd3T00jnZ0gdic'
    }
  },
  computed: {
    ...mapGetters(['cartItems'])
  },

  methods: {
    pay() {}
  }
}
</script>
<style scoped>
.order {
  font-size: 16px;
  padding: 7px 20px;
  background-color: #445ea0;
  color: white;
  border-radius: 10px;
  outline: none;
}
.order:hover {
  background-color: #8a88f8;
}
</style>

<div>
    <div v-for="item in cartItems" :key="item.id">
      {{ item.price }} | {{ item.title }}
    </div>
    <div class="payment-simple ">
      <StripeElements :stripe-key="stripeKey" #default="{ elements }">
        <StripeElement :elements="elements" />
      </StripeElements>
      <button @click="pay" type="button" class="order m-40">Pay</button>
    </div>
  </div>
