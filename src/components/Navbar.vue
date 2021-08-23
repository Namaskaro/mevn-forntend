<template>
  <nav
    class="bg-white border-b-1 border-gray-200 shadow dark:bg-black delay-300 transition-colors"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                class="text-gray-500 dark:text-white dark:hover:text-blue-700 delay-300  hover:text-linkHover  px-3 py-2 rounded-md text-sm font-medium"
                v-for="({id, title}, key) in categories"
                :key="key"
                :to="`/category/${id}`"
                >{{ title }}</router-link
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 flex-1"
        >
          <div class="ml-3 relative">
            <div>
              <ModeToggler />
            </div>
          </div>
        </div>
        <!-- <UnauthorizedSection /> -->
        <AuthorizedSection />
        <div class="flex-1 flex align-middle justify-items-center align-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mt-1 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <router-link
            class="text-black-300 dark:text-white px-3 py-2 rounded-md text-sm font-medium
            uppercase relative"
            :to="{name: 'cart'}"
            >Cart
            <div
              class="-right-2 top-0 absolute rounded-full w-5 h-5 bg-linkHover  flex justify-center items-center"
            >
              <span
                href="#"
                class="flex justify-items-center align-center rounded-full bg-linkHover text-md text-white"
                >{{ cartCount }}</span
              >
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- <SearchBarMain /> -->
  </nav>
</template>

<script>
import ModeToggler from './ModeToggler'
import UnauthorizedSection from '../components/UnauthorizedSection'
import AuthorizedSection from '../components/AuthorizedSection'
import {mapGetters, mapActions} from 'vuex'
export default {
  components: {
    ModeToggler,
    UnauthorizedSection,
    AuthorizedSection
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
      cartCount: 'cartCount',
      hetTheme: 'getTheme'
    })
  },
  methods: {
    ...mapActions({
      fetchCategories: 'fetchCategories'
    }),
    toggleMode() {
      this.$store.dispatch('toggleTheme')
    }
  }
}
</script>

<style lang="sass" scoped></style>
