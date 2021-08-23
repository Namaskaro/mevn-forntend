<template>
  <div class="sm:block flex-1 flex">
    <router-link
      :to="{name: 'login'}"
      class="text-black-300 dark:text-white dark:hover:text-blue-700 delay-300  px-3 py-2 rounded-md text-sm font-medium"
      >Logout</router-link
    >

    <button
      type="button"
      class="inline-flex items-center px-2 py-2 border-2 rounded-full hover:shadow-lg"
    >
      <div class="pl-1">
        <span class="mr-2">Namaskaro</span>
      </div>

      <div class="inline-flex w-6 h-6">
        <img
          class="w-6 h-6 object-cover rounded-full"
          alt="User avatar"
          src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=200"
        />
      </div>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
