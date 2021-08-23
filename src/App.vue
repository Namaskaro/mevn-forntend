<template>
  <div class="dark:bg-black delay-300 transition-colors">
    <Navbar />
    <div class="container wrapper mx-auto my-10">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
      cartCount: 'cartCount',
      theme: 'getTheme'
    })
  },
  methods: {
    ...mapActions({
      fetchCategories: 'fetchCategories'
    })
  },
  mounted() {
    this.fetchCategories()
  },
  beforeMount() {
    this.$store.dispatch('initTheme')
  },
  computed: {
    ...mapGetters({theme: 'getTheme'})
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === 'light'
        ? document.querySelector('html').classList.remove('dark')
        : document.querySelector('html').classList.add('dark')
    }
  }
}
</script>

<style lang="css"></style>
