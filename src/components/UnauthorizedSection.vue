<template>
  <div class="sm:block flex-1">
    <router-link
      :to="{name: 'login'}"
      class="text-black-300 dark:text-white dark:hover:text-blue-700 delay-300  px-3 py-2 rounded-md text-sm font-medium"
      >Login</router-link
    >
    <router-link
      :to="{name: 'login'}"
      class="text-black-300 dark:text-white dark:hover:text-blue-700 delay-300  px-3 py-2 rounded-md text-sm font-medium"
      >SignUp</router-link
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
