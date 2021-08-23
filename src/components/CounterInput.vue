<template>
  <div class="custom-number-input h-8 w-24">
    <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
      <button
        class="bg-gray-300   hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer text-base text-linkHover outline-none justify-center flex items-center font-thin"
      >
        -
      </button>
      <span
        class="outline-none text-center w-full bg-gray-300 font-semibold text-md flex items-center justify-center text-gray-700"
      >
        {{ cnt }}
      </span>
      <button
        class="bg-gray-300   hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer text-base  text-linkHover outline-none flex justify-center items-center font-thin"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cnt: 0
    }
  }
}
</script>

<style lang="scss" scoped></style>
