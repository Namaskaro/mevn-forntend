<template>
  <v-row>
    <v-col v-for="(item, index) in cartItems" :key="item.id" cols="12">
      <v-card color="#1F7087" dark v-if="cartItems">
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-avatar class="ma-3" size="125" tile>
            <v-img :src="item.imageUrl"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="headline">{{ item.title }}</v-card-title>

            <v-card-subtitle
              >{{ item.description }} - {{ item.cnt }}</v-card-subtitle
            >

            <v-card-actions>
              <v-btn
                class="ml-2 mt-3"
                fab
                icon
                height="40px"
                right
                width="40px"
                @click="removeFromCart"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </v-col>
    {{ total }}
    <v-btn @click="onOrder">Order Now</v-btn>
  </v-row>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['cartItems', 'cart', 'total'])
  },
  methods: {
    ...mapActions(['remove']),
    removeFromCart() {
      this.$store.dispatch('remove')
    },
    onOrder() {
      this.$router.push({name: 'order'})
    }
  }
}
</script>

<style></style>
