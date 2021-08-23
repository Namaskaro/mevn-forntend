<template>
  <div class="w-full h-full flex flex-col justify-center items-center ">
    <div class="flex justify-center items-center">
      <button
        @click="toggleMode"
        class="py-1 px-4 bg-purple-400 dark:bg-white rounded-md not-outlined"
      >
        <svg
          class="h-6 w-6 text-indigo-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          v-if="theme === 'light'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>

        <svg
          class="h-6 w-6 text-white dark:text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          v-if="theme === 'dark'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      isDark: false
    }
  },
  computed: {
    ...mapGetters(['theme'])
  },
  methods: {
    toggleMode() {
      this.$store.dispatch('toggleTheme')
    }
  }
}
</script>

<style lang="css" scoped>
.not-outlined {
  outline: none;
}
input[type='checkbox'] {
  height: 0;
  width: 0;
  visibility: hidden;
}
label {
  cursor: pointer;
  text-indent: -9999px;
  width: 60px;
  height: 30px;
  background: #8487b0;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 100%;
  transition: 0.3s;
}

input:checked + label {
  background: #ffffff;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
  background: #ffffff;
}
</style>
