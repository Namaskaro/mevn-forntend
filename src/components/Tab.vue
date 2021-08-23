<template>
  <div class="container">
    <div class="tab" v-if="activeTab">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    selectedTab: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activeTab: false
    }
  },
  mounted() {
    this.activeTab = this.selectedTab
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  left: 0;
  top: 250px;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.tab {
  display: flex;
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 1px 0 rgba(#185ee0, 0.15), 0 6px 12px 0 rgba(#185ee0, 0.15);
  padding: 0.75rem;
  border-radius: 19px;
  padding: 20px 30px;
}
</style>
